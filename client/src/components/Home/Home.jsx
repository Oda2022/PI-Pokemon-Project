import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPoke } from "../../redux/actions.js";
import Card from "../Card/Card.jsx";
import Paginated from "../Paginated/Paginated.jsx";
import NavHome from "../NavHome/NavHome.jsx";
import MenuFilter from "../MenuFilter/MenuFilter.jsx";
import s from "./Home.module.css";

const Home = () => {
	const dispatch = useDispatch();
	const pokeList = useSelector((state) => state.pokeList);

	useEffect(() => {
		dispatch(getPoke());
	}, []);
	
	/** Paginado */
	const [currentPage, setCurrentPage] = useState(1);

	const pokemonsPerPage = 12;
	const indexOfLastPokemon = currentPage * pokemonsPerPage;
	const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
	const currentPokemons = pokeList.slice(
		indexOfFirstPokemon,
		indexOfLastPokemon
	);

	const pages = (pageNum) => {
		setCurrentPage(pageNum);
	};

	/**Final del paginado */

	return (

		<div className={s.homeContainer}>

			<div className={s.menuContainer}>
				<NavHome setCurrentPage={setCurrentPage} />

					<div className={s.subMenuContainer}>
						<div className={s.filtersContainer}>
							<MenuFilter setCurrentPage={setCurrentPage} />
						</div>
					</div>
			</div>

			<div className={s.paginatedList}>
				<Paginated
					currentPage={currentPage}
					pageNumber={pages}
					amountPerPage={pokemonsPerPage}
					totalAmount={pokeList.length}
				/>
			</div>

			<div className={s.pokeListContainer}>
				<ul className={s.pokeList}>
					{currentPokemons? currentPokemons.map((poke) =>{
					return (<Card
								key = {poke.id}
								id={poke.id} 
								name={poke?.name}
								image={poke?.image}
								types={poke?.types}
							/>)
					}): 'loading...'}
				</ul>
			</div>
			
			
		</div>
        
        
    )
}

export default Home;
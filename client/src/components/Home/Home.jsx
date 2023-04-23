import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPoke } from "../../redux/actions.js";
import NavHome from "../NavHome/NavHome.jsx";
import MenuFilter from "../MenuFilter/MenuFilter.jsx";
import Paginated from "../Paginated/Paginated.jsx";
import Card from "../Card/Card.jsx";
import s from "./Home.module.css";

const Home = () => {
	const dispatch = useDispatch();
	const allPokemon = useSelector((state) => state.pokeList);

	useEffect(() => {
		dispatch(getPoke());
	}, [dispatch]);
	
	/** Paginado */
	const [currentPage, setCurrentPage] = useState(1);
	
	const pokemonsPerPage = 12;
	const indexOfLastPokemon = currentPage * pokemonsPerPage;
	const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
	const currentPokemons = allPokemon.slice(
		indexOfFirstPokemon,
		indexOfLastPokemon
		);
		if(currentPokemons) console.log(currentPokemons)

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
							totalAmount={allPokemon.length}
						/>
					</div>

							<h1>{allPokemon[0]?.name}</h1>
					<div className={s.pokeListContainer}>
						<div className={s.pokeList} >
							{currentPokemons.length > 0 &&  
								currentPokemons.map((poke, index) => 
									<Card
									    key={index}
										id={poke.id}
										name={poke.name}
										image={poke.image}
										types={poke.types}
									/>
								)} 
								
							{currentPokemons.length===0 && <h1>no hay pokemones</h1>} 
						</div>
					</div> 
		</div>
        
        
    )
}

export default Home;
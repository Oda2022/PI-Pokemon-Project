import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearDetailPoke, getIDPoke } from "../../redux/actions.js";
import { useParams } from "react-router-dom";
import s from "./DetailPoke.module.css";
import TypePokeInfo from "../TypePokeInfo/TypePokeInfo.jsx";
import NavSecond from "../NavSecond/NavSecond.jsx";


const DetailPoke = () => {
	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		dispatch(clearDetailPoke());
		dispatch(getIDPoke(id));
	}, [dispatch, id]);

	const pokemonInfo = useSelector((state) => state.poke);
	

	return (
	
				<div className={s.detailsContainer}>
					<NavSecond />

					<div className={s.pokeInfoContainer}>
						<div className={s.pokeInfoImgContainer}>
							<img
								className={s.pokeInfoImg}
								src={pokemonInfo.image}
								alt={pokemonInfo.name}
							/>
							<TypePokeInfo types={pokemonInfo.types} />
						</div>

						<div className={s.pokeInfoDetailsContainer}>
							<div className={s.tableInfoContainer}>
								<h1 className={s.titleInfo}>{pokemonInfo.name}</h1>
								<p>ID: {pokemonInfo.id}</p>
								<div className={s.rowInfo}>
									<p>
										<span className={s.iconHp}></span> HP: {pokemonInfo.hp}
									</p>
									<p>
										<span className={s.iconAttack}></span>Attack:{" "}
										{pokemonInfo.attack}
									</p>
								</div>
								<div className={s.rowInfo}>
									<p>
										<span className={s.iconDefense}></span>Defense:{" "}
										{pokemonInfo.defense}
									</p>
									<p>
										<span className={s.iconSpeed}></span>Speed:{" "}
										{pokemonInfo.speed}
									</p>
								</div>
								<div className={s.rowInfo}>
									<p>
										<span className={s.iconHeight}></span>Height:{" "}
										{pokemonInfo.height} m
									</p>
									<p>
										<span className={s.iconWeight}></span>Weight:{" "}
										{pokemonInfo.weight} kg
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			
		
	);
};

export default DetailPoke;

import React from "react";
import s from "./Card.module.css";
import { Link } from "react-router-dom";
import TypePokeInfo from '../TypePokeInfo/TypePokeInfo.jsx';

const Card = ({ id, name, image, types }) => {
	return (
		<li className={s.cardContainer}>
			<div className={s.cardImageContainer}>
				<img className={s.cardImg} src={image} alt={name} />
			</div>
			<div className={s.cardInfo}>
				<Link to={`/details/${id}`}>
					<h3 className={s.name}>{name}</h3>
				</Link>
				<TypePokeInfo types={types} />
			</div>
		</li>
	);
};

export default Card;
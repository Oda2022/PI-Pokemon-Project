import React from "react";
import s from "./TypePokeInfo.module.css";

const TypePokeInfo = ({ types }) => {
	return (
		<ul className={s.cardTypes}>
			{types?.map((type) => (
				<li key={type.name} className={s.type} value={type.name}>
					{type.name}
				</li>
			))}
		</ul>
	);
};

export default TypePokeInfo;
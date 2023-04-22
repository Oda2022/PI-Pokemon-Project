import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	getTypePoke,
	filterType,
	filterOrderASDS,
	filterOrderAttack,
	filterCreated,
} from "../../redux/actions.js";

import s from "./MenuFilter.module.css";

const MenuFilter = ({ setCurrentPage }) => {
	const dispatch = useDispatch();
	const allType = useSelector((state) => state.typeList);

	useEffect(() => {
		dispatch(getTypePoke());
	}, [dispatch]);

	const handlerFilterByTypes = (e) => {
		e.preventDefault();
		dispatch(filterType(e.target.value));
		setCurrentPage(() => 1);
	};

	const handlerFilterByOrder = (e) => {
		e.preventDefault();
		dispatch(filterOrderASDS(e.target.value));
		setCurrentPage(() => 1);
	};

	const handlerFilterByAttack = (e) => {
		e.preventDefault();
		dispatch(filterOrderAttack(e.target.value));
		setCurrentPage(() => 1);
	};


	const handlerFilterByCreated = (e) => {
		e.preventDefault();
		dispatch(filterCreated(e.target.value));
		setCurrentPage(() => 1);
	};

	return (
		<div className={s.menuFilterContainer}>
			<div>
				<label>Tipo de pokemon: </label>

				<select onChange={(e) => handlerFilterByTypes(e)}>
					<option value='defaultype'>all</option>
					{allType?.map((type) => (
						<option key={type.name} value={type.name}>
							{type.name}
						</option>
					))}
				</select>
			</div>

			<div>
				<label>Tipo de creacion: </label>
				<select onChange={(e) => handlerFilterByCreated(e)}>
					<option value='all'>all</option>
					<option value='existed'>existed</option>
					<option value='created'>created</option>
				</select>
			</div>

			<div>
				<label>Order: </label>
				<select onChange={(e) => handlerFilterByOrder(e)}>
					<option value='defaultASCDES'>default</option>
					<option value='ascending order'>a-z</option>
					<option value='descending order'>z-a</option>
				</select>
			</div>

			<div>
				<label>Tipo de fuerza: </label>
				<select onChange={(e) => handlerFilterByAttack(e)}>
					<option value='defaultattack'>defaultattack</option>
					<option value='to greater attack'>to greater attack</option>
					<option value='to less attack'>to less attack</option>
				</select>
			</div>

		
		</div>
	);
};

export default MenuFilter;
import React from "react";
import { Link } from "react-router-dom";
import s from "./NavHome.module.css";
import SearchBar from '../SearchBar/SearchBar.jsx';

const NavHome = ({ setCurrentPage }) => {
	return (
		<div className={s.navHomeContainer}>
			<div className={s.searchContainer}>
				<SearchBar setCurrentPage={setCurrentPage} />
			</div>
			<Link className={s.navHomeButtonCreate} to='/create-pokemon/'>
				CREAR POKEMON
			</Link>
		</div>
	);
};

export default NavHome;
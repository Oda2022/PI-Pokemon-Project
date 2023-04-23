import React from "react";
import { Link } from "react-router-dom";
import s from "./NavSecond.module.css";

const NavSecond = () => {
	return (
		<nav className={s.navSecondaryContainer}>
			<Link className={s.linkNavSecondary} to='/home'>
				REGRESAR AL HOME
			</Link>
		</nav>
	);
};

export default NavSecond;
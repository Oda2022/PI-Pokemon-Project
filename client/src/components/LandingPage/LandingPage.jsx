import React from "react";
import {Link} from "react-router-dom";
import s from './LandingPage.module.css';
import quienpoke from "../Imagenes/quienpoke fondo2.jpg"

const LandingPage = () => {
    return (
        <div className={s.homepage}>
            <img className={s.imgLanding} src={quienpoke} alt="Bienvenida" />

                <Link className={s.landingbutton} to= '/home'> Ingresar </Link>
            
        </div>
    );
};

export default LandingPage;
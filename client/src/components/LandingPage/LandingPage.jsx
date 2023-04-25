import React from "react";
import {Link} from "react-router-dom";
import s from './LandingPage.module.css';
import quienpoke from "../Imagenes/quienpoke fondo2.jpg"
import sombrapikachu from "../Imagenes/sombrapikachubuttonbienv.png"

const LandingPage = () => {
    return (
        <div className={s.homepage}>
            <img className={s.imgLanding} src={quienpoke} alt="Bienvenida" />

                <Link className={s.landingbutton} to= '/home'>
                <img className={s.buttonImage} src={sombrapikachu} alt='Ingresar' />
                </Link>
            
        </div>
    );
};

export default LandingPage;
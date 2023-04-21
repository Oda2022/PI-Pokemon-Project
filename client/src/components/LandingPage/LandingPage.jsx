import React from "react";
import {Link} from "react-router-dom";
import s from './LandingPage.module.css';

const LandingPage = () => {
    return (
        <div>
            <div>
                <Link className={s.landingbutton} to= '/home'> Ingresar</Link>
            </div>
        </div>
    );
};

export default LandingPage;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useRedirect from "../hooks/useRedirect";

function Landing() {
    useRedirect('/home', 5000);

    return (
        <div className="container text-center mt-5">
            <h1>Bienvenido a Relatos de Papel</h1>
                <div className="row justify-content-center">
                    <div className="w-50">
                        <img
                            src="/images/bienvenida.gif"
                            className="card-img-top"
                            alt="bienvenida"
                        />
                    </div>
                </div>


            <p>Serás redirigido a la página principal en 5 segundos...</p>
        </div>
    );
}

export default Landing;
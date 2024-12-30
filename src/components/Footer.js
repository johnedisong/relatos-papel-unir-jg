import React from 'react';

function Footer() {
    return (
        <footer className="bg-dark text-light mt-5 py-4">
            <div className="container">
                <div className="row gy-4">
                    {/* Información de la librería */}
                    <div className="col-12 col-sm-6 col-lg-4">
                        <h5 className="fw-bold mb-3">Relatos de Papel</h5>
                        <ul className="list-unstyled">
                            <li className="d-flex align-items-center mb-2">
                                <span className="me-2">📍</span>
                                <span>Calle Principal #123</span>
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <span className="me-2">📧</span>
                                <span>info@relatosdepapel.com</span>
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <span className="me-2">📞</span>
                                <span>+57 300 123 4567</span>
                            </li>
                        </ul>
                    </div>

                    {/* Horarios */}
                    <div className="col-12 col-sm-6 col-lg-4">
                        <h5 className="fw-bold mb-3">Horarios de Atención</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <strong>Lun - Vie:</strong> 8:00 AM - 8:00 PM
                            </li>
                            <li className="mb-2">
                                <strong>Sábados:</strong> 9:00 AM - 6:00 PM
                            </li>
                            <li className="mb-2">
                                <strong>Domingos:</strong> 10:00 AM - 4:00 PM
                            </li>
                        </ul>
                    </div>

                    {/* Redes Sociales */}
                    <div className="col-12 col-sm-6 col-lg-4">
                        <h5 className="fw-bold mb-3">Síguenos en Redes</h5>
                        <div className="d-flex flex-column flex-sm-row gap-3">
                            <a href="#" className="text-light text-decoration-none">
                                <i className="bi bi-facebook me-2"></i>Facebook
                            </a>
                            <a href="#" className="text-light text-decoration-none">
                                <i className="bi bi-instagram me-2"></i>Instagram
                            </a>
                            <a href="#" className="text-light text-decoration-none">
                                <i className="bi bi-twitter me-2"></i>Twitter
                            </a>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="col-12">
                        <hr className="my-4" />
                        <p className="text-center mb-0 small">
                            © {new Date().getFullYear()} Relatos de Papel.
                            Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
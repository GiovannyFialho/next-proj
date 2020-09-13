import Link from 'next/link';
import { FaInstagram, FaPhoneAlt } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__container__contactUs" id="contact">
                    <p>Pronto para um novo projeto?</p>
                    <h2>Entre em contato!</h2>
                    <a href="mailto:contato@epicsolutions.com.br">contato</a>
                </div>
                <div className="footer__container__infosContainer">
                    <div className="footer__container__infosContainer__infos">
                        <div className="footer__container__infosContainer__infos__menu">
                            <p>Menu</p>
                            <ul className="footer__container__infosContainer__infos__menu__items">
                                <li className="footer__container__infosContainer__infos__menu__items__item">
                                    <Link href="/#home">
                                        Home
                                    </Link>
                                </li>
                                <li className="footer__container__infosContainer__infos__menu__items__item">
                                    <Link href="/#about">
                                        Sobre
                                    </Link>
                                </li>
                                <li className="footer__container__infosContainer__infos__menu__items__item">
                                    <Link href="/#services">
                                        Produtos
                                    </Link>
                                </li>
                                <li className="footer__container__infosContainer__infos__menu__items__item">
                                    <Link href="/#partners">
                                        Parceiros
                                    </Link>
                                </li>
                                <li className="footer__container__infosContainer__infos__menu__items__item">
                                    <Link href="/#customers">
                                        Clientes
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__container__infosContainer__infos__atendimento">
                            <p>Nossos canais de atendimento</p>
                            <ul className="footer__container__infosContainer__infos__atendimento__items">
                                <li className="footer__container__infosContainer__infos__atendimento__items__item">
                                    <FaInstagram />
                                    <a href="https://www.instagram.com/solutions.epic" target="_blank" rel="noopener noreferrer">@solutions.epic</a>
                                </li>
                                <li className="footer__container__infosContainer__infos__atendimento__items__item">
                                    <FaPhoneAlt />
                                    <a href="https://api.whatsapp.com/send?phone=5511941540357" target="_blank" rel="noopener noreferrer">11 94154-0357</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__container__infosContainer__copyright">
                        <p>© Todos os direitos reservados { new Date().getFullYear() }</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

import React, { useState } from 'react';
import Link from 'next/link';

export default function Header(props){
    const [menuAtivo, setMenuAtivo] = useState("");
    const isSection = props.headerSection ? 'sections' : '';

    function closeMenu(){
        setMenuAtivo("");
    }

    function openMenu(){
        setMenuAtivo("ativo");
    }

    return(
        <header id="main-header" className="header">
            <div className={`header__container container ${isSection}`}>
                <nav className={`header__container__nav ${menuAtivo}`}>
                    <div className="header__container__nav__closeContainer" onClick={closeMenu}>
                        <div className="header__container__nav__closeContainer__close">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <ul className="header__container__nav__items">
                        <li className="header__container__nav__items__item" onClick={closeMenu}>
                            <Link href="/#home">
                                Home   
                            </Link>
                        </li>
                        <li className="header__container__nav__items__item" onClick={closeMenu}>
                            <Link href="/#about">
                                Sobre   
                            </Link>
                        </li>
                        <li className="header__container__nav__items__item" onClick={closeMenu}>
                            <Link href="/#services">
                                Produtos  
                            </Link>
                        </li>
                        <li className="header__container__nav__items__item" onClick={closeMenu}>
                            <Link href="/#partners">
                                Parceiros   
                            </Link>
                        </li>
                        <li className="header__container__nav__items__item" onClick={closeMenu}>
                            <Link href="/#customers">
                                Clientes
                            </Link>
                        </li>
                        <li className="header__container__nav__items__item contato" onClick={closeMenu}>
                            <Link href="/#contact">
                                Contato
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="header__container-toggler hmbgr" type="button" onClick={openMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="header__container__logo">
                    <img src="/img/logo/epic_solutions.svg" alt="Epic Solutions" />
                </div>
            </div>
        </header>
    )
}
import Link from 'next/link';
import { MdAttachMoney, MdWeb, MdFastForward, MdPeople } from 'react-icons/md';

export default function Services() {
    return (
        <section className="services" id="services">
            <div className="container services__container">
                <div className="services__container__title">
                    <h2>Produtos</h2>
                    <p>Algumas de nossas soluções em destaque</p>
                </div>
                <div className="services__container__description">
                    <div className="services__container__description__item">
                        <Link href="/services/criacao-de-loja-virtual">
                            <div>
                                <div className="services__container__description__item__title">
                                    <h3>E-commerce</h3>
                                    <MdAttachMoney />
                                </div>
                                <p>
                                    Tenha os seus produtos disponíveis para seus clientes 24 horas por dia. Nosso sistema conta com os melhores recursos para que seus produtos sejam encontrados facilmente pelos seus clientes. Loja Virtual completa e segura.
                                </p>
                                <div className="services__container__description__item__saibaMais">
                                    <span>Saiba mais</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="services__container__description__item">
                        <Link href="/services/criacao-de-sites-de-resultados">
                            <div>
                                <div className="services__container__description__item__title">
                                    <h3>Criação de sites</h3>
                                    <MdWeb />
                                </div>
                                <p>
                                    Precisa de um site que gere resultados?
                                    Nós criamos sites responsivos, certificados pela w3c, focados em transformar visitantes em potenciais clientes.
                                </p>
                                <div className="services__container__description__item__saibaMais">
                                    <span>Saiba mais</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="services__container__description__item">
                        <Link href="/services/performance">
                            <div>
                                <div className="services__container__description__item__title">
                                    <h3>Performance</h3>
                                    <MdFastForward />
                                </div>
                                <p>Otimização de sites utilizando as melhores técnicas, práticas e ferramentas do mercado.</p>
                                <div className="services__container__description__item__saibaMais">
                                    <span>Saiba mais</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="services__container__description__item">
                        <Link href="/services/consultoria">
                            <div>
                                <div className="services__container__description__item__title">
                                    <h3>Consultoria</h3>
                                    <MdPeople />
                                </div>
                                <p>Entre em contato conosco para fazer uma avalição do seu projeto e tirar ele do papel!</p>
                                <div className="services__container__description__item__saibaMais">
                                    <span>Saiba mais</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

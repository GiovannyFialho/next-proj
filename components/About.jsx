export default function About() {
    const EPIC = '<Epic Solutions />';
    return (
        <section className="about" id="about">
            <div className="about__container container">
                <img src='/img/about-team.jpg' alt="Imagem do time" />
                <div className="about__container__text">
                    <h2>Sobre a {EPIC}</h2>
                    <p>Somos uma empresa focada na experiência do cliente. Nossos produtos são desenvolvidos com tecnologia de ponta para oferecer o melhor para você e para o seu negócio, tudo para te ajudar a explorar o potencial da sua empresa e sua marca na internet. Nosso objetivo é te aproximar do seu público, a nível Brasil e fazendo da internet um novo mercado para sua marca.</p>
                    <p>Nascemos com tecnologia no nosso DNA. Na Epic não importa o tamanho da sua empresa nem do seu projeto, importa o quanto podemos crescer juntos.</p>
                    <p>Como podemos te ajudar a crescer hoje?</p>
                </div>
            </div>
        </section>
    )
}

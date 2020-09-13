import Article from '../Article';

const App = () => {
    const title = "Consultoria";
    const description = "Descritivo de consultoria";
    const icon = 'consultoria';
    const text = (
        <article className="container__article">
            <p>Nós somos especialistas em sites, sistemas e aplicativo. Nesse ponto podemos conversar qual desses três itens se encaixam melhor com a sua situação e realidade, e faremos uma aplicação que atenda as suas necessidades.</p>
            <p>Faremos entrevistas com você para entender seus perfil, criaremos uma ambiente original para que você se sinta em casa, usando as melhores ferramentas disponíveis no mercado para cada caso.</p>
            <h3>Na nossa consultoria você pode contar com:</h3>
            <ul>
                <li>Originalidade</li>
                <li>Performance</li>
                <li>Atendimento preferencial</li>
                <li>Toda a qualidade que a Epic Solutions tem em todos seus projetos</li>
            </ul>
        </article>
    );
    return (
        <Article title={title} description={description} text={text} icon={icon} />
    )
}

export default App;

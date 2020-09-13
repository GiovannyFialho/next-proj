import Article from '../Article';

const App = () => {
    const title = "Performance";
    const description = "Descritivo de performance";
    const icon = 'performance';
    const text = (
        <article className="container__article">
            <p>Imagine que você quer comprar um carro, claro que você vai escolher um carro que te agrade os olhos, mas ele não pode ser só bonito, no momento que você precisar dele ele não pode te deixar na mão, assim também é com um site.</p>
            <p>O que quero dizer é que não somos mais um rostinho bonito no mercado, vamos te entregar além de um site bonito, um site que seja rápido, que esteja de acordo com os padrões mais elevados do mercado combinando dois fatores: beleza e rapidez.</p>
            <h3>Por que performance é importante?</h3>
            <p>Temos que pensar que todos os tipos de pessoas vão acessar nosso site, para isso precisamos ter um produto leve que não demore de carregar porque não sabemos o tipo de internet que a pessoa que vai acessar nosso site tem.</p>
            <p>Precisamos trabalhar com os métodos mais rápidos e leves de programação para fazer com que o site seja rápido e leve, mas não nos esquecemos nem por um momento da beleza dele, então vamos construir esse site da forma mais pura possível.</p>
            <p>E com todas essas forças reunidas temos o objetivo de agradar o Google, porque sabemos hoje que esse é o maior buscador do mundo, a maior vitrine que temos e onde o seu site vai aparecer.</p>
        </article>
    );
    return (
        <Article title={title} description={description} text={text} icon={icon} />
    )
}

export default App;

import Article from '../Article';

export default function App(){
    const title = "Criação de e-commerce";
    const description = "Descritivo de e-commerce";
    const icon = 'e-commerce';
    const text = (
        <article className="container__article">
            <p>
                Cada vez mais as lojas estão deixando de ser apenas físicas em um único endereço ou região para se tornar única em um endereço, na internet. E-commerce nada mais é do que transformar sua loja física numa loja virtual, com menos borocrácia e muito mais alcance.
            </p>
            <p>
                Hoje a opção do ecommerce é a forma mais barata e rápida de tirar o seu sonho de ter seu próprio negócio do papel, muitas pessoas estão aderindo à esse modelo de negócio mas com essa simplicidade vem a concorrência, além de você ter um bom produto você precisa de mais ferramentas para deixar a sua loja pronta para a competição.
            </p>
            <h3>Motivos para abrir um e-commerce:</h3>
            <div className="container__article__item">
                <h4>Prático</h4>
                <p>Abrir um e-commerce é muito mais fácil do que você pensa, nada comparado ao trabalho e burocracia de uma loja física. Você basicamente precisa de um endereço online e ajustar algumas coisas, como um site, métodos de pagamento e entrega. Ou falar com alguém que conheça do mercado e possa construir sua loja com toda a segurança e modernidade disponível no mercado hoje. Relaxar e aproveitar as vendas do seu novo negócio.</p>
            </div>
            <div className="container__article__item">
                <h4>Loja global</h4>
                <p>As limitações que uma loja física tem de ter alcance apenas em uma certa região onde está localizada são quebradas quando se está na internet, estamos literalmente acessíveis ao mundo todo. Na internet há espaço para todos trabalharem, embora a concorrência seja maior, mas temos ferramentas de sobra para trabalhar em nosso próprio marketing.</p>
            </div>
            <div className="container__article__item">
                <h4>Marketing</h4>
                <p>Como falamos anteriormente, como estamos acessíveis no mundo inteiro, temos uma concorrência muito maior, e ai que entra o marketing do nosso e-commerce, quando feito da maneira correta podemos alcançar muitas pessoas interessadas na marca e principalmente no produto. Para isso contamos com ferramentas do Google para nos dar as métricas e dados para trabalharmos em cima dos nossos clientes em potencial, agora uma coisa importante, da mesma forma que não somos obrigados a saber como montar um site, também não somos obrigados a saber como trabalhar com essas ferramentas. E agora entra os profissionais da área digital que podem fazer a sua marca bombar na internet e alcançar resultados muito bons! Aqueles que vocês espera para tirar suas merecedias férias.</p>
            </div>
            <div className="container__article__item">
                <h4>Métricas</h4>
                <p>O próximo ponto que vamos trabalhar e que foi citado no campo do marketing, são as métricas. Isso nada mais é do que informações sobre nossos clientes, seus perfis, se são homens ou mulheres, jovens ou mais velhos, enfim, temos acesso à muita coisa que nos permite direcionar o marketing correto para cada um deles.</p>
                <p>Uma outra coisa importante que as métricas podem nos ajudar é atigir uma região específica que podem ter clientes em potencial. Agora, se lembre bem disso, como estamos no mundo todo os usuários de internet buscam lugares cada vez mais únicos e parecidos com eles, então vamos precisar focar muito bem no nosso marketing para chegamos nesse cliente, então as métricas se tornam <b>muito importantes.</b></p>
            </div>
            <div className="container__article__item">
                <h4>Funcionamento 24 horas</h4>
                <p>Um problema que tínhamos com nossas lojas físicas era horário de expediente, com e-commerce estamos abertos 24 horas por dia e 7 dias por semana, em outras palavras, não paramos nunca! Isso quer dizer que você pode estar vendendo seu produto o dia todo, e isso é muito melhor, não? $$</p>
            </div>
            <div className="container__article__item">
                <h4>Comodidade</h4>
                <p>Todos esses beneficios e você nem precisou sair de casa hein. Esse é o melhor ponto, como já falamos anteriormente, nossa loja está na internet. Então precisamos nos preocupar em vender em um lugar só, e também não precisamos nos preocupar em trabalhar em um escritório também! Qualquer lugar que tenha acesso a internet, lá pode ser o seu escritório. Realmente, não há mais barreiras!</p>
            </div>
            <p>
                Se ainda não te convenci com todos esses argumentos, não tem problema, adorariamos tomar um café com você e tirar todas as suas dúvidas sobre e-commerce e como você pode mudar de vida. Então entre em contato com um de nossos <a href="https://api.whatsapp.com/send?phone=5511941540357" rel="noopener noreferrer" target="_blank" className="linkWhats">vendedores</a> :)  
            </p>
        </article>
    );
    return (
        <Article title={title} description={description} text={text} icon={icon} />
    )
}

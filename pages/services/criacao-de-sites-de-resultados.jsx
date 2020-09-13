import Article from '../Article';

const App = () => {
    const title = "Criação de sites";
    const description = "Descritivo de site";
    const icon = 'cms';
    const text = (
        <article className="container__article">
            <p>A cada segundo que passa a internet cresce e as pessoas que não tem sua presença marcada nela, serão deixadas para trás, pelo menos essa a previsão da maioria dos especialistas em negócios nos dias de hoje.</p>
            <p>Mesmo que você não tenha uma loja, e nem pense em fazer uma tão cedo, ainda não se pode descartar a possibilidade de se ter um site hoje em dia. Certas coisas acabaram se tornando obrigatórias nos dias de hoje, entre elas estão facebook, whatsapp, instagram e um site para o seu negócio. E por isso nós trouxemos para você uma opção simples, prática e barata para você entrar nesse mundo o quanto antes, e o melhor, com segurança e muito estilo!</p>
            <h3>Sites com conteúdo gerenciável</h3>
            <p>Da nossa parte oferecemos um layout lindo, boas práticas de desenvolvimento e certificadas com muita segurança e da sua parte só vamos precisar que você preenche seu site da forma que você quiser, colocando os textos, imagens, links, enfim, tudo o que você precisa fazer é acessar o painel do site e usar!</p>
            <p>E não se preocupe, se tiver alguma dúvida ou problema você pode entrar em contaot com alguém do nosso time de suporte, vamos fazer o que for possível para te ajudar da melhor maneira possível!</p>
            <p>Então não perca tempo e entre em contato com um de nossos <a href="https://api.whatsapp.com/send?phone=5511941540357" rel="noopener noreferrer" target="_blank" className="linkWhats">vendedores</a> para mais informações, vamos tirar todas suas dúvidas e tirar esse seu projeto do papel o quanto antes!!!</p>
        </article>
    );
    return (
        <Article title={title} description={description} text={text} icon={icon} />
    )
}

export default App;

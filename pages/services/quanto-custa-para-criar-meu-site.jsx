import Article from '../Article';

const App = () => {
    const title = "Quanto custa para criar meu site?";
    const description = "Informações sobre quanto custa para criar meu site profissional";
    const icon = 'cms';
    const text = (
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, eos ducimus! Facilis deleniti praesentium sapiente eligendi non qui. Ipsam non dolorum sit enim esse nihil? Quidem odio nesciunt quod officia!</p>
    );
    return (
        <Article title={title} description={description} text={text} icon={icon} />
    )
}

export default App;

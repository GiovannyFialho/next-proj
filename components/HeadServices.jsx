export default function HeadServices(props){
    const normalizeText = (argument) => {
        const from = "àáâãäåæçèéêëìíîïðñòóôõöøùúûüýþßàáâãäåæçèéêëìíîïðñòóôõöøùúûýýþÿŕŕ Ú";
        const to = "aaaaaaaceeeeiiiidnoooooouuuuybsaaaaaaaceeeeiiiidnoooooouuuyybyrr-u";
        let value = argument;

        for (let i = 0; i < from.length; i++) {
            let char_re = new RegExp(from.charAt(i), "gim");
            value = value
                .replace(char_re, to.charAt(i))
                .toLowerCase()
        };

        return value;
    };

    const nomeSecao = normalizeText(props.text);

    return (
        <div className="headServices">
            <div className="headServices__container container">
                <div className="headServices__container__icon">
                    <img src={`/img/iconsSections/${props.icon}.svg`} alt={nomeSecao} />
                </div>
                <div className="headServices__container__title">
                    <h2>{props.text}</h2>
                </div>
            </div>
        </div>
    )
}

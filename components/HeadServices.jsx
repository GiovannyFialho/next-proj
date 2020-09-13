import React, { Component } from 'react';

class HeadServices extends Component {
    render() {
        const normalize = (argument) => {
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

        const nomeSecao = normalize(this.props.text);

        return (
            <div className="headServices">
                <div className="headServices__container container">
                    <div className="headServices__container__icon">
                        <img src={`/img/iconsSections/${this.props.icon}.svg`} alt={nomeSecao} />
                    </div>
                    <div className="headServices__container__title">
                        <h2>{this.props.text}</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeadServices;

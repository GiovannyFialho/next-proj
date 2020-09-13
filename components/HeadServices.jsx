export default function HeadServices(props){
    return (
        <div className="headServices">
            <div className="headServices__container container">
                <div className="headServices__container__icon">
                    <img src={`/img/iconsSections/${props.icon}.svg`} alt={props.title} />
                </div>
                <div className="headServices__container__title">
                    <h2>{props.title}</h2>
                </div>
            </div>
        </div>
    )
}


interface Tab {
    img: string;
    text: string;
    title: string
}

export const TabComponent = ({ img, text, title }: Tab) => {
    return (
        <div className="flex-between hero__tab">
            <div className="hero__info">
                <h1 className="hero__title">
                    {title}
                </h1>
                <p className='hero__text'>{text}
                </p>
                <div className='hero__button-container flex'>
                    <div className='hero__button-blue'>More info</div>

                </div>
            </div>

            <img className='hero__img' src={img} alt="" />


        </div>
    )
}

export default TabComponent
import "./TypeLabel.css"

function TypeLabel({ type }: { type: string }) {
    const iconSource = `${type}_icon.png`

    return (
        <span>
            <span className={`type-label-icon ${type}-color`}>
                <img src={iconSource} width="20" height="20" alt="todo"></img>
            </span>
            <span className="type-label-text">{type.toUpperCase()}</span>
        </span>
    )
}

export default TypeLabel;

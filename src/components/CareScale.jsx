import sunIcon from "../assets/sun.svg"
import waterIcon from "../assets/water.svg"

const handleClickScale = (scale, type) => {
    let base = 'Cette plante requiert '
    const careLabel = { 1: 'few', 2: 'moderate', 3: 'high' }

    alert(base + careLabel[scale] + ' ' + type)
}

const CareScale = ({ careType, scaleValue }) => {
    const range = [1, 2, 3]

    const scaleType = careType === 'light' ? <img src={sunIcon} alt="Sun Icon" /> : <img src={waterIcon} alt="Water Icon" />

    return (
        <div onClick={() => handleClickScale(scaleValue, careType)}>
            {
                range.map(rangeElem => scaleValue >= rangeElem ? (
                    <span key={rangeElem.toString()}>
                        {scaleType}
                    </span>
                ) : null)
            }
        </div>
    )
}

export default CareScale
import lines from '../img/decor/lines.svg'
import mainTop from '../img/decor/main-top.svg'

function Decor() {
    return(
        <>
            <div className="decor decor__lines">
                <img src={lines} alt="decor" />
            </div>
            <div className="decor decor__lines_bottom">
                <img src={lines} alt="decor" />
            </div>
            <div className="decor decor_top">
                <img src={mainTop} alt="" />
            </div>
            <div className="decor decor_bottom">
                <img src={mainTop} alt="" />
		</div>
        </>
    )
}
export default Decor;
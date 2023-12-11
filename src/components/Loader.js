function Loader() {

    return(
        <div className="loader spin lock ">
            <div className="overlay"></div>
            <div className="spin__blocker"></div>
            <div className="spin__bottom-left"></div>
            <div className="spin__bottom-right"></div>
            <div className="spin__top-left"></div>
        </div>
    )
}
export default Loader;
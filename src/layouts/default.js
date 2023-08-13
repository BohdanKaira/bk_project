import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { Outlet } from "react-router-dom";
import Subscribe from "../components/Subscribe";
import Decor from "../components/Decor";

function Default() {

    return(
        <>
            <SiteHeader />
            <main className="page">
                <Outlet />
            </main>
            <Subscribe />
            <Decor />
            <SiteFooter />
        </>
    )
}
export default Default;
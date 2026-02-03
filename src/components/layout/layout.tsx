import { Outlet } from "react-router"
import Header from "../header/header"
import Footer from "../footer/footer"
import "./layout.scss"

function Layout() {
    return (
        <div className="layout">
            <Header />
            <main className="content">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout

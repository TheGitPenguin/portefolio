import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Layout from "./components/layout/layout";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />}/>
                    <Route path="/projects" element={<Projects />}/>
                    <Route path="/about" element={<div></div>}/>
                    <Route path="/contact" element={<div></div>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
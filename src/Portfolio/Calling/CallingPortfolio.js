import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "../Navigate/Navigate";
import Home from "../HomePage/HomePage";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Project from "../Projects/Projects";
function CallingPortFolio() {

    return (

        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Navigation />}  >

                    <Route index element={<Home />}  ></Route>
                    <Route path="About" element={<About />}  ></Route>
                    <Route path="Project" element={<Project />}  ></Route>
                    <Route path="Contact" element={<Contact />}  ></Route>

                </Route>

            </Routes>

        </BrowserRouter>


    )

}

export default CallingPortFolio;
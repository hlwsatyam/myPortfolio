import { Link, Outlet } from "react-router-dom";
import './navigate.css'
import { useEffect } from "react";
import { useState } from "react";
function Navigation() {
    const [time, settime] = useState("satyam");
    useEffect(
        () => {
            setInterval(() => {
                settime(new Date().toLocaleTimeString());
            }, 1000);
        }




    )
    return (
        <>
            <div className="container-fluid" >
                <div className="row" >
                    <div div className="col-sm-10 px-0    " >

                        <p id="upper-time"  > {time}
                        </p>
                        <Outlet />
                    </div>
                    <div div className="col-sm-2  right-nav text-center "  >
                        <p id="lower-time" className="text-white"  > {time}  </p>
                        <Link Link to="/" className="text-decoration-none text-white fw-bold " >Home</Link>
                        <Link to="About" className="text-decoration-none text-white fw-bold " >About</Link>
                        <Link to="Project" className="text-decoration-none text-white fw-bold " >Project</Link>
                        <Link to="Contact" className="text-decoration-none text-white fw-bold " >Contact</Link>
                    </div></div>
            </div>
        </>
    )
}
export default Navigation;
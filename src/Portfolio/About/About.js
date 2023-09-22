import React, { useEffect, useState } from 'react'
import './about.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function About() {

    const [percentage, setPercentage] = useState(0);
    const [isClicked, setIsClicked] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            if (percentage < 93) {
                setPercentage(percentage + 1);
            }
        }, 50);
    }, [percentage], [isClicked]);

    return (
        <>
            <div className="wrapper">

                <div className="model bg-white text-muted rounded m-5 p-5 ">

                    <h4 className='text-center m-4 ' >
                        Hey,i am Satyam a Full Stack Application And Mern Developer

                    </h4>

                    <div className='text-center' >
                        <button onClick={() => {
                            setIsClicked(!isClicked)
                            setPercentage(0)
                        }} className='rounded btn btn-outline-warning  text-muted' >More Detail</button>
                    </div>

                    {
                        isClicked ? <div style={{ display: "flex", gap: "20px" }} >
                            <div>
                                <h6 className='text-center m-3 ' >Mern Stack Development</h6>
                                <CircularProgressbar value={percentage} text={`${percentage}%`} />
                            </div>
                            <div >
                                <h6 className='text-center m-3 ' >Application Development</h6>
                                <CircularProgressbar value={percentage - 11} text={`${percentage - 11}%`} />
                            </div>
                        </div> : ""
                    }


                </div>


            </div>


        </>
    )

}

export default About;
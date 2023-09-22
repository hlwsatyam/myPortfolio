import robo from './img/robo.png'
import '../HomePage/Homepage.css'
import resume from "../Resume/Profile.pdf"
function Home() {
    return (
        <>
            <div className="home  vh-100  " >
                <div className="container-fluid text-center " >    <div div className="col-sm-12 p-5 " >
                    <img className='img-fluid' src={robo} />
                    <div>  <h1 className=' display-3'>  I am a Full Stack Engineer </h1> </div>
                    <div className='p-1 m-4' >  i Build A Mobile & Web Softwere..  </div>
                    <div className="btn   text-center"
                    >

                        <a class="btn btn-danger p-2" role="button" href={resume}
                            download="">
                            Download CV
                        </a>

                    </div>



                </div>
                </div>
            </div>
        </>
    )
}
export default Home;
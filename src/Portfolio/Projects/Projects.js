import comma from './ProjectEmage/comma.png'
import news from './ProjectEmage/news.png'
import todo from './ProjectEmage/todo.png'
import React from 'react'
import './project.css'
function Project() {
    return (
        <>
            <div className="container-fluid">
                <div className="row mb-5">
                    <div className="col-md-6">

                        <div class="card" >
                            <img class="card-img-top" src={comma} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Comma Separator</h5>
                                <p class="card-text">CONVERT COLUMN TO COMMA SEPARATED LIST</p>
                                <a target='blank' href="https://tools.edureify.com" class="btn btn-primary">Live</a>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6">

                        <div class="card" >
                            <img class="card-img-top" src={news} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">News Panel</h5>
                                <p class="card-text">Login Signup Functianality using Backend ! And Frontend Using React & Redux </p>
                                <a target='blank' href="https://news-panel.vercel.app/" class="btn btn-primary">Live</a>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6">

                        <div class="card" >
                            <img class="card-img-top" src={todo} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Todo App</h5>
                                <p class="card-text">A Todo App to Create Daily Task!</p>
                                <a target='blank' href="https://task-mu-taupe.vercel.app/" class="btn btn-primary">Live</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Project;
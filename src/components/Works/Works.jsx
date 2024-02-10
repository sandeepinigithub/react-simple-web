import React from 'react'
import './Works.scss'


import banner1 from "../../assets/images/web-images/banner1.png";
import banner2 from "../../assets/images/web-images/banner2.png";
import banner3 from "../../assets/images/web-images/banner3.png";
import banner4 from "../../assets/images/web-images/banner4.png";
import banner5 from "../../assets/images/web-images/banner5.png";
import banner6 from "../../assets/images/web-images/banner6.png";

import logo1 from "../../assets/images/web-images/logo1.png";
import logo2 from "../../assets/images/web-images/logo2.png";
import logo3 from "../../assets/images/web-images/logo3.png";
import logo4 from "../../assets/images/web-images/logo4.svg";
// import logo5 from "../../assets/images/web-images/logo5.svg";
import logo6 from "../../assets/images/web-images/logo6.svg";


export default function Works() {
    let  works = [
        {
          name:"Fund Raising",
          description:"Digital and Search marketing brand and crowd-funding campaigns",
          imgUrl:banner1
        },
        {
          name:"U.P. Museums",
          description:"Curated video tours for an immersive visitor experience at State Museums",
          imgUrl:banner2
        },
        {
          name:"Sankalp",
          description:"Skill acquisition and knowledge awareness for the promotion of community livelihood",
          imgUrl:banner3
        }
      ]
  return (
    <div>
        <div id="works" className="works__container">
    <div className="works__container__wrapper">
        <div className="container my-5 ">
            <div className="row m-auto justify-content-evenly">
                <h2 className="text-center mb-3">Our recent works</h2>
                <p className="text-center mb-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                    obcaecati alias fugit. Dicta consectetur expedita at.
                </p>

                {works.map((work,index)=>(
                    <div key={index} className="card col-10 col-sm-2 col-md-3 col-xl-3 py-3" style={{'width': '18rem'}}>
                    <img src={work.imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{work.name}</h5>
                        <p className="card-text">
                            {work.description}
                        </p>
                        <a href="#" className="btn btn-primary">Details</a>
                    </div>
                </div>

                ))}

                

            </div>
        </div>
    </div>
</div>
    </div>
  )
}

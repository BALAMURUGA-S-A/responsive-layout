import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faMinus, faRulerHorizontal, faWindowMinimize } from "@fortawesome/free-solid-svg-icons";
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'

export default function Page6(){
    return(
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-4">&nbsp;</div>
                <div className="col-lg-4 text-center">
                    <h2 className="text-primary">Our Protfolio</h2>
                    <FontAwesomeIcon icon={faMinus} fontSize="50px" className="text-primary "/>
                </div>
                <div className="col-lg-4">&nbsp;</div>
            </div>
            <div className="row">
                <div className="col-lg-1">&nbsp;</div>
                <div className="col-lg-10 justify-content-around">
                    <p>totem iEnum dolor sit amet conwattur .)dip seng Hit Donee mem,
                        at massa S4t amet ulln(sys. Consequal maws non 'Windom'  
                    </p>
                    </div>
                <div className="col-lg-1">&nbsp;</div>
            </div>
            <div className="row text-center">
                <div className="col-lg-3">
                        <FontAwesomeIcon icon={faCaretDown} className="ml-2 text-primary"/>
                        <h5 className="text-primary">All</h5>
                </div>
                <div className="col-lg-3 mt-4 text-center">
                        <h5 className="text-primary">Web Development</h5>
                </div>
                <div className="col-lg-3 mt-4 text-center">
                        <h5 className="text-primary">Game Development</h5>
                </div>
                <div className="col-lg-3 mt-4 text-center">
                        <h5 className="text-primary">App Development</h5>
                </div>
            </div>
            <div className="row">
                {/* <div className="col-lg-2">&nbsp;</div> */}
                <div className="col-lg-4 ">
                    <img className="w-100 img-fluid" src={img4}/>
                </div>
                <div className="col-lg-4 ">
                    <img className="w-100 img-fluid" src={img7} />
                </div>
                <div className="col-lg-4 ">
                    <img className="w-100 img-fluid" src={img6}/>
                </div>
            </div>
            <div className="row mb-5">
                {/* <div className="col-lg-2">&nbsp;</div> */}
                <div className="col-lg-4 ">
                    <img className="w-100 img-fluid" src={img5}/>
                </div>
                <div className="col-lg-4 ">
                    <img className="w-100 img-fluid" src={img8}/>
                </div>
                <div className="col-lg-4">
                    <img className="w-100 img-fluid" src={img9}/>
                </div>
            </div>
        </div>
        </>
    )
}
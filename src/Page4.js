import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer, faDesktop, faGear, faGears, faMinus, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWordpress } from "@fortawesome/free-brands-svg-icons";

export default function Page4(){
    return(
        <>
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-lg-5">&nbsp;</div>
                <div className="col-lg-2 text-center">
                <h2 className="text-primary">Our services</h2>
                <FontAwesomeIcon icon={faMinus} fontSize="50px" className="text-primary "/>
                </div>
                <div className="col-lg-5">&nbsp;</div>
            </div>
            <div className="row">
                <div className="col-lg-2">&nbsp;</div>
                <div className="col-lg-8 justify-content-around">
                    <p>totem iEnum dolor sit amet conwattur .)dip seng Hit Donee mem,
                            at massa S4t amet ulln(sys. Consequal maws non 'Windom curio,.
                            nos </p>
                </div>
                <div className="col-lg-2">&nbsp;</div>
            </div>
            <div className="row">
                <div className="col-lg-2">&nbsp;</div>
                <div className="col-lg-2 d-flex bg-secondary">
                    <FontAwesomeIcon icon={faDesktop} fontSize="40px"/>
                    <h6 className="ml-4 mt-2">Web Design</h6>
                </div>
                <div className="col-lg-1">&nbsp;</div>
                <div className="col-lg-2 d-flex bg-secondary">
                    <FontAwesomeIcon icon={faComputer} fontSize="40px"/>
                    <h6 className="ml-4 mt-2">Web Development</h6>
                </div>
                <div className="col-lg-1">&nbsp;</div>
                <div className="col-lg-2 d-flex bg-secondary">
                    <FontAwesomeIcon icon={faGear} fontSize="40px"/>
                    <h6 className="ml-4 mt-2">Web Development</h6>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-2">&nbsp;</div>
                <div className="col-lg-2 d-flex bg-secondary">
                    <FontAwesomeIcon icon={faGears} fontSize="40px"/>
                    <h6 className="ml-4 mt-2">Game Development</h6>
                </div>
                <div className="col-lg-1">&nbsp;</div>
                <div className="col-lg-2 d-flex bg-secondary">
                    <FontAwesomeIcon icon={faComputer} fontSize="40px"/>
                    <h6 className="ml-4 mt-2">App Development</h6>
                </div>
                <div className="col-lg-1">&nbsp;</div>
                <div className="col-lg-2 d-flex bg-secondary">
                    <FontAwesomeIcon icon={faDesktop} fontSize="40px"/>
                    <h6 className="ml-4 mt-2">Desktop Application</h6>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-2">&nbsp;</div>
                <div className="col-lg-2 d-flex bg-secondary">
                    <FontAwesomeIcon icon={faWordpress} fontSize="40px"/>
                    <h6 className="ml-4 mt-2">Wordpress Themes</h6>
                </div>
                <div className="col-lg-1">&nbsp;</div>
                <div className="col-lg-2 d-flex bg-secondary">
                    <FontAwesomeIcon icon={faGear} fontSize="40px"/>
                    <h6 className="ml-4 mt-2">Wordpress Pluging</h6>
                </div>
                <div className="col-lg-1">&nbsp;</div>
                <div className="col-lg-2 d-flex bg-secondary">
                    <FontAwesomeIcon icon={faPhone} fontSize="40px"/>
                    <h6 className="ml-4 mt-2">Support & IT</h6>
                </div>
            </div>
        </div>
        </>
    )
}
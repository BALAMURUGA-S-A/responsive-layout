import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faHeartCircleBolt, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

export default function Page5(){
    return(
        <>
        <div className="container-fluid mt-5 bg-primary">
                <div className="row">
                    <div className="col-lg-3 text-center">
                        <FontAwesomeIcon icon={faCalendar} fontSize="35px" className="mt-4 "/>
                        <h2 className="mt-2">12+</h2>
                        <h6 className="mt-2">Year of Experience</h6>
                    </div>
                    <div className="col-lg-3 text-center">
                        <FontAwesomeIcon icon={faCalendar} fontSize="35px" className="mt-4"/>
                        <h2 className="mt-2">999+</h2>
                        <h6 className="mt-2">Completed Project</h6>
                    </div>
                    <div className="col-lg-3 text-center">
                        <FontAwesomeIcon icon={faPeopleGroup} fontSize="35px" className="mt-4"/>
                        <h2 className="mt-2">480+</h2>
                        <h6 className="mt-2">Total Clients</h6>
                    </div>
                    <div className="col-lg-3 text-center">
                        <FontAwesomeIcon icon={faHeartCircleBolt} fontSize="35px" className="mt-4"/>
                        <h2 className="mt-2">15+</h2>
                        <h6 className="mt-2">Award Won</h6>
                    </div>
                </div>
        </div>
        </>
    )
}
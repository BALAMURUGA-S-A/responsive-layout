import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft, faEye } from "@fortawesome/free-solid-svg-icons";
import { faCircleDot } from "@fortawesome/free-regular-svg-icons";

export default function Page2(){
    return(
        <>
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-lg-4 text-center bg-primary text-white">
                    <FontAwesomeIcon icon={faClockRotateLeft} fontSize="50px" className="mt-3"/>
                    <h2 className="mt-3">Our Story</h2>
                    <p>totem iEnum dolor sit amet conwattur .)dip seng Hit Donee mem,
                            at massa S4t amet ulln(sys. Consequal maws non 'Windom curio,.
                            nos mama fauvism Mom in sodales chum Itgula in est NuIIam 
                            OrKeS tufGAS Ut NU° EIWPY lenl9uS. AlIcAsern el tone at quoin
                            LaOteel tOrichmentum aC nee leo.</p>
                </div>
                <div className="col-lg-4 text-center bg-dark text-white" >
                    <FontAwesomeIcon icon={faCircleDot} fontSize="50px" className="mt-3"/>
                    <h2 className="mt-3">Our Story</h2>
                    <p>totem iEnum dolor sit amet conwattur .)dip seng Hit Donee mem,
                            at massa S4t amet ulln(sys. Consequal maws non 'Windom curio,.
                            nos mama fauvism Mom in sodales chum Itgula in est NuIIam 
                            OrKeS tufGAS Ut NU° EIWPY lenl9uS. AlIcAsern el tone at quoin
                            LaOteel tOrichmentum aC nee leo.</p>
                </div>
                <div className="col-lg-4 text-center bg-primary text-white">
                    <FontAwesomeIcon icon={faEye} fontSize="50px" className="mt-3"/>
                    <h2 className="mt-3">Our Story</h2>
                    <p>totem iEnum dolor sit amet conwattur .)dip seng Hit Donee mem,
                            at massa S4t amet ulln(sys. Consequal maws non 'Windom curio,.
                            nos mama fauvism Mom in sodales chum Itgula in est NuIIam 
                            OrKeS tufGAS Ut NU° EIWPY lenl9uS. AlIcAsern el tone at quoin
                            LaOteel tOrichmentum aC nee leo.</p>
                </div>
            </div>
        </div>
        </>
    )
}
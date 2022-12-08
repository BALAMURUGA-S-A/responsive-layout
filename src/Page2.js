import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

export default function Page2(){
    
    return(
        <>
        <div className="container-fluid bg-white mt-5">
            <div className="row text-center">
                <div className="col-lg-4">&nbsp;</div>
                    <div className="col-lg-4">
                        <h2 className="text-primary">Welcome To Our Website </h2>
                        <FontAwesomeIcon icon={faMinus} fontSize="50px" className="text-primary"/>
                    </div>
                <div className="col-lg-4">&nbsp;</div>
            </div>
            <div className="row ">
                <div className="col-lg-2">&nbsp;</div>
                    <div className="col-lg-8 justify-content-around">
                        <p>totem iEnum dolor sit amet conwattur .)dip seng Hit Donee mem,
                            at massa S4t amet ulln(sys. Consequal maws non 'Windom curio,.
                            nos mama fauvism Mom in sodales chum Itgula in est NuIIam 
                            OrKeS tufGAS Ut NU° EIWPY lenl9uS. AlIcAsern el tone at quoin
                            LaOteel tOrichmentum aC nee leo. Lorem 'plum dolor Y. .met
                            consecrator adipriong ett Nullam moats laws tea; eget truly%)
                            enan feugt3t in. Maecenas nec evil nod leaus. nec tongue Mos.
                            Nutt.) amet b,bendum ut longtla srt amet est.
                        </p>
                    </div>
                 <div className="col-lg-2">&nbsp;</div>
            </div>
            <div className="row text-center">
                <div className="col-lg-5">&nbsp;</div>
                    <div className="col-lg-2">
                        <button type="button" className="text-primary bg-dark">Read More</button>
                    </div>
                <div className="col-lg-5">&nbsp;</div>
            </div>
        </div>
        </>
    )
}
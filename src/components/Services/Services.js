import React from 'react'
import { aboutMaintenance, aboutInstallation,aboutAuthomatics, authomaticsId,maintenanceId, installationId} from '../../constants/Descriptions';
import mainteinPhoto from "../../images/handyman.png";
import installationPhoto from "../../images/instalation.png";
import authomaticsPhoto from "../../images/heater1.png";
import Service from './Service';
import './Service.scss';


const Services = ()=>{
    return (
        <div className="container" style={{padding:"50px 0"}}>
            <div className="title">
				<h2>Nasze usługi</h2>
			</div>
           <Service
           servicePhoto={mainteinPhoto}
           serviceDescription={aboutMaintenance}
           reversed={false}
           serviceTitle="Konserwacje i przeglądy kotłów gazowych"
           id={maintenanceId}
           />
              <Service
           servicePhoto={installationPhoto}
           serviceDescription={aboutInstallation}
           reversed={true}
           serviceTitle="Montaż i instalacja urządzeń"
           id={installationId}
           />
                 <Service
           servicePhoto={authomaticsPhoto}
           serviceDescription={aboutAuthomatics}
           reversed={false}
           serviceTitle="Automatyka kotłowni"
           id={authomaticsId}
           />
            
        </div>
    )
}

export default Services;

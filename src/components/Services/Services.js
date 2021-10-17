import React from 'react'
import { aboutMaintenance, aboutInstallation,aboutAuthomatics, authomaticsId,maintenanceId, installationId} from '../../constants/Descriptions';
import mainteinPhoto from "../../images/maintenance.jpg";
import installationPhoto from "../../images/gas7.jpg";
import authomaticsPhoto from "../../images/uthomatics.jpg";
import Service from './Service';
import './Service.scss';


const Services = ()=>{
    return (
        <div className="container">
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

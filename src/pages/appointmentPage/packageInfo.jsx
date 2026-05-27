import gun from '../../assets/gun.png';
import basico from '../../assets/normal.webp'
import intermedio from '../../assets/plus.webp'
import premium from '../../assets/premium.webp';
import whatsapp from '../../assets/whatsapp.svg'
import { useParams } from 'react-router';
import { agendar } from '../../functions/agendarCita';

export const InfoPackage = ({ data, setState }) => {
  
    const { packages } = useParams();
    return (
        <section className="info_Package_Container">
            <div className="info box">
                <ul className="listDescription">
                    {data.description_Package.map((element) => {
                        return (
                            <li className="itemDescript"><img className='gunImageDes' src={gun} alt="" />{element}</li>
                        )
                    })}
                </ul>
            </div>
            <div className="imageTruck box">
                <div className="containerCalendar">
                    
                </div>

            </div>
            <div className="condition box">
                <p>El servicio solo esta disponible de sabado a domingo cualquier duda mandar mensaje a whatsapp dandole a la imagen de whatsapp <img className='whtapp' src={whatsapp} alt="" /></p>
                <button className='generate_appointment' onClick={() => agendar(packages)}>Agendar cita</button>
            </div>
        </section>
    )
}
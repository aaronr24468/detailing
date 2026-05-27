import normal from '../../assets/normal.webp'
import plus from '../../assets/plus.webp'
import premium from '../../assets/premium.webp'
import gun from '../../assets/gun.png';
import { useNavigate } from 'react-router';

export const Packages = ({ }) => {
const navigate = useNavigate();

    return (
        <>
            <div className="package">
                <img className='imgPackage' src={normal} alt="" />
                <div className="containerList">
                    <ul className='lista'>
                        <li className='description'><img className='iconD' src={gun} alt="" />Lavado exterior detallado (método de dos cubetas para evitar rayones).</li>
                        <li className='description'><img className='iconD' src={gun} alt="" />Descontaminado básico de rines y abrillantador de llantas.</li>
                        <li className='description'><img className='iconD' src={gun} alt="" />Aspirado profundo de interiores (asientos, alfombras y cajuela).</li>
                        <li className='description'><img className='iconD' src={gun} alt="" />Limpieza de tablero, consola central y paneles de puertas con protección UV ligera.</li>
                        <li className='description'><img className='iconD' src={gun} alt="" />Limpieza de cristales por dentro y por fuera.</li>
                        <li className='description'><img className='iconD' src={gun} alt="" />Aplicación de cera líquida rápida (spray wax) para un brillo inmediato.</li>
                    </ul>

                    <section className="price">
                        <div className="priceContainer">
                            <div className="total_Prices">
                                <p>Autos Chicos / Medianos</p>
                                <span>$550 MXN</span>
                            </div>
                            <div className="total_Prices">
                                <p>SUVs / Pickups Grandes</p>
                                <span>$650 MXN</span>
                            </div>
                        </div>
                        <div className="btn_Appointment">
                            <button className='btn_Appointment_Package' onClick={() => navigate(`/package/Básico`)}>Agregar paquete</button>
                        </div>
                    </section>

                </div>
            </div>
            <div className="package">
                <img className='imgPackage' src={plus} alt="" />
                <div className="containerList">
                    <ul className='lista'>
                        <li className='description'><img className='iconD' src={gun} alt="" />Incluye todo lo del Paquete Básico, más.</li>
                        <li className='description'><img className='iconD' src={gun} alt="" />Exterior: Descontaminado de pintura con barra de arcilla (Clay Bar) para eliminar impurezas ásperas al tacto.</li>
                        <li className='description'><img className='iconD' src={gun} alt="" />Aplicación de cera de carnauba en pasta de alta calidad a mano o pulidora orbital (protección por 3 meses).</li>
                        <li className='description'><img className='iconD' src={gun} alt="" />Lavado y extracción de vestiduras (tela o piel) para eliminar manchas y olores.</li>
                        <li className='description'><img className='iconD' src={gun} alt="" />Limpieza profunda y acondicionamiento de plásticos internos con acabado mate/original (no grasoso).</li>
                        <li className='description'><img className='iconD' src={gun} alt="" />Lavado detallado del motor (limpieza estética segura y tolvas).</li>
                    </ul>

                    <section className="price">
                        <div className="priceContainer">
                            <div className="total_Prices">
                                <p>Autos Chicos / Medianos</p>
                                <span>$1800 MXN</span>
                            </div>
                            <div className="total_Prices">
                                <p>SUVs / Pickups Grandes</p>
                                <span>$2200 MXN</span>
                            </div>
                        </div>
                        <div className="btn_Appointment">
                            <button className='btn_Appointment_Package' onClick={() => navigate(`/package/Intermedio`)}>Agregar paquete</button>
                        </div>
                    </section>
                </div>

            </div>
            <div className="package">
                <img className='imgPackage' src={premium} alt="" />
                <div className="containerList">
                    <ul className='lista'>
                        <li className='description'><img className='iconD' src={gun} alt="" />Incluye todo lo del Paquete Intermedio, más.</li>
                        <li className='description'><img className='iconD' src={gun} alt="" />Corrección de pintura de 1 o 2 pasos: Pulido profesional para eliminar del 70% al 85% de micro-rayones superficiales y realzar el brillo al máximo.</li>
                        <li className='description'><img className='iconD' src={gun} alt="" />Limpieza detallada de emblemas, parrillas y juntas con brochas de detallado.</li>
                        <li className='description'><img className='iconD' src={gun} alt="" />Aplicación de un sellador sintético de grado profesional (protección de 6 a 12 meses) o preparación para cerámico.</li>
                        <li className='description'><img className='iconD' src={gun} alt="" />Detallado de pasos de rueda y plásticos exteriores opacos (restauración de color).</li>
                    </ul>

                    <section className="price">
                        <div className="priceContainer">
                            <div className="total_Prices">
                                <p>Autos Chicos / Medianos</p>
                                <span>$4000 MXN</span>
                            </div>
                            <div className="total_Prices">
                                <p>SUVs / Pickups Grandes</p>
                                <span>$5000 MXN</span>
                            </div>
                        </div>
                        <div className="btn_Appointment">
                            <button className='btn_Appointment_Package' onClick={() => navigate(`/package/Premium`)}>Agregar paquete</button>
                        </div>
                        
                    </section>
                </div>
            </div>
        </>
    )
}
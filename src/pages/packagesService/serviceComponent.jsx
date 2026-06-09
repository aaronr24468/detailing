import { ActionButtons } from '../../components/actionButtons';
import { HeaderComponent } from '../../components/headerComponent';
import '../../style/packagesServicesStyle/services.css';
import { Packages } from './packages';
import down from '../../assets/arrow_down.svg'
import up from '../../assets/arrow_up.svg'
import faros from '../../assets/faros.webp'
import ceramic from '../../assets/ceramic.webp'
import extractor from '../../assets/extractor.jpg'
import polish from '../../assets/polish.jpg'

export const ServicePackagesComponent = ({}) =>{

    return(
        <div className="mainContainerServices">
            <HeaderComponent />

            <main className='mainServices'>
                <ActionButtons />
                
                <section className="packages" id='packages'>
                    <Packages />

                    <a href="" className='extra_Selector' onClick={(event) => {event.preventDefault(), document.getElementById("extra_services").scrollIntoView({behavior: 'smooth'})}}>
                        Extras
                        <img className='down_arrow' src={down}/>
                    </a>
                    
                </section>

                <section className='extra_services' id='extra_services'>
                    
                    <a href="" className='packages_Selector' onClick={(event) => {event.preventDefault(), document.getElementById("packages").scrollIntoView({behavior: 'smooth'})}}>
                        Paquetes
                        <img className='up_arrow' src={up}/>
                    </a>

                    <div className="extras_Container">
                        <div className="extra_item">
                            <img className='extra_image' src={faros} alt="" />
                            <span className='des_extra'>Restauracion de faros con polimero: $400</span>
                        </div>
                        <div className="extra_item">
                            <img className='extra_image' src={ceramic} alt="" />
                            <span className='des_extra'>Cerámico: $2,000 - $2,500</span>
                        </div>
                        <div className="extra_item">
                            <img className='extra_image' src={extractor} alt="" />
                            <span className='des_extra'>Extractor limpieza de tapicería: $1,500</span>
                        </div>
                        <div className="extra_item">
                            <img className='extra_image' src={polish} alt="" />
                            <span className='des_extra'>Pulir pintura: $1,000</span>
                        </div>
                    </div>

                </section>
                
            </main>
        </div>
    )
}
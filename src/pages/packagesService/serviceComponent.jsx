import { ActionButtons } from '../../components/actionButtons';
import { HeaderComponent } from '../../components/headerComponent';
import '../../style/packagesServicesStyle/services.css';
import { Packages } from './packages';

export const ServicePackagesComponent = ({}) =>{

    return(
        <div className="mainContainerServices">
            <HeaderComponent />

            <main className='mainServices'>
                <ActionButtons />
                
                <section className="packages">
                    <Packages />
                </section>

                <section className='extra_services'>

                </section>
                
            </main>
        </div>
    )
}
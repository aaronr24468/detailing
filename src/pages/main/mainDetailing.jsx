import '../../style/mainCss/mainDetailing.css';
import mainVideo from '../../assets/video.mp4';
import logo from '../../assets/noback.webp';


import { HeaderComponent } from '../../components/headerComponent';
import { ActionButtons } from '../../components/actionButtons';
import { Packages } from './packages';

export const MainDetailing = ({ }) => {

    return (
        <>
            <div className="mainContainerDetailing">

                <HeaderComponent />

                <main className='mainContainer'>

                    <ActionButtons />

                    <section className='VideoInfo' id='Inicio'>

                        <video className='videoPlay' src={mainVideo} autoPlay loop ></video>

                        <div className="aboutDetailing">
                            <img className='imgLogo' src={logo} alt="" />
                        </div>

                    </section>

                    <section className='packages' id='Paquetes'>

                        <Packages />

                    </section>
                </main>
            </div>
        </>
    )
}
import '../style/componentesStyles/headerComponent.css';
import house from '../assets/house.svg'
import box from '../assets/box.svg'
import spray from '../assets/spray.svg'
import extra from '../assets/extra.svg'
import { useHeaderHook } from '../hooks/useHeader';

export const HeaderComponent = ({ }) => {
    const hook = useHeaderHook();

    return (
        <>
            <header className='headerInfo' id='headerInfo' show="false">
                <div className="inicio infoBox">
                    <ul className='listaHeader'>
                        <li className='item_Header_List' destination="Inicio" onClick={hook.detectMainPage}><a href="#Inicio"><img src={house} alt="" />Inicio</a></li>
                        <li className='item_Header_List' destination="Paquetes" onClick={hook.detectMainPage}><a href="#Paquetes"><img src={box} alt="" />Paquetes</a></li>
                    </ul>
                </div>
                <div className="productos_paquetes infoBox">
                    <ul className='listaHeader'>
                        <li className='item_Header_List' destination="Inicio" ><a href="#Inicio"><img src={spray} alt="" />Productos</a></li>
                        <li className='item_Header_List' destination="Paquetes"><a href="#Paquetes"><img src={extra} alt="" />Servicios extra</a></li>
                    </ul>
                </div>
            </header>
        </>
    )
}
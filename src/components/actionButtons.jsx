import '../style/componentesStyles/actionButtons.css';
import { showOptionsBtn } from '../../src/functions/attributesForStyles';
import { btnWhatsApp } from '../../src/functions/whatsApp';
import options from '../assets/options.svg';
import whatsapp from '../assets/whatsapp.svg';

export const ActionButtons = ({ }) => {

    return (
        <>
            <button className='optionsBtn' id='optionsBtn' onClick={showOptionsBtn}><img className='imgOptions' src={options} alt="" /></button>
            <button className='whatsappBtn' onClick={btnWhatsApp}><img className='whatsappImage' src={whatsapp} alt="" /></button>
        </>
    )
}
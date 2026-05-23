export const btnWhatsApp = () =>{
    const numeroTelefono = '523171083192';
    
    const msj = "Hola, me podrías dar más información";

    const urlWhatsapp = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(msj)}`;

    window.open(urlWhatsapp, '_blank')
}
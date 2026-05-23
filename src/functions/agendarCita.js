export const agendar = (paquete) =>{
    const numeroTelefono = '523171083192';
    
    const msj = `Hola, quiero agendar para el paquete ${paquete}.`;

    const urlWhatsapp = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(msj)}`;

    window.open(urlWhatsapp, '_blank')
}
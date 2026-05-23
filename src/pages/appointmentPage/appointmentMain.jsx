import { ActionButtons } from '../../components/actionButtons';
import { HeaderComponent } from '../../components/headerComponent';
import { useAppointment } from '../../hooks/appointmentHooks/useAppointment';
import '../../style/appointmentStyle/appointmentMain.css';
import { CalendarComponent } from './calendar';
import { InfoPackage } from './packageInfo';

export const AppointmentComponent = ({}) =>{
    const hook = useAppointment();

    return(
        <>
            <div className="main_Container_Appointment">
                <HeaderComponent />

                <main className='appointment_main'>
                    <ActionButtons />
                    
                    <section className='showContent'>
                        {hook.state === 'Info' && <InfoPackage data={hook.data} setState={hook.setState}/>}
                       {/* {hook.state === 'Agenda' && <CalendarComponent />} */}
                        {/* react datepciker para calendario */}
                    </section>
                </main>
            </div>
        </>
    )
}
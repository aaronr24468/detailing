import { ActionButtons } from '../../components/actionButtons';
import { HeaderComponent } from '../../components/headerComponent';
import { useGetListProducts } from '../../hooks/listProducts/useListProducts';
import '../../style/productsStyle/showProductsStyle.css';
import Koch_Chemie from '../../assets/Koch_Chemie.webp'

export const ProductsList = ({}) =>{
    const hook = useGetListProducts();

    console.log(hook.list)

    return(
        <div className="mainContainerProducts">

            <HeaderComponent />

            <main className='main_Products_List'>
                <ActionButtons />

                <section className='container_Products_List'>
                    <div className="imageProducts"></div>
                    <ul className='container_List'>
                        {hook.list.map((element, index) =>{
                            return(
                                <li key={index} className='product_Box'>
                                    <img className='item_Photo_List' src={element.url} alt="" />
                                    <div className="name_Product">
                                        <span className='name_text'>{element.name}</span>
                                        <p className='description_Product'>{element.description}</p>
                                    </div>
                                    
                                </li>
                            )
                            
                        })}
                    </ul>
                </section>
            </main>
        </div>
    )
}
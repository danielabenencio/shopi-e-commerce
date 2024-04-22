import { useContext } from "react"
import { ShoppingCartContext } from "../../Context/index"
import { XMarkIcon } from "@heroicons/react/24/solid"
import "./styles.css"

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext);

    return(
        <aside 
        className={`${context.isProductDetailOpen ? "flex" : "hidden"} product-detail flex-col fixed overflow-y-scroll right-0 border border-black rounded-lg bg-white` }>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <div>
                    <XMarkIcon 
                    className="h-6 w-6 text-black cursor-pointer"
                    onClick={() => context.closeProductDetail()}></XMarkIcon>
                </div>
            </div>
            <figure className="px-6 w-50 h-min ">
                <img
                className="h-min object-scale-down rounded-lg p-12"
                src={context.productToShow.images}
                alt={context.productToShow.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
                <span className='font-medium text-md'>{context.productToShow.title}</span>
                <span className='font-light text-sm'>{context.productToShow.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail
import { ChevronRightIcon } from "@heroicons/react/24/solid"


const OrdersCard = props => {
    const { totalPrice, totalProducts,  } = props

    return(
        <div className="flex justify-between items-center border border-black p-4 w-80 rounded-lg mb-4">
            <div className="flex justify-between w-full"> 
                <p className="flex flex-col">
                    <span className="font-light">04.04.2024</span>
                    <span className="font-light">{ totalProducts } articles</span>
                </p>
                <p className="flex items-center gap-2">
                    <span className="font-medium text-2xl">${ totalPrice }</span>
                    <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer"></ChevronRightIcon>
                </p>
            </div>
        </div>
    )
}

export default OrdersCard
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import ShoppingCart from "../ShoppingCart"
import { ShoppingCartContext } from "../../Context"


const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = "underline underline-offset-4"

    //Sign out
    const signOut = localStorage.getItem("sign-out")
    const parsedSignOut = JSON.parse(signOut)
    const isUserSignOut = context.signOut || parsedSignOut

    //Account
    const account = localStorage.getItem("account")
    const parsedAccount = JSON.parse(account)
    //Has an account
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
    const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState


    const handleSignOut = () => {
        const stringifiedSignOut = JSON.stringify(true)
        localStorage.setItem("sign-out", stringifiedSignOut)
        context.setSignOut(true)
    }

    const renderView = () => {
        if (hasUserAnAccount && !isUserSignOut) {
            return (
                <>
                <li className="text-black/60">
                    {parsedAccount?.email}
                </li>
                <li>
                    <NavLink 
                    to='/my-orders'
                    className={({isActive}) =>
                        isActive ? activeStyle : undefined
                    }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/my-account'
                    className={({isActive}) =>
                        isActive ? activeStyle : undefined
                    }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/sign-in'
                    className={({isActive}) =>
                        isActive ? activeStyle : undefined
                    }
                    onClick={() => handleSignOut()}>
                        Sign Out
                    </NavLink>
                </li>
                </>
            )
        }else {
            return (
                <li>
                    <NavLink 
                    to='/sign-in'
                    className={({isActive}) =>
                        isActive ? activeStyle : undefined
                    }
                    onClick={() => handleSignOut()}>
                        Sign In
                    </NavLink>
                </li>
                
            )
        }
    }

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink 
                    to={`${isUserSignOut ? "sign-in" : "/"}`}>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/'
                    onClick={() => context.setSearchByCategory()}
                    className={({isActive}) =>
                        isActive ? activeStyle : undefined
                    }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/clothes'
                    onClick={() => context.setSearchByCategory('Clothes')}
                    className={({isActive}) =>
                        isActive ? activeStyle : undefined
                    }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/electronics'
                    onClick={() => context.setSearchByCategory('Electronics')}
                    className={({isActive}) =>
                        isActive ? activeStyle : undefined
                    }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/furniture'
                    onClick={() => context.setSearchByCategory('Furniture')}
                    className={({isActive}) =>
                        isActive ? activeStyle : undefined
                    }>
                        Furniture
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/toys'
                    onClick={() => context.setSearchByCategory('Toys')}
                    className={({isActive}) =>
                        isActive ? activeStyle : undefined
                    }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/others'
                    onClick={() => context.setSearchByCategory('Others')}
                    className={({isActive}) =>
                        isActive ? activeStyle : undefined
                    }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                {renderView()}
                <li className="flex items-center">
                    <ShoppingCart />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
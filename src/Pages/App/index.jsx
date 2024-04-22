import { useContext } from 'react'
import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom'
import { ShoppingCartProvider, initializeLocalStorage, ShoppingCartContext } from '../../Context'
import Home from "../Home"
import MyAccount from "../MyAccount"
import MyOrder from "../MyOrder"
import MyOrders from "../MyOrders"
import NotFound from "../NotFound"
import SignIn from "../SignIn"
import Navbar from "../../Components/Navbar"
import CheckOutSideMenu from '../../Components/CheckOutSideMenu'
import'./App.css'

const AppRoutes= () => {
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

  let routes = useRoutes([
    { path: '/', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'}/>},
    { path: '/clothes', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'}/>},
    { path: '/electronics', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'}/>},
    { path: '/furniture', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'}/>},
    { path: '/toys', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'}/>},
    { path: '/others', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'}/>},
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/*', element: <NotFound /> },
    { path: '/sign-in', element: <SignIn /> },
  ])

  return routes
}

const App = () => {
  initializeLocalStorage()
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes/>
        <Navbar />
        <CheckOutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

  export default App



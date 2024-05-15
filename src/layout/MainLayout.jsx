import { Outlet } from "react-router-dom"
import Navbar from "../components/home/navbar/Navbar"
import Footer from "../components/home/navbar/Footer"


function MainLayout() {
  return (
    <div className="font-roboto h-screen flex flex-col justify-between">
        <header>
          <Navbar></Navbar>
        </header>
        <main className="h">
            <Outlet></Outlet>
        </main>
        <footer>
            <Footer></Footer>
        </footer>
    </div>
  )
}

export default MainLayout

import { Outlet } from "react-router-dom"
import Navbar from "../components/home/navbar/Navbar"
import Footer from "../components/home/navbar/Footer"


function MainLayout() {
  return (
    <div className="font-roboto">
        <header>
          <Navbar></Navbar>
        </header>
        <main>
            <Outlet></Outlet>
        </main>
        <footer>
            <Footer></Footer>
        </footer>
    </div>
  )
}

export default MainLayout

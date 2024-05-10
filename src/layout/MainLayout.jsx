import { Outlet } from "react-router-dom"
import Navbar from "../components/home/navbar/Navbar"


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
            <p className="w-11/12 mx-auto max-w-6xl">footer</p>
        </footer>
    </div>
  )
}

export default MainLayout

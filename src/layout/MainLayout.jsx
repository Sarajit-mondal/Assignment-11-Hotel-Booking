import { Outlet } from "react-router-dom"


function MainLayout() {
  return (
    <div className="font-roboto">
        <header>
          <p>This is navbar</p>
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

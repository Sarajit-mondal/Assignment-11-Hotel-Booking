import { Link } from "react-router-dom"
import Navbar from "../home/navbar/Navbar"


function ErrorPage() {
  return (
    <div>
   <Navbar></Navbar>
    <div className="relative mt-10">
      <img src="https://i.postimg.cc/kM1k7stj/242457-P3-N4-GP-961.jpg" alt="" className="w-2/4  h-[400px] rounded-2xl mx-auto"/>
      <Link to="/" className=" py-2 px-4 rounded-lg cursor-pointer active:scale-95 font-bold w-1/4 absolute bottom-2 bg-sky-400 left-2/4 -translate-x-2/4 text-center">Go to Home</Link>
    </div>
    </div>
  )
}

export default ErrorPage

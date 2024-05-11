import { useContext } from "react"
import { userContext } from "../providers/AuthProvider"


function useAuth() {
const auth = useContext(userContext)

return auth;
}

export default useAuth

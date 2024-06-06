import Login from "./Components/Login"
import Profile from "./Components/Profile"
import UserContextProvider from "./context/UserContextProvide"


function App() {
  

  return (
    <UserContextProvider>

    <h1>React with context API</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
    
  )
}

export default App

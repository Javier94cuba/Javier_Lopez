import Footer from "./components/containers/Footer"
import Header from "./components/containers/Header"
import Home from "./components/containers/Home"
import About_me from "./components/containers/About_me"
import Contacts from "./components/containers/Contacts"
import List_Projects from "./components/containers/List_Projects"
import Salary from "./components/atoms/Salary"

function App() {
 
  return (
    <>
    <Header/>
    <Home/>
    <About_me/>
    <List_Projects/>
    <Salary/>
    <Contacts/>
    <Footer/>
    </>
  )
}

export default App

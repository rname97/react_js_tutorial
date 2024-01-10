
import AboutComponent from "../components/HomeComponent/AboutComponent"
import FooterComponent from "../components/HomeComponent/FooterComponent"
import JumbotronPage from "../components/HomeComponent/JumbotronPage"
import NavbarComponent from "../components/HomeComponent/NavbarComponent"
import ServiceComponent from "../components/HomeComponent/ServiceComponent"



const HomePage = () => {
  return (
    <div>
        <NavbarComponent />
        <JumbotronPage />
        <ServiceComponent />
        <AboutComponent />
        <FooterComponent />
       
        
    </div>
  )
}

export default HomePage

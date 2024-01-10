
import AboutComponent from "../components/HomeComponent/AboutComponent"
import CategoryComponent from "../components/HomeComponent/CategoryComponent"
import FooterComponent from "../components/HomeComponent/FooterComponent"
import JumbotronPage from "../components/HomeComponent/JumbotronPage"
import NavbarComponent from "../components/HomeComponent/NavbarComponent"
import ServiceComponent from "../components/HomeComponent/ServiceComponent"



const HomePage = () => {
  return (
    <div>
        <NavbarComponent />
        <JumbotronPage />
        <AboutComponent />
        <CategoryComponent />
        <ServiceComponent />
        <FooterComponent />
       
        
    </div>
  )
}

export default HomePage

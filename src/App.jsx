

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Header from './components/header'
import Features from './components/features'
import About from './components/about'
import aboutimage1 from"./images/Frame 19.png";
import aboutimage2 from"./images/download.png";
import Presentaion from './components/pesentation';
import Contact from './components/contact';
import Footer from './components/footer';



function App() {


  

  return (
  <div>
<Header/>
<Features/>
<About image={aboutimage1} title="Comes with all you need for Daily life" button="Get The App"/>
<Presentaion/>
<About image={aboutimage2} title="Download and get the App Now" button="Download"/>
<Contact/>
<Footer/>

   </div>


  )
}

export default App

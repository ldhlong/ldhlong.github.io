import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './HomePage';
import BioPage from './BioPage';
import ContactPage from './ContactPage';
import ProjectPage from './ProjectPage';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


library.add(faTwitter, faLinkedinIn, faInstagram, faEnvelope)



function App() {
  return (
  <>
  <NavBar homeTitle={'Home'} bioTitle={'Bio'}  projectTitle={'Projects'} contactTitle={'Contact'}/>
    <Routes>
      <Route exact path='/ldhlong.github.io/portfolio1/' component={HomePage}/>
      <Route path='/bio' component={BioPage}/>
      <Route path='/projects' component={ProjectPage}/>
      <Route path='/contact' component={ContactPage}/>
    </Routes>
  </>
  );
}

export default App;

import Card from './components/Card';
import Greeting from './components/Greeting';
import Navbar from './components/Navbar';
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Row, Card } from "react-bootstrap";
import trialcard from './components/trialcard';
import {Link} from "react-router-dom"
import './Home.css'



function Home(props) {


  return (
    <div className="Home">
      <Navbar />
      <Greeting/>
      <div className='e-card-horizontal'>
        <Card
          storyname={props.name} 
          description={props.description}
        />
        <Card
          storyname={props.name} 
          description={props.description}
        />
        <Card
          storyname={props.name} 
          description={props.description}
        />
        <Card
          storyname={props.name} 
          description={props.description}
        />
        
      </div> 
      <Link className="stor-but" to="/tys" >Try Yourself</Link>
    
    </div>
  );
}

export default Home;

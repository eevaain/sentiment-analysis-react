import React, {useState} from 'react';
import './App.css';
import { Input } from 'semantic-ui-react';
import axios from 'axios';
//image imports
import logo from './images/LogoEvanPng.png';
import youtube from './images/youtube.png';
import linkedin from './images/linkedin.png';
import github from './images/github.png';
import background from './images/background.png';
import speechbubble from './images/speechbubble.png';

function App() {
  const [value, setValue] = useState("");

  const handleClick = () => {
    if(value!== ""){
      axios.post("https://sentiment-backend.herokuapp.com/", {"sentence": value})
      .then((response) => {
        console.log(response);
        document.getElementsByClassName("sentiment-text")[0].innerText = response["data"]["sentiment"];
      })
      .catch((err) => {
        console.log(err);
        document.getElementsByClassName("sentiment-text")[0].innerText = "Error"
      });
    }
  }

  const handleValueChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div style={{height:"100vh", width:"100vw", alignItems:"center", justifyContent:"center", textAlign:"center", backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', display:"table-cell", verticalAlign: "middle", horizontalAlign:"middle"}}>
        <Input transparent onChange={handleValueChange} action={{color: 'teal', onClick: () => handleClick(), content: "Calculate Sentiment! 😤"}} placeholder='Type in some text...' style={{border:"2px solid #fff", padding:"10px", borderRadius: "5px"}} />
        <p className="sentiment-text" id = "result">No Sentiment 😐</p>
        <p id = "title">Sentiment Analysis Web App 😂👌</p>
        <img src = {logo} id = "logo"></img>
        <a href = "https://www.youtube.com/channel/UCn9Ir-KFtIWSntk6RzGE1-A"><img src = {youtube} id = "youtube"></img></a>
        <a href = "https://www.linkedin.com/in/evan-lin-0b764b1a3/"><img src = {linkedin} id = "linkedin"></img></a>
        <a href = "https://github.com/eevaain"><img src = {github} id = "github"></img></a>
        <img src = {speechbubble} id = "speechbubble"></img>
        
    </div>
  );
}

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);


export default App;

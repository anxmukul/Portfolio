import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2 className = "Name-header">Mukul Kumar</h2>
        <p>Computer Science Student at KIIT University</p>
      </header>
      <ul>
        <li><a href="default.asp">Home</a></li>
        <li><a href="contact.asp">Contact</a></li>
        <li><a href="about.asp">About</a></li>
      </ul>
      <div className = "Nav-bar">
      </div>
      <div className = "Personal-detail">
          <h3>Something About Me...</h3>
          <p>Currently Persuing my B.Tech degree in Computer Science and Engineer from Kalinga Institute of Industrial Technology.
            <br></br>From the beginning I love to solve problem, through a technical medium. I always
            wondered how a website work, from where I got responces when i click on some button of web page. And from there I decided to 
            know aur learn computer science.</p>
            <p>I use to write blogs on the thing which i learn, you can check them through the links provided below.</p>
      </div>
      <div className = "Achievement-box">
              <h3>Achievements..</h3>
              <p>I didn't have some good achievements to show on this portfolio, but It seems after some days I stated uploading my new achievements.
                For now I got 9.8 cgpa in my 10th CBSE board exam and 65% in 12th state board exam. I got AIR 1019 in KITTE. Hope to achieve my dreams and knowledge further.
                Currently I created a web API for todo list using Express framework.
              </p>
      </div>
      <div className = "Knowledge">
        <h3>What I Know till know in CSE...</h3>
        <h5>Languages:</h5>
        <p>C, C++, JavaScript<br></br></p>
        <h5>Tools and Technology</h5>
        <p>HTML, CSS, node.js, mysql</p>
      </div>
      <div className = "Buttom-part">
        <div className = "Connect-part">
          <h4>Connect with me...</h4>
          <h4><a href = "https://www.linkedin.com/in/mukul-kumar-221423192">linkedin</a></h4>
          <h4><a href = "https://www.facebook.com/profile.php?id=100013524360270">facebook</a></h4>
          <h4><a href = "https://www.medium.com/@kmukul1197">medium</a></h4>
        </div>
        <div className = "Connect-part">
          <h4>Contact@..</h4>
          <h4>Email:<br></br>kmukul1197@gmail.com</h4>
          <h4>Mob:<br></br>9523138406</h4>
        </div>
      </div>
    </div>
  );
}
export default App;

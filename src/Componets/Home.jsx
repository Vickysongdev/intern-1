import React from 'react'
import logo from '../Componets/Asset/vic.jpg';
import share from '../Componets/Asset/_Avatar share button (1).png';
import git from '../Componets/Asset/github-edit.jpg';
import slack from '../Componets/Asset/5cb480cd5f1b6d3fbadece79.png';
import zuri from '../Componets/Asset/zuri.png';
import intern from '../Componets/Asset/intern.png';
import For from '../Componets/Asset/I4G.png';
import avata from '../Componets/Asset/_Avatar share button.png';
import '../Componets/Asset/App.css';


function Home() {
  return (
    <div className="App">
         <img src={avata} alt="" className="avata"  />
         <div className="share"> <img src={share} alt="" /></div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h3   className="name">VickyTech</h3>
      </header>
      <div className="App-links">
        <a href="https://twitter.com/IbredeV"><h3>Twitter Link</h3></a>
      </div>
      <div className="App-links">
        <a href="https://training.zuri.team/"><h3>Zuri Team</h3></a>
      </div>
      <div className="App-links">
        <a href="http://books.zuri.team/"><h3>Zuri Books</h3></a>
      </div>
      <div className="App-links">
        <a href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>"><h3>Python Books</h3></a>
      </div>
      <div className="App-links">
        <a href="https://background.zuri.team/"><h3>Background Check for Coders</h3></a>
      </div>
      <div className="App-links">
        <a href="https://books.zuri.team/design-rules"><h3>Design Books</h3></a>
      </div>

      <div className="Down-App">
     <a href="https://slack.com/"> <img src={slack} className="logogit" alt="logo" /></a>
     <a href="https://desktop.github.com/"><img src={git} className="logogit" alt="logo" /></a>
      </div>
      <hr />

      <div className="footer">
        <img src={zuri} className="zuri " alt="logo" />
        <img src={intern} className="zuri intern" alt="logo" />
        <div  className="span "><p>HNG Internship 9 Frontend Task</p></div>
        <img src={For} className="for " alt="logo" />
      </div>
    </div>
  )
}

export default Home
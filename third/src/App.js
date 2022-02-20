import React from "react"

import "./App.css"
import pics1 from "./pics/logo.png"
import pics2 from  "./pics/hro.png"
import pics3 from  "./pics/learning-path.png"
import pics4 from  "./pics/apsa.png"
import pics5 from  "./pics/Capture.PNG"
import pics6 from  "./pics/byjus.jpeg"
import pics7 from  "./pics/for-parents.png"
import pics8 from  "./pics/for-teachers.png"
import pics9 from  "./pics/graphic-mobile.png"




const App =()=> {
  return (
    <div className="App">
      <div className='hero'>
        <div className="header">
        <header>
          <div className="headerwrap">
            <div className='logo'>
              <img src ={pics1} />
            </div>
            <div className='midnavs'>
              <span><nav> PLAY</nav></span>
              <span><nav>PARENTS</nav></span>
              <span><nav>EDUCATORS</nav></span>
              <span><nav>WHY CODE?</nav></span>
            </div>
            <div className='join'>
            <span><nav><button>JOIN FOR FREE</button></nav></span>
            <span><nav>LOG IN</nav></span>

            </div>
          </div>
        </header>
        </div>
        <div className="herodiv">
        <div className="heroleft">
        <div className="leftwrap">
          
            <div className='bighead'>
              Coding Made Easy
            </div>
            <div className='text'>
              The fun way to learn programming and development<br/> problem-solving & critical skills Ages 5-18
            </div>
            <div className="orange">
              <button>GET STARTED FOR FREE</button>
            </div>
            <div className="home">
              At home plans from $19per month
            </div>
            </div>
        </div>
        <div className="heroright">
          <img className="heor" src={pics2}/>
        </div>
      </div>
      </div>
     <div className="platfrom">
       <div className="leftplatform">
         <div className="leftplatformhead">
           The #1 coding platfrom for kids
         </div>
         <div className="platformdescription">
           TYnker powers the creativity of over <b>60 million kids</b> and serves thousands<br/> problemof schools and educators worldwide.<br/>
           <br/> 
           Our interactive story-based learning allows kids to learn the basics with easy<br/>block-based cosing challenges before seemlessly transitioning of real-world<br/><span>text based languages </span> like <b>javascript</b> and <b>python</b>.<br/>
           <br/>

           with 65+ award winning courses, there's a learning path for every kid, no<br/>
           matter their age or level. We have over 5,000 learning modules, backed by <br/>
           hundreds of built-in tutorials and hands of projects
         </div>
         <div className="orange">
           <button>START CODING NOW</button>
         </div>
       </div>
       <div className="rightplatform">
         <img src ={pics3}/>
       </div>
     </div>
     <div className="busy">
       <div className="new">
         Tynker has been busy. Good Busy. Check out what's NEW!
       </div>
       <div className="ap">
         <div className="ap1">
           AP cpmputer Science 
         </div>
         <div className='newapps'>
           2 New Ap CS courses endoresed by <br/>
           thr College Board.
         </div>
         <div className="more">
           Learn More
         </div>
         <div className="apimages2">
           <img src = {pics4}/>
         </div>
       </div>
       <div className="ap">
         <div className="apwra">
         <div className="ap1">
           Live Classes
         </div>
         <div className='newapps'>
           Live coding classes with a private <br/>
           teacher
           
           <br/>

           <div className="more">
           Learn More
           </div>
         </div>
         
         
         <div className="apimages">
           <img src = {pics5}/>
         </div>
         </div>
       </div>
       <div className="ap">
         <div className="ap1">
           TYnker + BYJU'S
         </div>
         <div className='newapps'>
           Tynker has joined the BYJU'S family <br/>
          of brands
         </div>
         
         <div className="more">
           Learn More
         </div>
         <div className="apimages">
           <img className=
           "byju" src = {pics6}/>
         </div>
       </div>
     </div>
     <div className="parents">
       <div className="leftparent">
         <img src={pics7}/>
       </div>
       <div className="rightparent">
         <div className="topic">
           Parents
         </div>
         <div className="parentsdescript">
         Coding is quickly becoming an essential skill, one that will prepare <br/>your kids to succeed in an increasingly digital world.
         <br/>
         <br/>
         Tynker offers a range of options to learn coding: Your children can <br/>learn to code with our self-paced, immersive game-like courses, and<br/> then advance to learning real-world Python and JavaScript.
         <br/>
         <br/>
         Select the option that's best for your child!

         </div>
         <div className="orange">
           <button>LEARN MORE</button>
         </div>
       </div>

     </div>
     <div className="educators">
       <div className="lefteducators">
         <div className="topic">
           Educators
         </div>
         <div className="educatorsdescript">
           join over 100,00 schools that use Tynker to engage students with <br/>coding and connect with other educators who love to code!<br/>
           <br/>
           Teaching coding with Tynker is as easy as 1-2-3. In just minutes , you can<br/>
           create a free account, set up your virtual classroom, and assign ready-<br/>made lesson plans!<br/>
           <br/>
           Tynker empowers k-12 educators with free PD, standards-aligned<br/> cirricula, cross-curricular STEM coding, AP computer science courses,<br/>and many great coding resources.
         </div>
         <div className="orange">
           <button>LEARN MORE</button>
         </div>
       </div>
       <div className="righteducators">
         <img src ={pics8}/>
       </div>
     </div>
     <div className="rated">
       <div className="topped">
         <div className="three">
           3 Highly-Rated Mobile Apps for Learning Code
         </div> 
         <div className="apps">
    Download Tynker apps and learn to code on the go
         </div>
         <div className="orange">
           <button>LEARN MORE</button>
         </div>
       </div>
       <div className="ratewrapper">
       <div className="leftrated">
       <img src ={pics9}/>
       </div>
       <div className="rightrated">
         <div className="junior">
           <b>Tynker Junior</b><br/>
           Tap-Tap picture cding with voice-overs. pre-<br/>
           readers solve story-based puzzles and build their<br/>
           first programs in coding sandboxes- Ages 5-7
         </div>
       </div>
       </div>
     </div>
    </div>
  );
}

export default App;

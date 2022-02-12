import {useState, useEffect} from 'react'
import Carousel from 'shared/Carousel/Carousel'
import './Body.scss';
import pattern from 'images/bg-tablet-pattern.svg';
import charts from 'images/illustration-intro.svg'
import Button from 'shared/Button/Button'
import avatar1 from 'images/avatar-ali.png'
import avatar2 from 'images/avatar-anisha.png'
import avatar3 from 'images/avatar-richard.png'
import avatar4 from 'images/avatar-shanai.png'

const Body = () => {
  let [width, setWidth] = useState(window.innerWidth)
  useEffect(()=>{
    function handleResize() {
        setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    
    return _ => {
        window.removeEventListener('resize', handleResize)
    }
})

  return (
    <div className="mainContainer">
      <img className="pattern" src={pattern} alt="orange pattern"/>
      <img className="pattern2" src={pattern} alt="orange pattern"/>
      <div className="section home">
        <img className="charts" src={charts} alt="charts"/>
        <div className="innerSection">
          <p className="title">Bring everyone together to build better projects.</p>
          <p className="subtitle"> Manage makes it simple for software teams to plan day-to-day 
          tasks while keeping the larger team goals in view. </p>
          <Button text="get started" color='orange'/>
        </div>
      </div>
      <div className="section2 mt-5">
        <div className="innerSection">
          <p className="secondTitle">What’s different about Manage?</p>
          <p className="subtitle">   Manage provides all the functionality your team needs, without 
          the complexity. Our software is tailor-made for modern digital 
          product teams. </p>
        </div>
        <div className="differences">
          <div className="dSquare">
            <p className="dTitle"><span>01</span> Track company-wide progress</p>
            <p className="subtitleLeft">
            See how your day-to-day tasks fit into the wider vision. Go from 
            tracking progress at the milestone level all the way done to the 
            smallest of details. Never lose sight of the bigger picture again.
            </p>
          </div>
          <div className="dSquare">
            <p className="dTitle"><span>02</span>Advanced built-in reports</p>
            <p className="subtitleLeft">
            Set internal delivery estimates and track progress toward company 
            goals. Our customisable dashboard helps you build out the reports 
            you need to keep key stakeholders informed.
            </p>
          </div>
          <div className="dSquare">
            <p className="dTitle"><span>03</span>Everything you need in one place</p>
            <p className="subtitleLeft">
            Stop jumping from one service to another to communicate, store files, 
            track tasks and share documents. Manage offers an all-in-one team 
            productivity solution.
            </p>
          </div>
        </div>
      </div>
      <div className="section3 mt-3 mb-5">
        <p className="secondTitle">What they´ve said</p>
        <div className="carousel mt-2">
          <Carousel
          show={width > 1300 ? 3 : 1}
          infiniteLoop={true}>
            <div className="carousel-inner">
              <div className="opinionSquare">
                <div>
                  <img src={avatar2} alt="person" />
                  <p className='subtitle3'>Anisha Li</p>
                  <p className='subtitle'>“Manage has supercharged our team’s workflow. The ability to maintain 
                  visibility on larger milestones at all times keeps everyone motivated.”</p>
                </div>
              </div>
            </div>
            <div className="carousel-inner">
              <div className="opinionSquare">
                <div>
                  <img src={avatar1} alt="person" />
                  <p className='subtitle3'>Ali Bravo</p>
                  <p className='subtitle'>“We have been able to cancel so many other subscriptions since using 
                  Manage. There is no more cross-channel confusion and everyone is much 
                  more focused.”</p>
                </div>
              </div>
            </div>
            <div className="carousel-inner">
              <div className="opinionSquare">
                <div>
                  <img src={avatar3} alt="person" />
                  <p className='subtitle3'>Richard Watts</p>
                  <p className='subtitle'> “Manage allows us to provide structure and process. It keeps us organized 
                  and focused. I can’t stop recommending them to everyone I talk to!”</p>
                </div>
              </div>
            </div>
            <div className="carousel-inner">
              <div className="opinionSquare">
                <div>
                  <img src={avatar4} alt="person" />
                  <p className='subtitle3'>Shanai Gough</p>
                  <p className='subtitle'>“Their software allows us to track, manage and collaborate on our projects 
                  from anywhere. It keeps the whole team in-sync without being intrusive.”</p>
                </div>
              </div>
            </div>
          </Carousel>


          
        </div>
      </div>
      <div className="orangeSquare">
        <p className="whiteTitle">Simplify how your team <br /> works today.</p>
        <Button text='get started' />
      </div>
    </div>
  );
}

export default Body;

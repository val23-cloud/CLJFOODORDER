import React from 'react'
import './Aboutpage.css'
import { Link } from 'react-router-dom'
import { HiOutlineArrowRight } from "react-icons/hi";
import img1 from '../Assets/about1.jpg'
import img2 from '../Assets/about2.jpg'
import img3 from '../Assets/threelines.svg'
import img4 from '../Assets/am3.jpg'
import qua from '../Assets/quality_food.svg'
import qua2 from '../Assets/super_taste.svg'
import qua3 from '../Assets/fast_delivery.svg'
import img5 from '../Assets/d13.jpg'
import img6 from '../Assets/d14.jpg'
import img7 from '../Assets/d15.jpg'
import img8 from '../Assets/d21.jpg'
import img9 from '../Assets/d23.jpg'
import img10 from '../Assets/d19.jpg'
import img11 from '../Assets/d18.jpg'
import img12 from '../Assets/d20.jpg'
import video1 from '../Assets/video1.mp4'
import video2 from '../Assets/video2.mp4'
import wwa1 from '../Assets/center.svg'
import wwa2 from '../Assets/whoweare.png'
import team1 from '../Assets/team_member_1.png'
import team2 from '../Assets/team_member_2.png'
import team3 from '../Assets/team_member_4.png'
import team4 from '../Assets/team_member_3.png'

const About = () => {
  const ourQualities = [
    {
      "id": 1,
      "image": qua,
      "title": "QUALITY FOOD",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis repellendus officia qui repellat." 
  },
  {
      "id": 2,
      "image":qua2,
      "title": "SUPER TASTE",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing sit amet elit. Sit voluptates quaerat pariatur." 
  },
  {
      "id": 3,
      "image":qua3,
      "title": "FAST DELIVERY",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis repellendus officia qui repellat." 
  }
  ]
  
  const dishes=[
    {
      "id": 1,
      "image": img5,
      "title": "",
      "category": "Dinner"
  },
  {
      "id": 2,
      "image": img6,
      "title": "",
      "category": "Dinner"
  },
  {
      "id": 3,
      "image": img7,
      "title": "",
      "category": "Breakfast"
  },
  {
      "id": 4,
      "image": img8,
      "title": "",
      "category": "Dinner"
  },
  {
      "id": 5,
      "image": img12,
      "title": "",
      "category": "Lunch"
  },
  {
      "id": 6,
      "image": img9,
      "title": "",
      "category": "Dinner"
  },
  {
      "id": 7,
      "image": img10,
      "title": "",
      "category": "Dinner"
  },
  {
      "id": 8,
      "image": img11,
      "title": "",
      "category": "Dinner"
  }
  ]

  const who_we_are=[
    {
      "id": 1,
      "number": "5",
      "title": "Deligent Employees"
  },
  {
      "id": 2,
      "number": "3",
      "title": "Chef In Kitchen"
  },
  {
      "id": 3,
      "number": "10",
      "title": "Years Of Experience"
  },
  {
      "id": 4,
      "number": "30-40",
      "title": "Food Dishes"
  }
  ]

  const team=[
    {
      "id": 1,
      "image": team1,
      "name": "NITHIN BENNY",
      "designation": "Founder & Head Chef"
  },
  {
      "id": 2,
      "image": team2,
      "name": "MATHUUSS",
      "designation": "Sous Chef"
  },
  {
      "id": 3,
      "image": team3,
      "name": "THOMMU",
      "designation": "Fast Food Chef"
  },
  {
      "id": 4,
      "image": team4,
      "name": "ASUUU",
      "designation": "Senior Chef"
  }
  ]
  
  return (
    <div className='aboutus'>
      <section className="heroSection" id="heroSection">
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">CLJ's</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src={img1} alt="hero" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">Delicious</h1>
                <h1 className="title dishes_title">Food</h1>
                <img src={img3} alt="threelines" />
              </div>
            
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src={img2} alt="hero" />
          </div>
          <h1 className="title dishes_title">Food</h1>
        </div>
      </div>
    </section>

    <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              HOTEL ANNA:
              A charming restaurant, nestled in the vibrant heart of Kozhikode, invites discerning food enthusiasts on a culinary journey through the rich and flavorful realm of Kerala cuisine. This cozy eatery exudes a lively atmosphere and is renowned for its exceptional array of delectable dishes, making it a must-visit for those who appreciate the nuances of Kerala's gastronomic delights.

            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src={img4} alt="about" />
          </div>
        </div>
      </section>

      <section className='qualities' id='qualities'>
          <div className="container">
            {
             
              ourQualities.map(element=>{
                return(
                  <div className='card' key={element.id}>
                      <img src={element.image} alt={element.title} />
                      <p className='title'>{element.title}</p>
                      <p className='description'>{element.description}</p>
                  </div>
                )
              })
            }
          </div>
        </section>

        <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">GALLERY</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, iusto dolorem! Voluptatibus ipsum nam mollitia architecto. Soluta pariatur eius et recusandae veritatis. Quasi, et molestias!</p>
            </div>
            <div className="dishes_container">
                {
                    dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                               
                        </div>
                    ))
                }  
                <video controls width="600" height="400">
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video> 
      <video controls width="600" height="400">
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video> 
      <video controls width="600" height="400">
        <source src={video2} type="video/mp4" />
        Your browser does not support the video tag.
      </video> 
      <video controls width="600" height="400">
        <source src={video2} type="video/mp4" />
        Your browser does not support the video tag.
      </video> 
            </div>
        </div>
      </section>

      <section className='who_are_we' id='who_are_we'>
        <div className="container">
          <div className="text_banner">
            {
              who_we_are.slice(0,2).map(element=>(
                <div className="card" key={element.id}>
                  <h1 className='heading' style={{fontWeight: "300"}}>{element.number}</h1>
                  <p>{element.title}</p>
                </div>
              ))
            }
          </div>
          <div className="image_banner">
            <img className='gradient_bg' src={wwa1} alt="gradientBg" />
            <img src={wwa2} alt="food" />
          </div>
          <div className="text_banner">
            {
              who_we_are.slice(2).map(element=>(
                <div className="card" key={element.id}>
                  <h1 className='heading' style={{fontWeight: "300"}}>{element.number}</h1>
                  <p>{element.title}</p>
                </div>
              ))
            }
          </div>
        </div>
        </section> 

        <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading" style={{color:'#78040f'}}>OUR TEAM</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            fugit dicta, ipsum impedit quam laboriosam quas doloremque quia
            perferendis laborum.
          </p>
        </div>
        <div className="team_container">
          {team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    </div>
  )
}

export default About
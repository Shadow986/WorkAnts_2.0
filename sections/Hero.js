import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import React from "react"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <img src='/images/logo3.png' alt='WorkAnts' className='logomin' />
          <h1 className='hero-title'>Building Success, Together Strong</h1>

          <div className='sub-heading'>
            <TitleSm title='BUILDING' /> <span>.</span>
            <TitleSm title='ARCHITECTURE' /> <span>.</span>
            <TitleSm title='PROPERTY DEVELOPMENT' />
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Turning your development ideas into a reality' />
            <p>At WorkAnts, we specialize in transforming your development ideas into tangible realities. With our innovative technologies and modern approach, we ensure that every project is executed with precision and excellence. From initial concept to final construction, our dedicated team is committed to delivering high-quality results that exceed your expectations. Trust us to bring your vision to life, creating spaces that inspire and endure.</p>
          </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      <ShowCase />
      <Brand />

      <div className='text-center'>
        <Title title='Our Latest Projects' />
      </div>
      <BlogCard />
    </>
  )
}

export default Hero

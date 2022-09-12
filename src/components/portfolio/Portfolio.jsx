import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Proyect1.png'
import IMG2 from '../../assets/Proyect1.png'


//
const data = [
    {
        id: 1,
        image: IMG2,
        title: 'Crypto Currency',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/16673715-Crypto-currencey-dashboards-and-financial-data-visualization'
    }
]










const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="" />

                    </div>
                    <h3>This is a portfolio item title</h3>

                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className="btn">Github</a>
                        <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" target='_blank' rel="noreferrer"   >Live Demo</a>
                    </div>


                </article>

                {/* Rest of proyects coming from array */}
                {
                    data.map(({id, image, title, github, demo}) =>  {
                        return (

                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
            
                                </div>
                                <h3>{title}</h3>
            
                                <div className="portfolio__item-cta">
                                    <a href={github} className="btn">Github</a>
                                    <a href={demo} className="btn btn-primary" target='_blank' rel="noreferrer"   >Live Demo</a>
                                </div>
        
        
                            </article>


                        )


                    })




                }



  




            </div>


        </section>
    )
}

export default Portfolio
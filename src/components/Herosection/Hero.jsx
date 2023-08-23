import React from 'react'
import './Hero.css'
import { Header } from '../Header/Header'
import heart from '../../assets/heart.png'
import hero_img from '../../assets/hero_image.png'
import hero_img_back from '../../assets/hero_image_back.png'
import calories from '../../assets/calories.png'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'
export function Hero() {
    
    const transition = {type: 'spring', duration: 3}
    const mobile = window.innerWidth<= 768 ? true : false

    return (
        <>
    <div className="hero" id='home'>
        <div className="blur blur-h"></div>
        <div className="left-h">
                <Header />
                {/*the best ad*/}
                <div className="the-best-ad">
                    <motion.div
                     initial = {{left: mobile? "165px" : "238px"}}
                     whileInView = {{left: '8px'}}
                     transition = {{...transition, type: 'tween'}}
                    >
                       
                    </motion.div>
                    <span>the best fitness club in the town</span>
                </div>
                {/*hero heading*/}
            <div className="hero-text">
                  <div>
                       <span className='stroke-text'>Shape</span>
                       <span> your</span>
                  </div>
                  <div>
                       <span>ideal body</span>
                       </div>
                       <div>
                        <span>
                            In here we will help you to shape and build your ideal body and live up your life to <br/> fullest
                        </span>
                        </div>
            </div>

            {/* Figures */}
            <div className="figures">
                <div>
                    <span>
                        <NumberCounter
                        end={140}
                        start={100}
                        delay='4'
                        preFix='+'
                        />
                    </span>
                    <span>expert coaches</span>
                </div>
                <div>
                    <span>
                      
                    <NumberCounter
                        end={978}
                        start={800}
                        delay='4'
                        preFix='+'
                        />

                    </span>
                    <span>members joined</span>
                </div>
                <div>
                    <span>
                     
                    <NumberCounter
                        end={50}
                        start={0}
                        delay='4'
                        preFix='+'
                        />

                    </span>
                    <span>fitness programs</span>
                </div>
            </div>

            {/*hero buttons*/}
            <div className="hero-buttons">
                <button className="btn">Get started</button>
                <button className="btn">learn more</button>
            </div>
        </div>

        {/* End of left side  */}
    <div className="right-h">
                <button className='btn'>Join now</button>

            <motion.div 
            initial = {{right: '-1rem'}}
            whileInView={{right: '4rem'}}
            transition={transition}
            className="heart-rate">
                    <img src= {heart}  />
                <div>
                    <span>Heart Rate</span>
                    <span> 116 bpm</span>
                </div>
            </motion.div>

            {/* Hero images */}
            <img src= {hero_img}  className='hero-img'/>
            <motion.img src= {hero_img_back}  
            initial = {{right: '11rem'}}
            whileInView={{right: '20rem'}}
            transition={transition}
            className='hero-img-back'/>

            <motion.div
            initial = {{right: '37rem'}}
            whileInView={{right:'28rem'}}
            transition={transition}
            className="calories">
                <img src={calories} alt="" />
                <div>
                <span>Calories Burned</span>
                <span>220 kcal</span>
                </div>
            </motion.div>
    </div>
</div>  
        </>
    )
}

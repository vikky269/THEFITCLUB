import React from 'react'
import './Plans.css'
import {plansData} from '../../data/plansData'
import whitetick from '../../assets/whitetick.png'

export function Plans() {
    

    return (
        <>
            <div className="plans-container" id='plan'>
                <div className="blur plans-blur-1"></div>
                <div className="blur plans-blur-2"></div>
                <div className="plan-header">
                    <span className='stroke-text'> READY TO START</span>
                    <span>YOUR JOURNEY</span>
                    <span className='stroke-text'>NOW WITHUS</span>
                </div>

                {/*plans card */}

                <div className="plan">
                      {plansData.map((plan, i) => {
                        return (
                        <div className="plans" key={i}>
                            {plan.icon}
                            <span> {plan.name} </span>
                            <span> ${plan.price} </span>


                            <div className="features">
                                 {plan.features.map((feature, i)=> {
                                    return (
                                      <div className="feature" key={i}>
                                        <img src= {whitetick} alt="" />
                                        <span> {feature} </span>
                                      </div>
                                    )
                                 })}
                            </div>
                            <div>
                                <span>See more benefits -{'>'} </span>
                            </div>
                            <button className='btn btn-join' >Join Now</button>
                        </div>
                        )
                      })}
                </div>
            </div>
        </>
    )
}

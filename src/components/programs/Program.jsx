import React from 'react'
import './Program.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
export function Program() {
    
//console.log(programsData);
    return (
        <>
            <div className="program" id="program">
                {/* Header */}
                <div className="program-header">
                    <span className='stroke-text'>explore our</span>
                    <span>programs</span>
                    <span className='stroke-text'> to shape you</span>
                </div>

                <div className="program-categories">
                    {programsData.map((program) => {
                       return (
                        <div className="category" key={program.id}>
                            {program.image}
                            <span> {program.heading} </span>
                            <span> {program.details} </span>
                            <div className="join-now"><span>Join Now</span> <img src= {RightArrow} alt="" /></div>
                        </div>
                       )
                    })}
                </div>
            </div>
        </>
    )
}

import React from 'react'
import './Sys.css'

const Sys = () => {
    return (
        <>
            <section id="about" className='sys'>
                <div className="container">
                    <div className="sys__wrapp">
                        <div className="sys__wrapp-img">
                            <img src="sys.png" alt="" className='sys-img' />
                        </div>
                        <div className="sys__wrapp-about">
                            <h2>Branding & Design system</h2>
                            <p>Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups</p>
                            <img className='arrow' src="./arrow.svg" alt="" />
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Sys
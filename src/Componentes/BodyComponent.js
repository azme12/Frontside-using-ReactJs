import React, { Component } from 'react';
const Bodycomponent = () => {
    return (
        <div className='bodyheight'>
            <h1>WELL COME TO OUR WEBSITE</h1>
            <img src="http://localhost:3000/logo3.png"></img>
            <p><h1>why use?</h1><br /> as our name suggests, we seek to deliver projects that demonstrate a thorough understanding of technology in terms of conceptualization, <br /> design, development,and implementation, allowing us to deliver real-world problem-solving, long-term, and maintainable solutions.</p>
            <button>Read More</button>
            <hr></hr>
            <img src="http://localhost:3000/logo4.png"></img><br />
            <section className='row'>
                <h1>Our Service</h1>
                <section className='column'>
                    software development
                    <br />
                    mobile application development
                    <br />
                    erp solution
                </section>

                <section className='column'>
                    digital marketing & SEO optimazation
                    <br />
                    web application development
                </section>
            </section>
            <p className='paragraph'><h1>about our website</h1>
                deliver projects that demonstrate a thorough understanding of technology in terms of conceptualization, design, development,<br /> and implementation,allowing us to deliver real-world problem-solving, long-term, and maintainable solutions</p>
            <section className='technology'>
                <h1>Technology used</h1>
                <section className='column'>
                    HTML5
                    <br />
                    CSS3
                    <br />
                    FIGMA
                </section>

                <section className='column'>
                    JavaScripte
                    <br />
                    ReactJs
                </section>
            </section>

        </div >
    );
}

export default Bodycomponent;
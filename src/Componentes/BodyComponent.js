import React, { Component } from 'react';
const Bodycomponent = () => {
    return (
        <div className='bodyheight'>
            <h1>WELL COME TO OUR WEBSITE</h1>
            <img src="http://localhost:3000/logo3.png"></img>
            <p><h1>why use?</h1><br /> as our name suggests, we seek to deliver projects that demonstrate a thorough understanding of technology in terms of conceptualization, <br /> design, development,and implementation, allowing us to deliver real-world problem-solving, long-term, and maintainable solutions.</p>
            <button className='button'>Read More</button>
            <hr></hr>
            <img src="http://localhost:3000/logo4.png"></img>
            <br />
            <section className='row'>
                <h1>Our Service</h1>
                <section className='column'>
                    <b>software development</b>
                    <br />
                    <b>mobile application development</b>
                    <br />
                    <b>ERP solution</b>
                </section>

                <section className='column'>
                    <b> digital marketing & SEO optimazation</b>
                    <br />
                   <b> web application development</b>
                </section>
            </section>
            <p className='paragraph'><h1>about our website</h1>
                deliver projects that demonstrate a thorough understanding of technology in terms of conceptualization, design, development,<br /> and implementation,allowing us to deliver real-world problem-solving, long-term, and maintainable solutions</p>
            <section className='technology'>
                <h1>Technology used</h1>
                <section className='column'>
                    <i className="fa fa-html5 fa-2x"></i><b>HTML5</b>
                    <br />
                    <i className="fa fa-css3"></i> <b>CSS3</b>
                    <br />
                    <i class="fa fa-figma"></i><b>Figma</b>
                    <br />
                
                </section>

                <section className='column'>
                <i class="fa fa-js"></i><b>JavaScripte</b> 
                    <br />
                    <i className="fa fa-react"></i><b>React</b> 
                </section>
            </section>

        </div >
    );
}

export default Bodycomponent;
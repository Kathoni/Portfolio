import React from 'react'
import Myimage from "../assets/img2.jpg"

function Home() {
    return (
        <div>
            <section style={{
                marginLeft:"auto",
                marginRight:"auto",
                textAlign:"center",
                marginTop:"100px",
                width:"60%"

            }}>
                <h1>Hello 👋🏾. 
                    <br />Welcome to my page</h1>
            </section>
            <section
            style={{marginLeft:"15px",

            }}>
                <h1 style={{
                    fontStyle:"Oblique"
                }}>About me</h1>
                <p>I'm a passionate front-end developer,
                    <br />
                     I excel in crafting visually stunning and user-friendly web interfaces using my
                     <br /> expertise in HTML, React.js, CSS, Bootstrap, and JavaScript.
                      my skill set allows me to seamlessly integrate responsive design and interactive elements, 
                      <br />ensuring that my creations are not only aesthetically pleasing but also highly functional across all devices.
                      <br />
                       As a tech enthusiast, I continuously seek out the latest trends
                       <br /> 
                       and advancements in the industry, eager to incorporate new techniques and tools into my projects.
                       <br />
                        My commitment to learning and growth drives me to push the 
                        boundaries of what's possible in front-end development, making me a valuable contributor to
                        <br />
                         any web development team.</p>
                         <section>
                <img src={Myimage} alt="" className="img-fluid" 
                style={{
                    width:"40%",
                    height:"40%",
                    borderRadius:"25px",
                    marginTop:"20px",
                    marginBottom:"20px"
                    
                }}/>
            </section>
            </section>
            
        </div>
    )
}

export default Home
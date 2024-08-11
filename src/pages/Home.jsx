import React from 'react';
import Myimage from "../assets/img2.jpg";
import Myimage1 from "../assets/HTML.jpeg";
import Myimage2 from "../assets/JS.jpeg";
import Myimage3 from "../assets/REACT.jpeg";
import Myimage4 from "../assets/git hub.jpeg";
import Myimage5 from "../assets/Bootstrap.jpeg";
import Myimage6 from "../assets/CSS.jpeg";
import Projects from './Projects';
import Contact from './Contact';

function Home() {
    return (
        <div>
            <section style={{
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
                marginTop: "100px",
                width: "60%"
            }}>
                <h1>Hello 👋🏾.
                    <br />Welcome to my page <br />I'm Sylvia Kathoni a front-end-developer</h1>
            </section>
            <section style={{ display: "flex", marginLeft: "15px", alignItems: "center" }}>
                <div style={{ flex: 1 }}>
                    <h1 style={{ fontStyle: "oblique" }}>About me</h1>
                    <p>
                        I'm a passionate front-end developer,
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
                        any web development team.
                    </p>
                </div>
                <div style={{ flex: 1, textAlign: "right" }}>
                    <img src={Myimage} alt="" className="img-fluid"
                        style={{
                            height: "50hv",
                            borderRadius: "125px",
                            marginTop: "20px",
                            marginBottom: "20px"
                        }} />
                </div>
            </section>
            <section
            style={{ textAlign: "center" }}>
                <h1>I am farmiliar with</h1>
                <ul>
                    <li style={{
                        listStyle: "none",
                    }}>
                    <img style={{
                        width: "10%",
                        borderRadius:"25px",
                        marginLeft:"10px"
                    }} src={Myimage1} alt="" className="img-fluid"/>
                    <img style={{
                        width: "5%",
                        marginLeft:"10px",
                        borderRadius:"305px"
                    }}src={Myimage2} alt="" className="img-fluid"/>
                    <img style={{
                        width: "10%"
                    }}src={Myimage3} alt="" className="img-fluid"/>
                    <img style={{
                        width: "10%"
                    }}src={Myimage4} alt="" className="img-fluid"/>
                    <img style={{
                        width: "10%"
                    }}src={Myimage5} alt="" className="img-fluid"/>
                    <img style={{
                        width: "10%"
                    }}src={Myimage6} alt="" className="img-fluid"/>
                    </li>
                </ul>
            </section>
            <div>
                <Projects />
                <Contact/>
            </div>
        </div>
    )
}

export default Home;

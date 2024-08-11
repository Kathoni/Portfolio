import React from 'react';
import { Link } from 'react-router-dom';
import Image from "../assets/age calc.jpg";
import Image0 from "../assets/photo gallery.jpg";
import Image1 from "../assets/weatherapp.jpg";
import Image2 from "../assets/landing 1.jpg";
import Image3 from "../assets/dynamic.jpg";
import Image4 from "../assets/spotify.jpg";
import Image5 from "../assets/stopwatch.jpg";
import Image6 from "../assets/To do list.jpg";
import Image7 from "../assets/quote generator.jpg";

function Projects() {
    return (
        <div>
            <h1 style={{
                textAlign: "center",
                paddingTop: "5rem",
                paddingBottom: "5rem",
            }}>
                Here are some of the projects I have worked on so far.
            </h1>
            <div className='container'>
                <div className="row" style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "5rem",
                    gap: "1rem",
                    flexWrap: "wrap",
                }}>
                    {[Image, Image0, Image1, Image2, Image3, Image4, Image5, Image6, Image7].map((img, index) => (
                        <div className="col" style={{ flex: "0 0 30%", maxWidth: "30%", boxSizing: "border-box" }} key={index}>
                            <div className="card">
                                <img src={img} style={{
                                    height: "15rem",
                                    width: "100%",
                                    objectFit: "cover",
                                }} alt={`Project ${index}`} />
                                <div className="card-body">
                                    <h5 className="card-title">Project Title {index + 1}</h5>
                                    <p className="card-text">A brief description of project {index + 1}.</p>
                                    <button style={{
                                        marginTop: "10px",
                                        padding: "10px 20px",
                                        borderRadius: "5px",
                                        border: "none",
                                        backgroundColor: "#007bff",
                                        color: "white",
                                        cursor: "pointer"
                                    }}>
                                        <Link to="#" style={{ color: "inherit", textDecoration: "none" }}>Go to app</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;

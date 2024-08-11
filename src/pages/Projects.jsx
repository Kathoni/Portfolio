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
                <div className="row"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "5rem",
                        marginTop: "5rem",
                        gap: "2rem",
                        flexWrap: "wrap",
                    }}>
                    {[{ image: Image0, title: 'Photo gallery', description: 'A simple photo gallery manipulated from Unsplash API.', link: 'https://photohgallery.vercel.app/' },
                      { image: Image, title: 'Age Calculator', description: 'A simple age calculator where you input your birth date, month, and year and get your age.', link: 'https://calculator-sigma-ashen-20.vercel.app/' },
                      { image: Image1, title: 'Weather app', description: 'This is where you input your City name and get updated on the current weather situation.', link: 'https://weatherapp-hzkd.vercel.app/' },
                      { image: Image2, title: 'Landing page', description: 'A Landing page layout.', link: 'https://medium-landing-page-nine.vercel.app/' },
                      { image: Image3, title: 'Dynamic Form', description: 'A simple form where each field is required to be filled.', link: 'https://dynamic-form-nine-brown.vercel.app/' },
                      { image: Image4, title: 'Spotify', description: 'A simple incorporated Spotify landing page.', link: 'https://spotify-page-two.vercel.app/' },
                      { image: Image5, title: 'Stopwatch', description: 'An incorporated stopwatch.', link: 'https://stopwatch-eight-flax.vercel.app/' },
                      { image: Image6, title: 'To do list', description: 'A simple task arranger.', link: 'https://todo-listapp-xi.vercel.app/' },
                      { image: Image7, title: 'Quote Generator', description: 'A simple quote generator application.', link: 'https://api-sigma-blue.vercel.app/' },
                    ].map((project, index) => (
                        <div className="col" style={{ flex: "0 0 30%", maxWidth: "30%" }} key={index}>
                            <div className="card">
                                <img src={project.image} style={{
                                    height: "15rem",
                                    width: "100%",
                                    objectFit: "cover",
                                }} alt={`${project.title}`} />
                                <div className="card-body">
                                    <h5 className="card-title">{project.title}</h5>
                                    <p className="card-text">{project.description}</p>
                                    <Link to={project.link} style={{
                                        display: "inline-block",
                                        marginTop: "10px",
                                        padding: "10px 20px",
                                        borderRadius: "5px",
                                        backgroundColor: "#007bff",
                                        color: "white",
                                        textDecoration: "none",
                                        textAlign: "center",
                                    }}>Go to app</Link>
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

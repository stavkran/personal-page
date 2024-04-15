import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from '@mui/icons-material/FolderOpenRounded';
import FadeInSection from "./FadeInSection";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Links from "./Links";


class Projects extends React.Component {
    constructor() {
        super();
        this.state = {
        expanded: true,
        activeKey: "1"
        };
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(eventKey) {
        this.setState({
        activeKey: eventKey
        });
    }
    render() {
        const spotlightProjects = {
            "Crimson Coffee eshop": {
            title: "Crimson Coffee eshop",
            desc:
                "A web eshop application for sustainable coffee brand 'Crimson Coffee'. It features a user-friendly shopping page for customers and an admin panel for managing products, prices, users, and orders.",
            techStack: "PHP, JAVASCRIPT, MONGODB",
            link: "https://github.com/stavkran/CrimsonCoffee-eshop",
            image: "/personal-page/assets/Homepage1.png"
            },
            LibrarySystem: {
            title: "University of Piraeus - Library Reservation System",
            desc:
                "A web service for UniPi students and staff to manage book reservations.",
            techStack: "PYTHON (FLASK), MONGODB",
            link: "https://github.com/stavkran/Unipi-Library-Reservation-System",
            image: "/personal-page/assets/userHomepage2.png"
            }
        };
        const projects = {
        "University of Piraeus - Lbrary Reservation System": {
            desc:
            "Explore the University of Piraeus Library's digital gateway project. Implemented using Python, Flask, and MongoDB, it offers a web service for users to manage book reservations.",
            techStack: "PYTHON, FLASK, MONGODB",
            link: "https://github.com/stavkran/Unipi-Library-Reservation-System"
        },
        "Crimson Coffee eshop": {
            desc: "Crimson Coffee e-shop is a school project developed for an e-commerce class. This web application allows users to browse and purchase coffee products online. It features a user-friendly shopping page for customers and an admin panel for managing products, prices, users, and orders. The project is built using PHP, JavaScript, HTML, CSS, and is connected to a MongoDB database using Composer for dependency management.",
            techStack: "PHP, JAVASCRIPT, HTML, CSS, MONGODB",
            link: "https://github.com/stavkran/CrimsonCoffee-eshop"
        },
        "Seed-Dataset-Classification-and-Clustering": {
            desc:
            "This Python project involves using a seed dataset for classification and clustering tasks, where machine learning algorithms are applied to classify seeds into different categories and group similar seeds together based on their features.",
            techStack: "PYTHON, NUMPY, PANDAS, SKLEARN",
            link: "https://github.com/stavkran/Seed-Dataset-Classification-and-Clustering",
            open: ""
        },
        "File Uploader": {
            desc:
            "A Django Web Application in which you can upload csv files with duplicates and get the cleaned csv.",
            techStack: "DJANGO",
            link: "https://github.com/stavkran/file-uploader"
        },
        "Car Rental": {
            desc:
            "The Car Rental App, written in Java, is a user-friendly platform that allows individuals to search, book, and manage car rentals conveniently, providing a seamless experience from start to finish.",
            techStack: "JAVA",
            link: "https://github.com/stavkran/car-rental",
            open: ""
        },
        "IMDbReviews | Sentiment-Analysis ": {
            desc:
            "This project involves using the IMDb dataset to train a model that can predict the sentiment of a movie review as either positive or negative. The model is trained using a neural network with an embedding layer and a dense layer with sigmoid activation. The model is then used to predict the sentiment of a movie review from the user input.",
            techStack: "PYTHON, NUMPY, PANDAS, SKLEARN",
            link: "https://github.com/stavkran/IMDbReviews-Sentiment-Analysis/tree/main"
        },
        // "Tic Tac Toe": {
        //     desc:
        //     "A tic-tac-toe game in Python involves players taking turns entering 'X' or 'O' moves on a 3x3 game board, checking for win or draw conditions, and offering the option to play again or quit the game.",
        //     techStack: "PYTHON",
        //     link: "https://github.com/stavkran/TicTacToe",
        //     open: ""
        //     }
        };

        return (
        <div id="projects">
            <div className="section-header ">
            <span className="section-title">/ personal-projects</span>
            </div>
            <Carousel>
                {Object.keys(spotlightProjects).map((key, i) => (
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={spotlightProjects[key]["image"]}
                        alt={key}
                    />
                    <div className="caption-bg">
                        <Carousel.Caption>
                        <h3>{spotlightProjects[key]["title"]}</h3>
                        <p>
                            {spotlightProjects[key]["desc"]}
                            <p className="techStack">
                            {spotlightProjects[key]["techStack"]}
                            </p>
                        </p>
                        <Links
                            githubLink={spotlightProjects[key]["link"]}
                        ></Links>
                        </Carousel.Caption>
                    </div>
                    </Carousel.Item>
                ))}
            </Carousel>
            <div className="project-container">
            <ul className="projects-grid">
                {Object.keys(projects).map((key, i) => (
                <FadeInSection delay={`${i + 1}00ms`}>
                    <li className="projects-card">
                    <div className="card-header">
                        <div className="folder-icon">
                        <FolderOpenRoundedIcon
                            style={{ fontSize: 35 }}
                        ></FolderOpenRoundedIcon>
                        </div>
                        <Links
                        githubLink={projects[key]["link"]}
                        openLink={projects[key]["open"]}
                        ></Links>
                    </div>

                    <div className="card-title">{key}</div>
                    <div className="card-desc">{projects[key]["desc"]}</div>
                    <div className="card-tech">{projects[key]["techStack"]}</div>
                    </li>
                </FadeInSection>
                ))}
            </ul>
            </div>
        </div>
        );
    }
}

export default Projects;

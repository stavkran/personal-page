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
        "Tic Tac Toe": {
            car_title: "tic tac toe",
            car_desc:
            "A tic-tac-toe game in Python involves players taking turns entering 'X' or 'O' moves on a 3x3 game board, checking for win or draw conditions, and offering the option to play again or quit the game.",
            car_tech: "PYTHON",
            car_link: "https://github.com/stavkran/TicTacToe",
            car_open: "",
            image: "/assets/tictactoe.png"
        },
        "Tic Tac Toe 1": {
            car_title: "tic tac toe 1",
            car_desc:
            "A tic-tac-toe game in Python involves players taking turns entering 'X' or 'O' moves on a 3x3 game board, checking for win or draw conditions, and offering the option to play again or quit the game.",
            car_tech: "PYTHON",
            car_link: "https://github.com/stavkran/TicTacToe",
            car_open: "",
            image: "/assets/tictactoe.png"
        },
        "Tic Tac Toe 2": {
            car_title: "tic tac toe 2",
            car_desc:
            "A tic-tac-toe game in Python involves players taking turns entering 'X' or 'O' moves on a 3x3 game board, checking for win or draw conditions, and offering the option to play again or quit the game.",
            car_tech: "PYTHON",
            car_link: "https://github.com/stavkran/TicTacToe",
            car_open: "",
            image: "/assets/tictactoe.png"
        },
        Portfolio: {
            car_title: "portfolio.js",
            car_desc:
            "A small JS library that helps with clear and succinct data presentation.",
            car_tech: "NODE.JS (EXPRESS.JS)",
            car_link: "https://github.com/gazijarin/Portfolio.js",
            car_open: "https://afternoon-ocean-92382.herokuapp.com/",
            image: "/assets/portfolio.png"
        }
        };
        const projects = {
        "Tic Tac Toe": {
            desc:
            "A tic-tac-toe game in Python involves players taking turns entering 'X' or 'O' moves on a 3x3 game board, checking for win or draw conditions, and offering the option to play again or quit the game.",
            techStack: "PYTHON",
            link: "https://github.com/stavkran/TicTacToe",
            open: ""
            },
        "Adam A.I.": {
            desc:
            "A tic-tac-toe game in Python involves players taking turns entering 'X' or 'O' moves on a 3x3 game board, checking for win or draw conditions, and offering the option to play again or quit the game.",
            techStack: "PYTHON",
            link: "https://github.com/stavkran/TicTacToe",
            open: ""
        },
        "Distributed Logging and Monitoring System": {
            desc:
            "A tic-tac-toe game in Python involves players taking turns entering 'X' or 'O' moves on a 3x3 game board, checking for win or draw conditions, and offering the option to play again or quit the game.",
            techStack: "PYTHON",
            link: "https://github.com/stavkran/TicTacToe"
        },
        "Odin Bot": {
            desc:
            "A tic-tac-toe game in Python involves players taking turns entering 'X' or 'O' moves on a 3x3 game board, checking for win or draw conditions, and offering the option to play again or quit the game.",
            techStack: "PYTHON",
            link: "https://github.com/stavkran/TicTacToe",
            open: ""
        },
        "Game Centre": {
            desc:
            "A tic-tac-toe game in Python involves players taking turns entering 'X' or 'O' moves on a 3x3 game board, checking for win or draw conditions, and offering the option to play again or quit the game.",
            techStack: "PYTHON",
            link: "https://github.com/stavkran/TicTacToe",
            open: ""
        },
        "Minimax Stonehenge": {
            desc:
            "Two-player, zero-sum game with a strategic Minimax artificial intelligence.",
            techStack: "Python",
            link: "https://github.com/gazijarin/stonehenge",
            open: ""
        }
        };

        return (
        <div id="projects">
            <div className="section-header ">
            <span className="section-title">/ personal-projects</span>
            </div>
            <Carousel>
                {Object.keys(spotlightProjects).map((key, i) => (
                    <Carousel.Item key={key}> {/* Add unique key prop */}
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
                            <p className="techStack">{spotlightProjects[key]["techStack"]}</p>
                        </p>
                        <Links
                            githubLink={spotlightProjects[key]["link"]}
                            openLink={spotlightProjects[key]["open"]}
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

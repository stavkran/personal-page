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
        const projects = {
        "Tic Tac Toe": {
            desc:
            "A tic-tac-toe game in Python involves players taking turns entering 'X' or 'O' moves on a 3x3 game board, checking for win or draw conditions, and offering the option to play again or quit the game.",
            techStack: "PYTHON",
            link: "https://github.com/stavkran/TicTacToe",
            open: ""
            },
        "Seed-Dataset-Classification-and-Clustering": {
            desc:
            "This Python project involves using a seed dataset for classification and clustering tasks, where machine learning algorithms are applied to classify seeds into different categories and group similar seeds together based on their features.",
            techStack: "PYTHON",
            link: "https://github.com/stavkran/Seed-Dataset-Classification-and-Clustering",
            open: ""
        },
        "File Uploader": {
            desc:
            "A Django Web Application in which you can upload csv files with duplicates and get the cleaned csv.",
            techStack: "DJANGO",
            link: "https://github.com/stavkran/file-uploader"
        }
        };

        return (
        <div id="projects">
            <div className="section-header ">
            <span className="section-title">/ personal-projects</span>
            </div>
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

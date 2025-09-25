import React from "react";
import "../styles/Education.css";

class Education extends React.Component {
    render() {
        const educationList = [
            {
                degree: "MSc Computer Science",
                institution: "University of Amsterdam",
                period: "SEPT 2025 – AUG 2027",
                link: "https://www.uva.nl/en",
                image: "/personal-page/assets/uva_logo.png",
            },
            {
                degree: "BSc Digital Systems",
                institution: "University of Piraeus",
                period: "OCT 2019 – FEB 2025",
                link: "https://www.ds.unipi.gr/",
                image: "/personal-page/assets/unipi_logo.png",
            }
        ];

        return (
            <div id="education">
                <div className="section-header">
                    <span className="section-title">/ education</span>
                </div>
                <div className="education-grid">
                    {educationList.map((edu, index) => (
                        <div className="education-card" key={index}>
                            <img
                                className="education-image"
                                src={edu.image}
                                alt={edu.institution}
                            />
                            <div className="education-content">
                                <h3>{edu.degree}</h3>
                                <p className="education-institution">
                                    <a href={edu.link} target="_blank" rel="noopener noreferrer">
                                        {edu.institution} <span role="img" aria-label="link-icon">🔗</span>
                                    </a>
                                </p>
                                <p className="education-period">{edu.period}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Education;

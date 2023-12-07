import React from "react";
import "../styles/Certifications.css";

class Certifications extends React.Component {
    render() {
    const certifications = [
        {
            title: "Fundamentals of Deep Learning",
            desc:"NVIDIA",
            image: "/personal-page/assets/nvidia_logo.png",
            credential: "https://courses.nvidia.com/certificates/249d61dd0f4f429ba96784efad8bf576/",
        },
        {
            title: "Ethics of AI",
            desc:"University of Helsinki",
            image: "/personal-page/assets/1631300517673.png",
            credential: "https://certificates.mooc.fi/validate/zvcywxdm13i",
            className: "helsinki-image",
        },
        {
            title: "Java Multithreading - Concurrency, Parallelism & Performance",
            desc:"Udemy",
            image: "/personal-page/assets/udemy_logo.png",
            credential: "https://www.udemy.com/certificate/UC-91048bdc-ba11-4365-bf8b-004108f76f29/",
        },
    ];

    return (
        <div id="certifications">
            <div className="section-header">
                <span className="section-title">/ certifications</span>
            </div>
            <div className="certifications-grid">
                {certifications.map((certification, index) => (
                    <div className="certification-card" key={index}>
                        <img
                            // className="certification-image"
                            className={`certification-image ${certification.className}`}
                            src={certification.image}
                            alt={certification.title}
                        />
                        <div className="certification-content">
                            <h3>{certification.title}</h3>
                            <p className="certification-desc">{certification.desc}</p>
                            <p className="certification-credential">
                                <a href={certification.credential} target="_blank" rel="noopener noreferrer">
                                    Show credential <span role="img" aria-label="link-icon">🔗</span>
                                </a>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
    }
}

export default Certifications;

import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaLink } from "react-icons/fa"; 

const Badge = ({ title, image, credential }) => {
    const [showCredential, setShowCredential] = useState(false);

    return (
        <div className="badge-card">
        <img className="badge-image" src={image} alt={title} />
        <div className="badge-details">
            <h3>{title}</h3>
            {showCredential ? (
            <>
                <p>{credential}</p>
                <button onClick={() => setShowCredential(false)}>
                Hide Credential
                </button>
            </>
            ) : (
            <button onClick={() => setShowCredential(true)}>
                Show Credential <FaLink />
            </button>
            )}
        </div>
        </div>
    );
    };

    Badge.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    credential: PropTypes.string.isRequired,
    };

export default Badge;
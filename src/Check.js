import React from "react";
import "./check.css";
function Check({ heading, userName }) {
    return (
        <div className="navbar">
            <div className="left-arrow">name</div> {/* Left Arrow */}
            <div className="heading">age</div> {/* Center Heading */}
            <div className="user-name">email</div> {/* Right User Name */}
        </div>
    );
}

export default Check;
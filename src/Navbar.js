import React from 'react';
import './navbar.css';
import LoopIcon from '@mui/icons-material/Loop';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
const Navbar = ({ onTicketClick }) => {
    const lastUpdated = new Date().toLocaleString();
    const utcDateTime = new Date().toLocaleString();

    return (
        <div className='container'>
            <div className="navbar">
                <h2>INTEGRA <span class="normal-font-weight">CMS</span></h2>
                <h5 >machine activty <ArrowRightIcon id='icon' /> status & utiliation<ArrowRightIcon id='icon' /> whighbridge </h5>
                <div className="info-container">
                    <div>Last Updated: {lastUpdated}</div>
                    <div>UTC: {utcDateTime}</div>

                </div>
                <LoopIcon className="loop-icon" />

                <button className="add-ticket-button" onClick={onTicketClick}>+ Create Ticket</button>
                <div className="user">
                    <div className='usernames'>

                        <div style={{ fontSize: "14px", whiteSpace: "nowrap", color: "white" }}>
                            Suman raju midde</div>

                        <div style={{ fontSize: "10px", textAlign: "right", color: "white" }}>
                            Administrator </div>

                    </div>
                    <div className="profile">SM</div>
                </div>
            </div>


        </div>

    );
}

export default Navbar;
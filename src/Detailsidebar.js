import React, { useState } from 'react';
// import traindata from "./traindata.json";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './App.css';

const DetailsSidebar = () => {
    const [ifOpen, setIfOpen] = useState(false);

    const toggleSidebar = () => {
        setIfOpen(!ifOpen);
    };

    return (
        <div className={`details-sidebar ${ifOpen ? 'open' : ''}`}>
            <KeyboardArrowRightIcon
                className="dropdown-icon"
                style={{ fontSize: '15px' }}
                onClick={toggleSidebar}
            />

            {!ifOpen ? (
                <div>
                    <div className="details-item">
                        <div className="details-count">10</div>
                        <div>Alarms</div>
                    </div>

                    <div className="details-item">
                        <div className="details-count">45</div>
                        <div>Alerts</div>
                    </div>

                    <div className="details-item">
                        <div className="details-count">33</div>
                        <div>Events</div>
                    </div>
                </div>
            ) : (
                <>
                    <div style={{ display: "flex", gap: "5px" }}>
                        <div>Alarms</div>
                        <div>Alerts</div>
                        <div>Events</div>
                    </div>

                    {/* {traindata.data.map((train) => (
                        <div key={train.number} style={{ marginBottom: '10px' }}>
                            <div>{train['unit number']}</div>
                            <div>{train.date}</div>
                        </div>
                    ))} */}
                </>
            )}
        </div>
    );
};

export default DetailsSidebar;

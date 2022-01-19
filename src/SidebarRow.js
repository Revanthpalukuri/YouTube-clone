import React from 'react'

import './Sidebar.css';
function SidebarRow(props) {
    return (
        <div className={`sidebar__row ${props.selected && "selected"}`}>
            <props.Icon className="sidebarRow__icon" />
            <h2 className="sidebarRow__title">{props.Title}</h2>
        </div>
    )
}

export default SidebarRow;

import React,{useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@material-ui/core/Avatar';
import './header.css';
import {Link} from "react-router-dom"
function Header() {
    const [inputSearch,setinputSearch]=useState(""); 
    return (
        <div className='header'>
            <div className="header__left">
                <MenuIcon />
                <Link to={"/"}>
                <img className='header__logo' src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"  alt='no'/>
                </Link>
            </div>
            <div className="header__middle">
                <input type="text" placeholder='search' value={inputSearch} onChange={(e) => setinputSearch(e.target.value)}/>
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon  className='header__inputButton'/>
                </Link>
            </div>
            <div className="header__end">
                <VideoCallIcon className='header__icon' />
                <AppsIcon className='header__icon' />
                <NotificationsIcon className='header__icon' />
                <Avatar src='https://media-exp1.licdn.com/dms/image/C5603AQHIYTJVZJwVxQ/profile-displayphoto-shrink_800_800/0/1627556214769?e=1648080000&v=beta&t=z0ymOpOxTQwNMZFcjclwk4NtxMQ11hXmTR9Bf2MJkGw' alt='no_image' />
            </div>
        </div>
    )
}

export default Header;

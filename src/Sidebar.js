import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow selected Title="Home" Icon={HomeIcon} />
            <SidebarRow Title="Trending" Icon={WhatshotIcon} />
            <SidebarRow Title="Subscriptions" Icon={SubscriptionsIcon} />
            <hr />
            <SidebarRow Title="Library" Icon={VideoLibraryIcon} />
            <SidebarRow Title="History" Icon={HistoryIcon} />
            <SidebarRow Title="Your Videos" Icon={OndemandVideoIcon} />
            <SidebarRow Title="Watch Later" Icon={WatchLaterIcon} />
            <SidebarRow Title="Liked videos" Icon={ThumbUpAltOutlinedIcon} />
            <SidebarRow Title="Show More" Icon={ExpandMoreOutlinedIcon} />
        </div>
    )
}

export default Sidebar;

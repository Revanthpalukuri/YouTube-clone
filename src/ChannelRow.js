import React from 'react'
import './ChannelRow.css'
import Avatar from '@material-ui/core/Avatar';
import VerifiedIcon from '@mui/icons-material/Verified';
function ChannelRow({image,channel,subs,noOfVideos,description,verified}) {
    return (
        <div>
            <div className='channelRow'>
                <Avatar className='channelRow__logo' src={image} alt='no_img'/>
                <div className="channelRow__text">
                    <h4>{channel} {verified && <VerifiedIcon />}</h4>
                    <p>{subs} subscribers . {noOfVideos} videos</p>
                    <p>{description}</p>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default ChannelRow

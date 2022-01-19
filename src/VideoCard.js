import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './RecommendedVideos.css'
function VideoCard(props) {
    return (
        <div className='videoCard'>
            <img className='videoCard__thumbnail' src={props.image} alt="No_image" />
            <div className="videoCard__info">
                <Avatar className='videCard__avatar' src={props.channelImage} alt='no_image'/>
                <div className="videoCard__text">
                    <h4>{props.title}</h4>
                    <p>{props.channel}</p>
                    <p>{props.views} . {props.timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard

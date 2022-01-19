import React from 'react';
import "./VideoRow.css"
function VideoRow({views,subs,description,timestamp,channel,title,image}) {
  return (
  <div>
      <div className="videoRow">
            <img src={image} alt="no_img" />
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className='videoRow__headline'>
                    {channel} * <span className='videoRow__totalsubs'> <span className='videoRow__sub'>{subs} </span>subscribers </span> {views} views * {timestamp}
                </p>
                <div className="videoRow__description"><p>{description}</p></div>
            </div>
      </div>
  </div>
  );
}

export default VideoRow;

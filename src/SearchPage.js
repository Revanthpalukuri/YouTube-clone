import React from 'react'
import './SearchPage.css'
import TuneIcon from '@mui/icons-material/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
function SearchPage() {
    return (
        <div className='searchPage'>
            <div className="searchPage__filter">
                <TuneIcon />
                <h2>Filter</h2>
            </div>
            <hr />
            <ChannelRow 
                image="https://media-exp1.licdn.com/dms/image/C5603AQHIYTJVZJwVxQ/profile-displayphoto-shrink_800_800/0/1627556214769?e=1648080000&v=beta&t=z0ymOpOxTQwNMZFcjclwk4NtxMQ11hXmTR9Bf2MJkGw"
                channel="Revanth Palukuri"
                verified
                subs="600k"
                noOfVideos={380}
                description="If u dont sacrifice what you want then what u want becomes sacrifice"
            />
            <VideoRow 
                views="288K"
                subs="598k"
                description="Do you want a FREE one hour training... check this out"
                timestamp="2 months ago"
                channel="Revanth Palukuri"
                title="5 Uses for cloud functions"
                image="https://i.ytimg.com/vi/77XmRDtOL7c/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDIiXYbD6TYhgtfWFv2qvFQ8WgQLA"
            />
            <VideoRow 
                views="1.3M"
                subs="599k"
                description="If u dont sacrifice what you want then what u want becomes sacrifice"
                timestamp="3 weeks ago"
                channel="Revanth Palukuri"
                title="How Elon Musk thinks ?"
                image="https://i.ytimg.com/vi/ZMsDib3wfuY/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9Wei5mn2iCrSIFFQCRfarGe6gBA"
            />
            <VideoRow 
                views="232K"
                subs="599k"
                description="How to do massive workouts"
                timestamp="6days ago"
                channel="Revanth Palukuri"
                title="Whether we like it or not..."
                image="https://i.ytimg.com/vi/5JGlr-FVKsk/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDpqEdKba2dusPvXa6kUZBc914M4Q"
            />
            <VideoRow 
                views="6.3M"
                subs="600k"
                description="A metaverse is a network of 3D virtual worlds focused on social connection"
                timestamp="2 months ago"
                channel="Revanth Palukuri"
                title="Metaverse: The Most Evil Business in the World"
                image="https://i.ytimg.com/vi/qjy4miqppRs/maxresdefault.jpg"
            />
            <VideoRow 
                views="1.4M"
                subs="600k"
                description="Try these tricks in your home and see your mom's reaction"
                timestamp="5 days ago"
                channel="Revanth Palukuri"
                title="Impossible ping-pong tricks"
                image="https://i.ytimg.com/vi/0ADQauuOJto/maxresdefault.jpg"
            />
        </div>
    )
}

export default SearchPage

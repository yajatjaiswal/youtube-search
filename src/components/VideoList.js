import React from 'react'

const StringWithColons = string => {//PT02S
    let hours, minutes, seconds;
    if (string.includes("H")) {
        hours = string.slice(2, string.indexOf("H"));
    } else {
        hours = false;
    }
    if (string.includes("S")) {
        // checks if number is one-digit and inserts 0 in front of it
        if (isNaN(parseInt(string.charAt(string.indexOf("S") - 2)))) {
            seconds = "0" + string.charAt(string.indexOf("S") - 1)
        } else {
            seconds = string.slice(-3, -1)
        }
    } else {
        seconds = "00"
    }
    // determines how minutes are displayed, based on existence of hours and minutes
    if (hours) {
        if (string.includes("M")) {
            if (string.indexOf("M") - string.indexOf("H") === 3) {
                minutes = string.slice(string.indexOf("H") + 1, string.indexOf("M"))
            } else {
                minutes = "0" + string.charAt(string.indexOf("M") - 1)
            }
        } else {
            minutes = "00"
        }
    } else {
        if (string.includes("M")) {
            minutes = string.slice(2, (string.indexOf("M")))
        } else {
            minutes = "0"
        }
    }

    return `${hours ? hours + ":" : ""}${minutes}:${seconds}`
}

const ViewWtihAlpha = string => {
    let b, m, k;

    if (string.length >= 10) {
        b = Math.round(parseInt(string) / 1000000000 * 10) / 10 + "B";
    }
    else if (string.length >= 7) {
        m = Math.round(parseInt(string) / 1000000 * 10) / 10 + "M"
    }
    else {
        k = Math.round(parseInt(string) / 1000 * 10) / 10 + "K"
    }
    return `${b ? b : m ? m : k}`
}

function VideoList({vid,channelId}) {
    return (
        <>
            {vid.map((video, index) =>
            (
                
                    <div className='image-container' key={index} style={{width:"auto",margin:"auto"}}>
                        <div className='card' style={{ width: "18rem" }}>

                            <img className='card-img-top' src={video.snippet.thumbnails.medium.url} alt='img'></img>

                            <div className='card-body'>
                                <p className='card-text' style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", }}>{video.snippet.title}</p>
                                <p>By-{video.snippet.channelTitle}</p>
                                <div className='d-flex justify-content-between' >
                                    <p>{StringWithColons(video.contentDetails.duration)}</p>
                                    <p>{ViewWtihAlpha(video.statistics.viewCount)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
            )

            )}
            {channelId.map((Chvideo, index) =>
            (
                
                    <div className='image-container ' key={index}>
                        <div className='card' style={{ width: "18rem" }}>

                            <img className='card-img-top' src={Chvideo.snippet.thumbnails.medium.url} alt='img'></img>

                            <div className='card-body'>
                                <p className='card-text' style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", }}>{Chvideo.snippet.title}</p>
                                <p>By-{Chvideo.snippet.channelTitle}</p>
                            </div>
                        </div>
                    </div>
            )

            )}
        </>
    )
}

export default VideoList
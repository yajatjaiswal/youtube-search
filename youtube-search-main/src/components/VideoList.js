

import React, { useEffect } from "react";

import { useState } from "react";
import Captions from "./Captions";
const StringWithColons = (string) => {
  //PT02S
  let hours, minutes, seconds;
  if (string.includes("H")) {
    hours = string.slice(2, string.indexOf("H"));
  } else {
    hours = false;
  }
  if (string.includes("S")) {
    // checks if number is one-digit and inserts 0 in front of it
    if (isNaN(parseInt(string.charAt(string.indexOf("S") - 2)))) {
      seconds = "0" + string.charAt(string.indexOf("S") - 1);
    } else {
      seconds = string.slice(-3, -1);
    }
  } else {
    seconds = "00";
  }
  // determines how minutes are displayed, based on existence of hours and minutes
  if (hours) {
    if (string.includes("M")) {
      if (string.indexOf("M") - string.indexOf("H") === 3) {
        minutes = string.slice(string.indexOf("H") + 1, string.indexOf("M"));
      } else {
        minutes = "0" + string.charAt(string.indexOf("M") - 1);
      }
    } else {
      minutes = "00";
    }
  } else {
    if (string.includes("M")) {
      minutes = string.slice(2, string.indexOf("M"));
    } else {
      minutes = "0";
    }
  }

  return `${hours ? hours + ":" : ""}${minutes}:${seconds}`;
};

const ViewWtihAlpha = (string) => {
  let b, m, k;

  if (string.length >= 10) {
    b = Math.round((parseInt(string) / 1000000000) * 10) / 10 + "B";
  } else if (string.length >= 7) {
    m = Math.round((parseInt(string) / 1000000) * 10) / 10 + "M";
  } else {
    k = Math.round((parseInt(string) / 1000) * 10) / 10 + "K";
  }
  return `${b ? b : m ? m : k}`;
};

function VideoList({ vid, channelId }) {
  const [data, setData] = useState("");


  useEffect(()=>{
setData("")
  },[])
  return (
    <>
      <div className="mx-auto text-center d-flex justify-content-center ">
        <div className="d-flex input-group w-50 mt-5 mb-5  my-auto flex-nowrap justify-content-center">
          <input
            className="form-control rounded"
            style={{ minWidth: "200px" }}
            value={data}
            onChange={(event) => setData(event.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                // console.log('do validate');
              }
            }}
            placeholder="Type to search..."
            autoFocus
          ></input>

          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {}}
            >
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>

      {vid && (
        <>
          {/* -------------------- Title For Content--------------  */}
          {/* {vid.length > 0 && (
            <div style={{ margin: "5vh auto", textAlign: "center" }}>
              video By :{vid[0].snippet.channelTitle}
            </div>
          )} */}
          {vid.map((video, index) => (
            <div
              className="image-container "
              key={index}
              style={{ width: "auto", margin: "auto" }}
            >
              <div className="card cardShadow" style={{ width: "30rem" }}>
                <img
                  className="card-img-top"
                  src={video.snippet.thumbnails.maxres.url}
                  alt="img"
                ></img>

                <div className="card-body">
                  <p
                    className="card-text"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {video.snippet.title}
                  </p>
                  {/* // Single Video on Screen So we are Displaying Channel Name On top As Title hence no need to display it here  */}
                  {/* <p>By-{video.snippet.channelTitle}</p> */}

                  <div className="d-flex justify-content-between">
                    <p>{StringWithColons(video.contentDetails.duration)}</p>
                    <p>{ViewWtihAlpha(video.statistics.viewCount)}</p>
                  </div>
                </div>
              </div>
              <br/>
              {/* cap data */}
              <div
               className="card cardShadow"
               style={{display:"flex", flexDirection:"row", width: "60rem" }}
               >
                <img
                  className="card-img-top"
                  style={{width:"10rem"}}
                  src={video.snippet.thumbnails.maxres.url}
                  alt="img"
                ></img>

                <div className="card-body">
                  <p
                    className="card-text"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {video.snippet.title}
                  </p>
                  {/* // Single Video on Screen So we are Displaying Channel Name On top As Title hence no need to display it here  */}
                  {/* <p>By-{video.snippet.channelTitle}</p> */}

                  <div className="d-flex justify-content-between">
                    <p>{StringWithColons(video.contentDetails.duration)}</p>
                    <p>{ViewWtihAlpha(video.statistics.viewCount)}</p>
                  </div>
                </div>
              </div>

              
                  <Captions id={video.id} data={data} />
            </div>
          ))}
        </>
      )}

      {channelId && (
        <>
          {channelId.length > 0 && (
            <>
              <div className="mx-auto text-center display-6">
                {" "}
                About {channelId.length} results
              </div>
            </>
          )}
          {channelId.map((Chvideo, index) => (
            <div
              id={`${Chvideo.id.videoId}card`}
              className="image-container "
              key={index}
              // here Setting Width Auto for width adjustment on Shrink and Margin auto for centering Div
              style={{ width: "auto", margin: "auto", height: "auto" }}
            >
              <p
                className="removeButton"
                onClick={() => {
                  document.getElementById(
                    `${Chvideo.id.videoId}card`
                  ).style.display = "none";
                  console.log(`${Chvideo.id.videoId}card`);
                }}
              >
                <i className="fa fa-minus"></i>
              </p>

              <div
                className="card cardShadow"
                //here Reducing size 18rem to 15rem so that size can be According to 5 card and Giving some margin on top and bottom
                style={{ width: "15rem", margin: "2rem 0rem" }}
              >
                <img
                  className="card-img-top"
                  src={Chvideo.snippet.thumbnails.medium.url}
                  alt="img"
                ></img>

                <div className="card-body">
                  <p
                    className="card-text"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {Chvideo.snippet.title}
                  </p>
                  <p>By-{Chvideo.snippet.channelTitle}</p>

                  <Captions id={Chvideo.id.videoId} data={data} />
                  <div className="d-flex justify-content-between">
                    {/* <p>{StringWithColons(Chvideo.contentDetails.duration)}</p> */}
                    {/* <p>{ViewWtihAlpha(Chvideo.statistics.viewCount)}</p> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default VideoList;
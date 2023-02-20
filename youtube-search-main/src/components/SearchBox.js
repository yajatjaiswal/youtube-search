import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import Captions from "./Captions";

function SearchBox(props) {
  const [data, setData] = useState("");
  const [token, setToken] = useState("");

  const GetId = (str) => {
    // console.log((str), 'type-------------------------------')
    if (str.includes("watch")) {
      str = str.replace("https://www.youtube.com/watch?v=", "");
      // setToken(1);
      if (str.length > 11) {
        // console.log('dddfsfsf')
        str = str.substring(0, 11);
      }
    } else if (str.includes("shorts")) {
      str = str.replace("https://www.youtube.com/shorts/", "");
      // setToken(1);
    } else if (str.includes("channel")) {
      // str = str.replace("https://www.youtube.com/channel/", "");
      // setToken(2);
      alert("Please Select Youtube Channel");
    }else if (str.includes("@"))
    {
     alert("Please Select Youtube Channel")
    }
    // else
    return str;
  };

  const GetChannel = (str) => {
    if (str.includes("watch")) {
      // str = str.replace("https://www.youtube.com/watch?v=", "");
      alert("Please Select Youtube video URL");
      // setToken(1);
      // if (str.length > 11) {
      //   // console.log('dddfsfsf')
      //   str = str.substring(0, 11);
      // }
    } else if (str.includes("shorts")) {
      // str = str.replace("https://www.youtube.com/shorts/", "");
      // setToken(1);
      alert("Please Select Youtube video URL");
      return;
    } else if (str.includes("channel")) {
      str = str.replace("https://www.youtube.com/channel/", "");
      // setToken(2);
    } else if (str.includes("@"))
    {
      str=str.replace("https://www.youtube.com/@","")
    }

    return str;
  };

  return (
    <div className="">
      {/* <div className="w-50 mt-5 mb-5 mx-auto position-relative d-flex ">
        <button
          type="button"
          className="btn btn-primary mx-4"
          onClick={(e) => {
            e.target.style.background = "red";
            setToken(1);
            e.target.style.background = "black";
          }}
        >
          Youtube URL
        </button>

        <button
          type="button"
          className="btn btn-primary"
          onClick={(e) => {
            e.target.style.background = "red";
            setToken(2);
          }}
        >
          Youtube Channel
        </button>
      </div> */}
      <div className="container-fluid align-items-center">
        <div className="d-flex align-items-center justify-content-center">
          <h3 className="mb-0">Tool to search within</h3>
          <h1 className="display-6 m-2"> Video </h1>
          <h3 className="mb-0">in 2 Easy Steps:</h3>
        </div>
        <div className=" d-flex align-items-center justify-content-center">
          <span className="badge bg-secondary text-center rounded-circle p-3">
            1
          </span>
          <h1 className="display-6 m-2">------</h1>
          <span className="badge bg-secondary text-center rounded-circle p-3">
            2
          </span>
        </div>
      </div>
      <Captions />

      <div className="d-flex flex-wrap align-items-center justify-content-center">
        <div className="dropdown d-flex   ">
          <button
            className="btn btn-secondary dropdown-toggle bg-light text-black shadow p-2 m-3 bg-white rounded border-0"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Search Type
          </button>
          <div
            className="dropdown-menu shadow p-3  bg-white rounded border-0"
            aria-labelledby="dropdownMenuButton"
          >
            <p
              className="dropdown-item"
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                setToken(1);
                document.getElementById("dropdownMenuButton").innerHTML =
                  "Youtube Video URL";
                document.getElementById("dot-circle1").style.color =
                  "rgb(0, 255, 187)";
                document.getElementById("dot-circle2").style.color = "black";
              }}
            >
              <i
                id="dot-circle1"
                className="fa fa-dot-circle-o mr-2"
                aria-hidden="true"
              ></i>
              Youtube Video URL
            </p>
            <p
              className="dropdown-item"
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                setToken(2);
                document.getElementById("dropdownMenuButton").innerHTML =
                  "Youtube Channel";
                document.getElementById("dot-circle2").style.color =
                  "rgb(0, 255, 187)";
                document.getElementById("dot-circle1").style.color = "black";
              }}
            >
              <i
                id="dot-circle2"
                className="fa fa-dot-circle-o mr-2"
                aria-hidden="true"
              ></i>
              Youtube Channel
            </p>
          </div>
        </div>
        <div className=" d-flex input-group w-50 mt-5 mb-5  my-auto flex-nowrap justify-content-center">
          <input
            className="form-control rounded"
            style={{ minWidth: "200px" }}

            value={data}
            onChange={(event) => setData(event.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (token === 1) {
                  props.func(GetId(data));
                  // document.getElementById("Video").style.background = "black";
                  // document.getElementById("channel").style.background = "#0d6efd";
                } else {

                  if (data.includes("@")) {
                    props.func3(GetChannel(data))
                  }
                  else {

                    props.func2(GetId(data));
                  }
                  // document.getElementById("channel").style.background = "black";
                  // document.getElementById("Video").style.background = "#0d6efd";
                }
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
              onClick={() => {
                if (token === 1) {
                  props.func(GetId(data));
                } else {
                  if (data.includes("@")) {
                    props.func3(GetChannel(data))
                  }
                  else{

                    props.func2(GetChannel(data));
                  }
                }
              }}
            >
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
// https://youtube.googleapis.com/youtube/v3/captions?part=snippet&videoId=aDG1T0kJnd4&key=AIzaSyC6Q6QFsLZWlEJfmOUYgEXbh19m9NVIjpw

// https://youtube.googleapis.com/youtube/v3/captions/aDG1T0kJnd4?key=AIzaSyC6Q6QFsLZWlEJfmOUYgEXbh19m9NVIjpw

export default SearchBox;

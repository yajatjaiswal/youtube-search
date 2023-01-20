import React, { useState } from 'react'
import 'font-awesome/css/font-awesome.min.css';


function SearchBox(props) {

    const [data, setData] = useState('')
    const [token, setToken] = useState("")

    const GetId = str => {
        // console.log((str), 'type-------------------------------')
        if (str.includes("watch")) {
            str = str.replace("https://www.youtube.com/watch?v=", "")
            // setToken(1);
            if (str.length > 11) {
                // console.log('dddfsfsf')
                str = str.substring(0, 11)
            }
        }
        else if (str.includes("shorts")) {
            str = str.replace("https://www.youtube.com/shorts/", "")
            // setToken(1);
        }
        // else
        return str
    }

    const GetChannel = str => {
        if (str.includes("channel")) {
            str = str.replace("https://www.youtube.com/channel/", "")
            // setToken(2);
        }
        return str;
    }

    return (
        <div className=''>
            {/* <div className='w-50 mt-5 mb-5 mx-auto position-relative d-flex '>

                <button type="button" className='btn btn-primary mx-4' onClick={(e) => {
                    e.target.style.background = 'red'
                    setToken(1)
                    e.target.style.background = 'black'

                }

                }>
                    Youtube URL
                </button>

                <button type="button" className='btn btn-primary' onClick={(e) => {
                    e.target.style.background = 'red'
                    setToken(2)
                }}>
                    Youtube Channel
                </button>

            </div> */}
            <div className="dropdown d-flex m-auto w-auto mb-0" >
                <button className="btn btn-secondary dropdown-toggle bg-light text-black shadow p-3 mb-5 bg-white rounded border-0"  type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    dropdown    
                </button>
                <div className="dropdown-menu shadow p-3 mb-5 bg-white rounded border-0" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#" onClick={(e) => {
                        setToken(1)                       
                        document.getElementById("dropdownMenuButton").innerHTML = "Youtube URL";
                        document.getElementById("dot-circle1").style.color="rgb(0, 255, 187)"
                        document.getElementById("dot-circle2").style.color="black"
                    }}>
                        <i id="dot-circle1"className="fa fa-dot-circle-o" aria-hidden="true"></i>
                         Youtube URL</a>
                    <a  className="dropdown-item" href="#"  onClick={(e) => {
                        setToken(2)                       
                        document.getElementById("dropdownMenuButton").innerHTML = "Youtube Channel";
                        document.getElementById("dot-circle2").style.color="rgb(0, 255, 187)"
                        document.getElementById("dot-circle1").style.color="black"
                    }}>
                        <i id="dot-circle2" className="fa fa-dot-circle-o mr-2" aria-hidden="true"></i>Youtube Channel</a>
                </div>
            </div>

            <div className='input-group w-50 mt-5 mb-5 mx-auto my-auto'>


                <input
                    className='form-control'
                    value={data}
                    onChange={(event) => setData(event.target.value)}
                    // onChange={(event) => props.setSearchValue(GetId(event.target.value))}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            if (token === 1) {
                                props.func(GetId(data))
                                // setToken(1)
                            }
                            else {
                                   props.func2(GetChannel(data))
                                // setToken(2)

                            }
                            // console.log('do validate');
                        }
                    }}
                    placeholder='Type to search........'
                    autoFocus
                ></input>

                <div className='input-group-append'>

                    <button type="button" className='btn btn-primary' onClick={() => {
                        if (token === 1) {

                            props.func(GetId(data))
                            // setToken(1)
                        }
                        else {
                            props.func2(GetChannel(data))
                            // setToken(2)

                        }

                    }}>
                        <i className="fa fa-search" ></i>

                    </button>
                </div>
            </div>
        </div>
    )
}
// https://youtube.googleapis.com/youtube/v3/captions?part=snippet&videoId=aDG1T0kJnd4&key=AIzaSyC6Q6QFsLZWlEJfmOUYgEXbh19m9NVIjpw

// https://youtube.googleapis.com/youtube/v3/captions/aDG1T0kJnd4?key=AIzaSyC6Q6QFsLZWlEJfmOUYgEXbh19m9NVIjpw

export default SearchBox
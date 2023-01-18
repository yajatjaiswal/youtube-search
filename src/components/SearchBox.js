import React, { useState } from 'react'
import 'font-awesome/css/font-awesome.min.css';


function SearchBox(props) {

const [data, setData] = useState('https://www.youtube.com/channel/UCFFbwnve3yF62-tVXkTyHqg')
    const [token, setToken] = useState("2")

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

    const GetChannel= str=>{
        if (str.includes("channel")) {
            str = str.replace("https://www.youtube.com/channel/", "")
            // setToken(2);
        }
        return str;
    }

    return (
        <div className=''>
            <div className='w-50 mt-5 mb-5 mx-auto position-relative d-flex '>

            <button type="button" className='btn btn-primary mx-4' onClick={(e)=>{
                e.target.style.background='red'
                setToken(1)
                e.target.style.background='black'
                
            }
                
                }>
                Youtube URL
            </button>
            
            <button type="button" className='btn btn-primary' onClick={(e)=>{
                e.target.style.background='red'
                setToken(2)}}>
                Youtube Channel
            </button>

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
                            
                        }
                        else {
                            props.func2(GetChannel(data))
                            
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
                    }
                    else {
                        props.func2(GetChannel(data))
                        
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
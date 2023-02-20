import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Captions(props) {
  const [data, setData] = useState("");

  function checkParam(text, check) {
    if (text.includes(check)) {
      return true;
    }
  }



  useEffect(()=>{
    async function caption() {
      // var id = "K09xQuFdDuA"
      var id = props.id;
      const response = await fetch(
        `https://server-ten-iota.vercel.app/caption/?id=${id}`,
        {
          // mode: "no-cors",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        }
      );
      const captionData = await response.json();
      // var captionData = await getSubtitles({
      //   videoID: "aDG1T0kJnd4", // youtube video id
      //   lang: "en", // default: `en`
      // });
      if (captionData.data) {
        console.log(captionData.data);
        setData(captionData.data);
      } else {
        console.log(captionData.Error);
      }
    }
    caption();
  },[props.id])
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
         flexDirection: "column" ,
          width:"-webkit-fill-available"
        }}
    >

      {data &&(
        <>
          {/* <div
            style={{
              backgroundL:"blue",
              height:"10px",
              display:"flex",
              margin:"4px 0",
            }}
          >
            {data.map((data,i)=>(
              <>
              <div
                key={i}
                style={{
                background:checkParam(data.text,props.data)&&"yellow",
                height:"auto",
                width:"2px",
              }}
              >
                {checkParam(data.text,props.data)&&(
                  <p
                    style={{
                      background:"blue",
                      height:"10px",
                      display:"flex",
                      alignItems:"center",
                    }}
                  >
                    <i className="fa fa-circle"></i>
                  </p>
                )}
              </div>
              </>
            ))}
          </div> */}
       
      
        <div
          style={{
            height: "200px",
            // overflowY: "hidden",
            width:"60rem",
            overflowX:"scroll",
            display:"flex",
            
            // background: "grey",
          }}
        >
          {/* <div style={{backgroundColor:"blue", height:"10px", display:"flex", margin:"4px 0"}}>
          {data.map((data, i) => (
            <div key={i}
             style= {{background : checkParam(data.text ,props.data) && "yellow" , height:"auto", width:"2px"
            }}
              >x`
            </div>
          ))}
          </div> */}
          
          {data.map((data, i) => (
            <div key={i}>
              {checkParam(data.text ,props.data) && 
              <div  style={{
                width:"200px",
                margin:"10px 0",
              }} >
                  <p style={{
                    background:"red",
                    height:"5px",
                    display:"flex",
                    alignItems:"center",
                    
                  }}>
                <i className="fa fa-circle" style={{color:"red"}}></i>
              </p>
                <div
                style={{
                  width:"200px",
                  borderRight:"1px solid grey",
                  margin:"10px 0",
                  padding:"10px",
                }}>
                {data.start}:<p>{data.text}</p>
                  </div>
              </div>}

              
            </div>
          ))}
          
        </div>
        </>
      )}
    </div>
  );
}

export default Captions;


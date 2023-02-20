import React from 'react'

function rough() {
    return (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ flexDirection: "column", width: "-webkit-fill-available" }}
        >
          {/* <div>
            <button onClick={caption}>getCaption</button>
          </div> */}
          {data && (
            <>
              <div
                style={{
                  backgroundColor: "blue",
                  height: "10px",
                  display: "flex",
                  margin: "4px 0",
                }}
              >
                {data.map((data, i) => (
                  <>
                    <div
                      key={i}
                      style={{
                        background: checkParam(data.text, props.data) && "yellow",
                        height: "auto",
                        width: "2px",
                      }}
                    >
                      {checkParam(data.text, props.data) && (
                        <p
                          style={{
                            background: "blue",
                            height: "10px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <i className="fa fa-circle"></i>
                        </p>
                      )}
                    </div>
                  </>
                ))}
              </div>
              <div
                style={{
                  height: "200px",
                  overflow: "scroll",
                  width: "60rem",
                  overflowX: "scroll",
                  display: "flex",
                  // background: "grey",
                }}
              >
                {data.map((data, i) => (
                  <div key={i}>
                    {checkParam(data.text, props.data) && (
                      <div
                        style={{
                          width: "200px",
                          borderRight: "1px solid grey",
                          margin: "10px 0",
                        }}
                      >
                        <p
                          style={{
                            background: "blue",
                            height: "10px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <i className="fa fa-circle"></i>
                        </p>
                        <div
                          style={{
                            width: "200px",
                            margin: "10px 0",
                            padding: "10px",
                          }}
                        >
                          {data.start}:<p>{data.text}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      );
}

export default rough
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [times, setTimes] = useState(0);
  const [start, setStart] = useState(false);
  const [stops, setStops] = useState([]);

  let minutes = ("0" + Math.floor(times / 60)).slice(-2);
  let seconds = ("0" + Math.floor((times / 1) % 60)).slice(-2);
  useEffect(() => {
    let timer;
    if (start === true) {
      timer = setInterval(() => {
        setTimes((t) => t + 1);
      }, 100);
    } else if (start === false) {
      clearInterval(timer);
      console.log("Ndaba");
    }
    return () => clearInterval(timer);
  }, [start]);

  const handleChange = (e) => {
    if (e.target.value === "yes") {
      console.log("handlechange", start);
      setStart(true);
    } else {
      setStart(false);
      console.log("handlechange1", start);
      setStops([...stops, `${minutes} : ${seconds}`]);
      console.log("stops", stops);
    }
  };

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="screen">
          <h4>
            <span>{minutes}</span>:<span>{seconds}</span>
          </h4>
        </div>

        <div className="row">
          <div className="col-xs-4">
            <button
              className="btn btn-outline-light"
              value="yes"
              onClick={handleChange}
            >
              <i class="bi bi-google-play">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-google-play"
                  viewBox="0 0 16 16"
                >
                  <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586Zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295ZM1 13.396V2.603L6.846 8 1 13.396ZM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27Z" />
                </svg>
              </i>
            </button>
          </div>

          <div className="col-xs-4">
            <button
              className="btn btn-outline-light"
              value="no"
              onClick={handleChange}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pause-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

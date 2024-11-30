import React, { useRef } from "react";



function App() {


const section1 = useRef();
const section2 = useRef();

const scrollHandler = (elmRef) => {
   window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth"});
}


    return (
        <div>

        <header>
            <ul>
                <li onClick={() => scrollHandler(section1)}>Секция1</li>
                <li onClick={() => scrollHandler(section2)}>Секция2</li>
            </ul>
        </header>

          <div
           ref={section1}
          style={{
            width: "100%",
            height: "100vh",
            background: "blue"
          }}>Секция 1</div>

          <div
          ref={section2}
          style={{
            width: "100%",
            height: "100vh",
            background: "red"
          }}>Секция 2</div>

        </div>
    );
}

export default App;

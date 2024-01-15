import React from "react";
import Navbar from "./Componenets/Navbar";
import About  from "./Componenets/About";
import Section from "./Componenets/Section";

import sectionData from "./Componenets/data/sectionData";

const App = ()=> {


    return(
        <div>
            <Navbar/>
            <About/>
            {
                sectionData.map((item,index)=>(
                    <Section key={index}
                        title={item.title}
                        description={item.description}
                    />
                ))
            }
        </div>
    )
}

export default App;
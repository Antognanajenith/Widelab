import {Routes ,Route,Link} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Layout from "./Components/Layout";
import News from "./Components/News";
import Exchanges from "./Components/Exchanges";


function App() {
  return (
    <div className=" font-bold text-2xl ">
      <div className="flex md:flex-row flex-col ">
        <div className="flex basis-1/5">
          <Navbar><div>hello</div></Navbar>
        </div>
        <div className="flex basis-4/5 bg-lightgreyer h-full">
          <Layout/>
        </div>
      </div>    
    </div>
  );
}

export default App;

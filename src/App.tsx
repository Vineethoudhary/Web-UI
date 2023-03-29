import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef } from "react";

import "./App.css";


function App() {
  const output = useRef(null);


  const get_all_servers = async (event : React.MouseEvent) => {
    event.preventDefault();
    const servers = await fetch("http://localhost:8080/servers");
    if(servers.status == 404) return;
    output.current.innerHTML = JSON.stringify(await servers.json());
  };


  return <div className="container-fluid wrapper">
    <form className="form-horizontal" noValidate> 
    <fieldset>

    <legend>Get server</legend>

    <div className="form-group">
      <label className="col-md-4 control-label" htmlFor="Id">Id</label>  
      <div className="col-md-4">
      <input id="Id" name="Id" type="text" placeholder="Enter if of the server" className="form-control input-md" required />
      <span className="help-block">Enter if of the server</span>  
      </div>
    </div>
    
    <div className="form-group">
      <label className="col-md-4 control-label" htmlFor="singlebutton"></label>
      <div className="col-md-4">
        <button onClick={get_all_servers} id="singlebutton" name="singlebutton" className="btn btn-primary">submit</button>
      </div>
    </div>

    </fieldset>
    </form>

    <code ref={output}>

    </code>
  </div>
}

export default App

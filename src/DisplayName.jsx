import React, { useState } from "react";

function DisplayName() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  console.log(name);
  console.log(lastName)
return (
  
    <form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
    <label>
      First Name:<input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
    </label>

    <label>
      Last Name:<input type="text" placeholder="Enter your last name" onChange={(e)=>setLastName(e.target.value)} />
    </label>

    <button style={{width:"100px"}} >Submit</button>
  
    </form>
    
    
  );
}

export default DisplayName;
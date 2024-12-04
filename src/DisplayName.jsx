import React, { useState } from "react";

function DisplayName() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showName, setShowName] = useState(false);
  //console.log(name);
  //console.log(lastName)


  const handleSubmit = (e) => {
    e.preventDefault();
    !name || !lastName ? alert("Please enter your name and last name") : setShowName(true);
    
    
  }


return (
  
  <form style={{ display: "flex", flexDirection: "column", gap: "10px" }} >
    <h1>Full Name Display</h1>
    <label>
      First Name:<input type="text" defaultValue={""} value={name} onChange={(e) => setName(e.target.value)} />
    </label>

    <label>
      Last Name:<input type="text" defaultValue={""} value={lastName}  onChange={(e)=>setLastName(e.target.value)} />
    </label>

    <button type="submit" style={{ width: "100px" }} onClick={handleSubmit}>Submit</button>
    
    {showName ? <p>Full Name: {name} {lastName}</p> : null}
  
    </form>
    
    
  );
}

export default DisplayName;
import React, { useState } from "react";

function DisplayName() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showName, setShowName] = useState(false);
  //console.log(name);
  //console.log(lastName)

 const handleChange = (e) => {
    const reg=/^([^0-9$%]*)$/;
    if (reg.test(e.target.value)) {
      setName(e.target.value);
   }
   

   
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name && !lastName) return alert("Please enter your name and last name");
    else if (!name) return alert("Please enter your name");
    else if (!lastName) return alert("Please enter your last name");
    else {setShowName(true);}
    
    
    
  }


return (
  
  <form style={{ display: "flex", flexDirection: "column", gap: "10px" }} onSubmit={handleSubmit}>
    <h1>Full Name Display</h1>
    <label>
      First Name:<input type="text" defaultValue={""} value={name} onChange={(e) => handleChange(e)} />
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
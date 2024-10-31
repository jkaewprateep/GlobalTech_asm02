import React, { useEffect, useState } from 'react';


// function HelloWorld(props){
//   const [records, setRecords] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const readDataRecords = async () => {
//   const url = "http://localhost:3060/api/data";


//   try {
//       const response = await fetch(url);

//       if (!response.ok) {
//           console.log("Connectivity problem.")
//           throw new Error('Connectivity problem.');                
//       }

//       const data = await response.json();
//       setRecords(data);

//       return data;
//   }
//   catch (error) {
//       setError(error.message);

//       return null;
//   } finally {
//       setLoading(false);
//       return null;
//   }
// };

function Header( props ) {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const readDataRecords = async () => {
    const url = "http://localhost:3060/api/data";
    try {
        const response = await fetch(url);

        if (!response.ok) {
            console.log("Connectivity problem.")
            throw new Error('Connectivity problem.');                
        }

        const data = await response.json();
        setRecords(data);

        return data;
    }
    catch (error) {
      setError(error.message);
      return null;
  } finally {
      setLoading(false);
      return null;
  }
  
  }

  // readDataRecords();

    return (
      <div>
        <h1>Hello, {props.name}!</h1>
      </div>
    );
  }

export default Header;


// Must export!
// export default HelloWorld;
import React from 'react'
import { useState } from 'react';
export default function FetchApi() {
    const [data, setData] = useState([]);
    const apiGet = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            setData(json);
          });
        };
  return (
   <>
   <div>


<br />
<button onClick={apiGet}>FETCH</button>
<br />
{JSON.stringify(data,null,2)}






   </div>
   
   
   
   
   
   </>
  )
}

import React, { useState, useEffect, useContext } from "react";
import db from "../../firestore"
import { Route, Switch, useHistory } from 'react-router-dom';
import { UserContext } from "../../context/UserContext";

const UserQuery = () => {
  const {allUsers, setAllUsers} = useContext(UserContext)
  const [name, setName ] = useState("")
  const history = useHistory()

  const query = () => {
    db.collection("users").get()
    .then((snapShot)=>{
      let tempArr = []
      snapShot.forEach(doc=>{
        tempArr.push(doc.data())
      })
      setAllUsers(tempArr)
    })
    .catch(err => {
      console.log(err)
    })
  }

  useEffect(()=>{
    query()
  },[])

  return (
    <div>
     username: <input value={name} 
     onChange={(event)=>{
       setName(event.target.value)
     }}/>
     <button>search</button>
     <hr />
     {!allUsers ? null :
     allUsers.map((item, index)=>{
      return (
        <div key={item.id} onClick={()=>{
          history.push(`./user/${item.facebookName}/${item.id}`)
        }}>name: {item.facebookName}</div>
      )
     })
     }
    </div>
  );
};

export default UserQuery;

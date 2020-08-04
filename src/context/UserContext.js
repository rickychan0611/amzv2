import React, { createContext, useState } from 'react'
import firebase from 'firebase'
import db from '../firestore'
// import noAvatar from '../assets/images/no-avatar.png'
import { useHistory } from "react-router-dom";

export const UserContext = createContext()

const UserContextProvider = ({ children }) => {
  const [allUsers, setAllUsers] = useState([])
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [displayName, setDisplayName ] = useState('')
  const [openSideBar, setOpenSideBar ]  = useState(false)
  let usersDB = db.collection('users')
  const history = useHistory()

  const allUserQuery = () => {
    console.log("query ddd")
    db.collection("users").get()
    .then((snapShot)=>{
      let tempArr = []
      snapShot.forEach(doc=>{
        tempArr.push(doc.data())
      })
      setAllUsers(tempArr)
      return
    })
    .catch(err => {
      console.log(err)
    })
  }

  const updateProfilePic = (downloadURL) => {
    console.log("!!!!updateProfilePic")
    db.collection('users').doc(user.id).update({ photoURL: downloadURL }).then(() => {
      setUser({ ...user, photoURL: downloadURL })
    });
  }

  const signOut = () => {
    firebase.auth().signOut().then(function () {
      console.log("Sign-out successful.")
      alert("You have signed out")
      // history.push('/')
    }).catch(function (error) {
      console.log(error)
    })
  }

  const AuthState = () => {
  firebase.auth().onAuthStateChanged(function (userData) {
    // let photoURL = noAvatar

    if (userData) {
      setUser(userData)
      setLoading(false)
      console.log('user signed in: ', userData)

      db.collection("users")
      .where('uid', '==', userData.uid).get()
        .then(snapshot => {
          if (snapshot.empty) {
            console.log('user not found');
          };
          //not empty
          snapshot.forEach(doc => {
            // console.log(doc.id, '=>', JSON.stringify(doc.data()))
            console.log(doc.data())
            setUser(doc.data())
            setLoading(false)
          });
        })
        .catch(err => {
          console.log('Error getting documents', err);
        });

    } else {
      setUser("not signed in")
      setLoading(false)
      console.log('onAuthStateChanged not sign in')
    }
  });
}

  React.useEffect(
    () => {
      AuthState()
    },[] )

  return (
    <UserContext.Provider
      value={
        {
          user,
          setUser,
          loading,
          updateProfilePic,
          setDisplayName,
          AuthState,
          openSideBar, 
          setOpenSideBar,
          signOut,
          allUsers, setAllUsers,
          allUserQuery
        }
      }
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
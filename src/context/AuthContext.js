import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  
} from "firebase/auth";
import { auth, db } from "../firebase";
import React from 'react';
import { collection, getDocs } from "firebase/firestore";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({name : ""});

  const[sname,setName] = useState([]);

  const[navd,setNavd] = useState([{tog:'',n:''}])

  const[userpost,setUserPost] = useState([]);

  const[allpost,setAllPost] = useState([]);

  const [allpostData, setAllPostData] = useState([]);

  const[fname,setFirstName] = useState();

  const[userNamePost,setUserNamePost] = useState([{id:"",fir_name:""}]);


  function logIn(email, password) {
      return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }
function firstName(gname)
{
      setName(gname);
      return gname;
}

function navContent(toggle,notch)
{
    setNavd({tog:toggle,n:notch});
    return navd;
}

//Loged in user posts
function fetchUserData()
{
  const fetchData = async () => {
		try {
			const qSnapshot = await getDocs(collection(db, "user"));

			let allDocs = [];
			qSnapshot.forEach((doc) => {
				allDocs.push({ id: doc.id, ...doc.data() });
			});
    
      let allQDocs = [];
			for (const item of allDocs) {

					if(item.email===user.email)
          {
        const qSnap = await getDocs(collection(db,"user",item.id,"post"));

				if (!qSnap.empty) {
					qSnap.forEach((doc) => {
						allQDocs.push({
							id: doc.id,
							cd: doc.data(),
							...doc.data(),
						});
					});
				} else {
				}
        console.log(allQDocs);
        setUserPost(allQDocs);

			}
    }
		} catch (err) {
			console.log(err);
		}
	};

  return fetchData();
}


//All Users Post

function fetchAllPostData()
{
  const fetchAllData = async () => {
		try {
			const qSnapshot = await getDocs(collection(db, "user"));

			let allDocs = [];
			 qSnapshot.forEach((doc) => {
				 allDocs.push({ id: doc.id, ...doc.data() });
			});
    
      console.log(allDocs);

      let allQDocs = [];
			for (const item of allDocs) {

        const qSnap = await getDocs(collection(db,"user",item.id,"post"));
				

				if (!qSnap.empty) {
					qSnap.forEach((doc) => {
						allQDocs.push({
							id: doc.id,
							cd: doc.data(),
							...doc.data(),
						});
            setUserNamePost({fir_name:item.first_name,id:allQDocs.id});
					});
				} else {
				}
        
    }setAllPostData(allQDocs)
		} catch (err) {
			console.log(err);
		}
	};

  return fetchAllData();
}


//Onlu Collection user

function fetchFireStore()
{
	const data = collection(db,'user');
	  getDocs(data).then(res => {

		const userData = res.docs.map(doc => ({
			data : doc.data(),
			id : doc.id
		}))
		firstName(userData);
		
	}).catch(error => console.log(error.message))
		
	// const postData = doc(db,'user','post');
	//   getDocs(postData).then(res => {

	// 	const postGet = res.docs.map(doc => ({
	// 		data : doc.data(),
	// 		id : doc.id
	// 	}))
	// }).catch(error => console.log(error.message))


		
return sname;
}

function UserNameCall()
{
 
}



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut, googleSignIn,
        navContent,navd,fetchUserData,userpost,fetchFireStore,
        sname,allpost,fname,fetchAllPostData,allpostData,userNamePost}}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}

export {userAuthContext};
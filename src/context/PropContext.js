import { createContext, useContext, useState } from "react";

const useStore = createContext();

export function UserDataProvider({ child }) {

    const[userPost,setUserPost]=useState([]);
    const[name,setName] = useState([]);
    const[navd,setNavd] = useState({tog:"",n:""})


function userData(data)
{
        setUserPost(data);
        return userPost;
}

function setFirst(getName)
{
    setName(getName);
    console.log(name);
    return name;
}

function navContent(toggle,notch)
{
    setNavd({tog:toggle,n:notch});
    return toggle,notch
}

return (
<useStore.Provider value={{userPost,name,userData,navContent,navd}}>
    {child}
</useStore.Provider>
);
}

export function useStored() {
    return useContext(useStore);
  }
  
export {useStore};
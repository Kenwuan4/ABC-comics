import React, {useState} from "react";

const Context = React.createContext({})

export function GirdContextProvider({children}){
    const [isGrid, setIsGrid] = useState(true);

    return <Context.Provider value={{isGrid,setIsGrid}}>
        {children}
    </Context.Provider>
}

export default Context;
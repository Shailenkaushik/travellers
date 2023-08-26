import { useState } from "react";
import PageContext from "./Context";

const ContextProvider = (props) => {
    const [id, setId] = useState(1);
    return (
        <PageContext.Provider value={{id, setId}}>
            {props.children}
        </PageContext.Provider>
    )
}

export default ContextProvider
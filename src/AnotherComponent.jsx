import React from "react";
import YetAnotherComponent from "./YetAnotherComponent";
const AnotherComponent = () => {
    return <>
    <h1>This is AnotherComponent</h1>
    <p>
        It imports YetAnotherComponent
    </p>
    <p>
        And yet more blah...
    </p>
    <YetAnotherComponent />
        
    </>;
}
export default AnotherComponent;
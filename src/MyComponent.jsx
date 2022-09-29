import React from "react";
import AnotherComponent from "./AnotherComponent";
import MyClassComponent from "./MyClassComponent";

const MyComponent = () => {
    return <>
    <h1>This is My Component</h1>
    <p>It imports AnotherComponent and MyClassComponent</p>
    <AnotherComponent />
    <MyClassComponent />
    </>;
}

export default MyComponent;
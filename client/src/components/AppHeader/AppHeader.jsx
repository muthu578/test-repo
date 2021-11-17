
import React, { Component, useState } from "react";

const AppHeader = () => {
    const [count, setCount] = useState(0);

  const  increment = () => {
        setCount(count + 1);
    };

    return (
      <div>
           <h1> App Header</h1>
      </div>
    );
};

export default AppHeader;
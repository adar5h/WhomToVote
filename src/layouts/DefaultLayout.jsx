import React from "react";

const DefaultLayout = (props) => {
    return (
        <div>
            <div>NavBar</div>
            {props.children}
            <div>Footer</div>
        </div>
    );
};


export default DefaultLayout; 
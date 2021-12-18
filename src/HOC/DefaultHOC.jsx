import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import { Route } from 'react-router-dom';

const DefaultHOC = ({ component : Component , ...rest}) => {

    return (
            <Route 
                {...rest}
                component = { (props) => (
                        <DefaultLayout>
                            <div>
                                <Component {...props}/>
                            </div>
                        </DefaultLayout>
                )}
            />
    );
};

export default DefaultHOC;
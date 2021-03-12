import * as React from 'react';
import LogIn from './LogIn'
import {Fragment} from "react";

interface OwnProps {
    logged_in: boolean;
    set_logged_in: (newloggedIn: boolean) => void;
    set_user_name: (name: string) => void;

}

const className = 'LogIn'

const LogInContainer = ({set_logged_in, logged_in,set_user_name}: OwnProps) => {


    return (
        <Fragment>
            <div className={`${className}__Container`}>
                <LogIn set_logged_in={set_logged_in} logged_in={logged_in} set_user_name={set_user_name} />
            </div>
        </Fragment>)
}
export default LogInContainer;
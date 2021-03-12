import * as React from 'react';
import {useState} from "react";
import { Redirect } from 'react-router-dom';

interface Props {
    logged_in: boolean;
    set_logged_in: (newloggedIn: boolean) => void;
    set_user_name: (name: string) => void;

}

const className = 'LogIn'

const LogIn: React.FC<Props> = ({logged_in,set_logged_in,set_user_name,}) => {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
    });

    const {name, password} = formData;


    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (name !== '' && password !== '') {
            set_logged_in(true);
            set_user_name(name);
        }
};

    if (logged_in) {
        return <Redirect to="/" />
    }
    return (
        <div className={className}>
            <h1 className={"large text-primary"}>Log In</h1>
            <p className="lead"><i className="fas fa-user"></i> Log Into Your Account</p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input type="text" placeholder="Username" value={name}
                           onChange={e => setFormData({...formData, name: e.target.value})} required/>
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Password" required value={password}
                           onChange={e => setFormData({...formData, password: e.target.value})}/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Login" className="Login__btn btn-primary"/>
                </div>
            </form>

        </div>
    )
}

export default LogIn;
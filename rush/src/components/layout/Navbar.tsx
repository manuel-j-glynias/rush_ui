import React, { Fragment } from 'react'
import {Link, useHistory} from "react-router-dom";
import logo from './rush_logo.png';

interface Props {
    logged_in: boolean;
    set_logged_in: (newloggedIn: boolean) => void;

}

const Navbar: React.FC<Props> = ({logged_in, set_logged_in} : Props) => {
    const logout = async () => {
        set_logged_in(false)
    }
    const history = useHistory();
    const back = () => {
        history.goBack()
    }
    const forward = () => {
        history.goForward()
    }
    const authLinks = (
        <ul>
            <li><Link to="/"><i className="fal fa-home"></i>{' '}Home</Link></li>
            {/*<li> <a href={'/'} onClick={() => back()}><i className="fas fa-backward" ></i>{' '}Back </a> </li>*/}
            {/*<li><a   href={'/'} onClick={() => forward()}><i className="fas fa-forward" ></i>{' '}Forward</a> </li>*/}
            <li><Link to="/core_projects" ><i className="far fa-folders"></i>{' '}Core Projects</Link></li>
            <li><Link to="/publications" ><i className="far fa-books"></i>{' '}Publications</Link></li>
            <li><Link to="/clinical_trials" ><i className="far fa-stethoscope"></i>{' '}Clinical Trials</Link></li>

            <li>
                <a onClick={logout} href='#!' >
                    <i className='fas fa-sign-out-alt'></i>{' '}
                    Logout</a>
            </li>
        </ul>

    );
    const guestLinks = (
        <ul>
            <li><Link to="/login">Login</Link></li>
        </ul>

    );
    return (
        <nav className="navbar">
            <h1>
                <a href="https://www.rush.edu" target="_blank" rel="noopener noreferrer">
                    <img src={logo} alt=""/>
                </a>
            </h1>
            { <Fragment>{ logged_in ? authLinks : guestLinks}</Fragment>}
        </nav>
    )
}

export default Navbar
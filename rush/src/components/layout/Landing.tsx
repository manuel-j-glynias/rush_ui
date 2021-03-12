import React, {Fragment} from 'react'
import {Link} from "react-router-dom";

interface Props {
    logged_in: boolean;
}

const Landing: React.FC<Props> = ({logged_in} : Props) => {


    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="x-large">Rush Grant Reporter</h1>
                    <div className="buttons">
                        {logged_in ?
                            <Fragment>
                            <div className="landing_buttons">
                                <Link to="/core_projects" className="btn"><i className="far fa-folders"></i>{' '}Core Projects</Link>
                                <Link to="/publications" className="btn"><i className="far fa-books"></i>{' '}Publications</Link>
                                <Link to="/clinical_trials" className="btn"><i className="far fa-stethoscope"></i>{' '}Clinical Trials</Link>
                             </div>

                            </Fragment>
                            : <Link to="/login" className="Login__btn btn-primary">Log In</Link>}

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Landing;
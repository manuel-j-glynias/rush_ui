import React, {Fragment, useState} from 'react'
import {Maybe,CoreProject} from '../../generated/graphql';
import {Redirect} from "react-router-dom";
// import {useAlert} from "react-alert";
import CoreProjectDetails from "./CoreProjectDetails";
import { useParams } from 'react-router';
import ProjectQueryContainer from "./ProjectQueryContainer";





interface Props {
    logged_in: boolean;
    user_name:string;
}

const className = 'CoreProjects';

const CoreProjectsContainer = ({logged_in, user_name}: Props) => {
    const { id } = useParams();
    const [search_string, set_search_string] = useState(id!=null ? id : '');
    const [search_string2, set_search_string2] = useState(id!=null ? id : '');
    const [filter_term, set_filter_term] = useState(id!=null ? id : '');
    const [selected_project, set_selected_project] = React.useState('');
    const [selected_project_obj, set_selected_project_obj] = useState<Maybe<CoreProject>>(null);


    const handleNameFilter = () => {
        set_search_string2(filter_term)
        set_search_string(filter_term.toLowerCase())
    }
    const keyPressed = async (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter") {
            handleNameFilter()
        }
    }
    const handleReset = () => {
        set_search_string('')
        set_filter_term('')
    }

    if (!logged_in) {
        return <Redirect to="/"/>
    }

    return (
        <Fragment>
            <div className={`${className}__ContainerContainer`}>
                <div className={`${className}__Container`}>

                    <div className={`${className}__Panel_Wrapper`}>
                        <div className={`${className}__Panel`}>
                            <div className={`${className}__Title`}>Core Projects</div>
                            <div className={`${className}__Filter`}>
                                <input className={'filter_text_input'} type="text"
                                       placeholder="Term..."
                                       name="subString" value={filter_term}
                                       onChange={e => set_filter_term(e.target.value)}
                                       onKeyPress={keyPressed}
                                />

                                <button className={'btn btn-primary'} onClick={handleNameFilter}>Filter</button>
                                <button className={'btn btn-primary'} onClick={handleReset}>Reset</button>
                            </div>
                        </div>

                    </div>
                    <div>
                        <ProjectQueryContainer search_string={search_string} search_string2={search_string2} selected_project={selected_project} set_selected_project={set_selected_project} set_selected_project_obj={set_selected_project_obj} />
                     </div>
                </div>
                <div className={`${className}__DetailsContainer`}>
                    <CoreProjectDetails selected_project_obj={selected_project_obj} />
                </div>
             </div>
        </Fragment>

    )
};

export default CoreProjectsContainer;


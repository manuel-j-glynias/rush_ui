import {Maybe, LiteratureReference} from "../../generated/graphql";
import React, {Fragment} from 'react'
import './styles.css';
import PublicationDetailsContainer from "../Details/PublicationDetails";
import {Link} from "react-router-dom";


interface Props {
    selected_publication_obj: Maybe<LiteratureReference>;
}

const className = 'Publications';

const PublicationsDetails: React.FC<Props> = ({selected_publication_obj}) => {


    return (
        <Fragment>
            {selected_publication_obj &&
            <div className={`${className}__Publications_Panel`}>
                <strong>Publication Details</strong>
                <div className={`${className}__Publications_Wrapper`}>
                    <div className={`${className}__Grants_Item`}>
                        <span>{selected_publication_obj.title}</span>
                            <PublicationDetailsContainer publication_graph_id={selected_publication_obj.id} should_show_abstract={true}/>
                        <ol>Core Projects:
                            {selected_publication_obj.coreProjects.map(
                            (coreProject, i: string | number ) =>
                                <li
                                    key={i}
                                    className={`${className}__CoreProjects_Item`} >
                                    {coreProject ?
                                        // <Link to="/core_projects" >{coreProject.coreProjectNumber}</Link>
                                        <Link to={`/core_projects/${coreProject.coreProjectNumber}`} >{coreProject.coreProjectNumber}</Link>
                                        : ''}
                                </li>
                            )
                        }</ol>
                    </div>
                </div>

            </div>}
        </Fragment>
    )
}

export default PublicationsDetails;
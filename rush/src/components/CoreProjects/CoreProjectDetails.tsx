import {Maybe,CoreProject} from "../../generated/graphql";
import React, {Fragment, useState} from 'react'
import GrantDetailsContainer from "../Details/GrantDetails";
import './styles.css';
import PublicationDetailsContainer from "../Details/PublicationDetails";
import TrialsDetailsContainer from "../Details/TrialsDetails";

//<i class="far fa-chevron-square-right"></i>
//<i class="far fa-chevron-square-down"></i>
interface Props  {
    selected_project_obj: Maybe<CoreProject>;
}
const className = 'CoreProjects';

const CoreProjectDetails: React.FC<Props> = ({selected_project_obj}) =>{
    const [open_projects_list, set_open_projects_list] = useState<string[]>([])
    const [open_trials_list, set_open_trials_list] = useState<string[]>([])
    const [open_publications_list, set_open_publications_list] = useState<string[]>([])

    const open_project = (grant_id:string) => {
        let l = [...open_projects_list];
        l.push(grant_id);
        set_open_projects_list(l);
    }
    const close_project = (grant_id:string) => {
        let l = [...open_projects_list];
        l.forEach((value,index)=>{
            if(value===grant_id) l.splice(index,1);
        });
        set_open_projects_list(l);
    }
    const is_project_open = (grant_id:string):boolean => {
        return open_projects_list.includes(grant_id)
    }
    const open_trial = (grant_id:string) => {
        let l = [...open_trials_list];
        l.push(grant_id);
        set_open_trials_list(l);
    }
    const close_trial = (grant_id:string) => {
        let l = [...open_trials_list];
        l.forEach((value,index)=>{
            if(value===grant_id) l.splice(index,1);
        });
        set_open_trials_list(l);
    }
    const is_trial_open = (grant_id:string):boolean => {
        return open_trials_list.includes(grant_id)
    }
    const open_publication = (grant_id:string) => {
        let l = [...open_publications_list];
        l.push(grant_id);
        set_open_publications_list(l);
    }
    const close_publication = (grant_id:string) => {
        let l = [...open_publications_list];
        l.forEach((value,index)=>{
            if(value===grant_id) l.splice(index,1);
        });
        set_open_publications_list(l);
    }
    const is_publication_open = (grant_id:string):boolean => {
        return open_publications_list.includes(grant_id)
    }

    return (
        <Fragment>
            {selected_project_obj &&
            <div className={`${className}__Details_Panel`}>
                <h3>Core Project Number:{selected_project_obj.coreProjectNumber}</h3>

                <div className={`${className}__Grants_Panel`}>
                    <strong>Grants</strong>
                    <div className={`${className}__Grants_Wrapper`}>
                        <ol className={`${className}__Grants_List`}>
                                {!!selected_project_obj &&
                                selected_project_obj.grants.map(
                                    (grant, i: number ) =>
                                        !!grant && (
                                            <li key={i}
                                                className={ `${className}__Grants_Item`  }
                                            > {is_project_open(grant.id) ?
                                                <span><i className="far fa-chevron-square-down" onClick={() => close_project(grant.id)}></i>{grant.projectTitle} (FY{grant.fiscalYear})
                                                    <GrantDetailsContainer grant_graph_id={grant.id}/></span>
                                                :
                                                <span><i className="far fa-chevron-square-right" onClick={() => open_project(grant.id)}></i>{grant.projectTitle} (FY{grant.fiscalYear})</span>
                                            }
                                            </li>
                                        ),
                                )}
                        </ol>
                    </div>
                </div>
                <div className="Vertical_Spacer_10"/>
                <div className={`${className}__Trials_Panel`}>
                    <strong>Trials</strong>
                    <div className={`${className}__Trials_Wrapper`}>
                        <ol className={`${className}__Trials_List`}>
                            {!!selected_project_obj &&
                            selected_project_obj.clinical_trials.map(
                                (trial, i: number ) =>
                                    !!trial && (
                                        <li key={i} className={ `${className}__Grants_Item`  }>
                                        {is_trial_open(trial.id) ?
                                            <span><i className="far fa-chevron-square-down" onClick={() => close_trial(trial.id)}></i>{trial.nct_id} {trial.brief_title}
                                            <TrialsDetailsContainer trial_graph_id={trial.id} show_abstract={false}/>
                                            </span>
                                            :
                                            <span><i className="far fa-chevron-square-right"
                                                     onClick={() => open_trial(trial.id)}></i>{trial.nct_id} {trial.brief_title}</span>
                                        }
                                        </li>
                                    ),
                            )}
                        </ol>
                    </div>

                </div>
                <div className="Vertical_Spacer_10"/>
                <div className={`${className}__Publications_Panel`}>
                    <strong>Publications</strong>
                    <div className={`${className}__Publications_Wrapper`}>
                        <ol className={`${className}__Publications_List`}>
                            {!!selected_project_obj && selected_project_obj.publications &&
                            selected_project_obj.publications.map(
                                (pub, i: number ) =>
                                    !!pub && (
                                        <li key={i}
                                            className={ `${className}__Grants_Item`  }>
                                            {is_publication_open(pub.id) ?
                                                <span><i className="far fa-chevron-square-down"
                                                         onClick={() => close_publication(pub.id)}></i>{pub.title}
                                                    <PublicationDetailsContainer publication_graph_id={pub.id} should_show_abstract={false}/>
                                                </span>
                                                :
                                                <span><i className="far fa-chevron-square-right"
                                                         onClick={() => open_publication(pub.id)}></i>{pub.title} ({pub.shortReference})</span>
                                            }

                                        </li>
                                    ),
                            )}
                        </ol>
                    </div>

                </div>
            </div> }
        </Fragment>
    )
}

export default CoreProjectDetails;
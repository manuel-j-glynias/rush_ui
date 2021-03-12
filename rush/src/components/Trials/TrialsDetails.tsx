import {Maybe, LiteratureReference, ClinicalTrial} from "../../generated/graphql";
import React, {Fragment} from 'react'
import './styles.css';
import PublicationDetailsContainer from "../Details/PublicationDetails";
import {Link} from "react-router-dom";
import TrialsDetailsContainer from "../Details/TrialsDetails";


interface Props {
    selected_trials_obj: Maybe<ClinicalTrial>;
}

const className = 'Publications';

const TrialsDetails: React.FC<Props> = ({selected_trials_obj}) => {

    //https://clinicaltrials.gov/ct2/show/NCT03271372
    //<a href={'https://clinicaltrials.gov/ct2/show/' + selected_trials_obj.nct_id} target="_blank" rel="noopener noreferrer">{selected_trials_obj.nct_id }</a>
    return (
        <Fragment>
            {selected_trials_obj &&
            <div className={`${className}__Publications_Panel`}>
                <strong>Clinical Trial Details</strong>
                <div className={`${className}__Publications_Wrapper`}>
                    <div className={`${className}__Grants_Item`}>
                        <span> <a href={'https://clinicaltrials.gov/ct2/show/' + selected_trials_obj.nct_id} target="_blank" rel="noopener noreferrer">{selected_trials_obj.nct_id }</a> {selected_trials_obj.brief_title}</span>
                        <TrialsDetailsContainer trial_graph_id={selected_trials_obj.id} show_abstract={true}/>
                        <div>Core Projects:
                                        {selected_trials_obj.coreProject ?
                                            <Link to={`/core_projects/${selected_trials_obj.coreProject.coreProjectNumber}`} >{selected_trials_obj.coreProject.coreProjectNumber}</Link>
                                            : ''}</div>
                    </div>
                </div>

            </div>}
        </Fragment>
    )
}

export default TrialsDetails;
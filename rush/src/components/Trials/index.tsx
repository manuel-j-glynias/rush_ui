import React, {Fragment, useState} from 'react'
import {Maybe, useTrialListQuery, ClinicalTrial} from '../../generated/graphql';
import {Redirect} from "react-router-dom";
// import {useAlert} from "react-alert";
import { useParams } from 'react-router';
import Trials from "./Trials";
import TrialsDetails from "./TrialsDetails";
import StringArraySelect from "../common/StringArraySelect/StringArraySelect";
import TrialsByConditionQueryContainer from "./TrialsByConditionQueryContainer";
import TrialsByDrugQueryContainer from "./TrialsByDrugQueryContainer";
import TrialsByPhaseQueryContainer from "./TrialsByPhaseQueryContainer";





interface Props {
    logged_in: boolean;
    user_name:string;
}

const className = 'Trials';

const TrialsContainer = ({logged_in, user_name}: Props) => {
    const { type, id } = useParams();
    const [search_string, set_search_string] = useState(id!=null ? id : '');
    const [search_string2, set_search_string2] = useState(id!=null ? id : '');
    const [filter_term, set_filter_term] = useState(id!=null ? id : '');
    const [selected_trial, set_selected_trial] = React.useState('');
    const [selected_trial_obj, set_selected_trial_obj] = useState<Maybe<ClinicalTrial>>(null);

    const {data, error, loading} = useTrialListQuery(
        {variables: {str: search_string, str2:search_string2}});

    const search_types = ["All","Phase","Drug", "Condition"]


    const [search_type, set_search_type] = useState(type!=null ? type : "All");

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
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>ERROR</div>;
    }

    if (!data) {
        return <div>Please select a trial from the panel</div>;
    }

    return (
        <Fragment>
            <div className={`${className}__ContainerContainer`}>
                <div className={`${className}__Container`}>

                    <div className={`${className}__Panel_Wrapper`}>
                        <div className={`${className}__Panel`}>
                            <div className={`${className}__Title`}>Clincal Trials</div>
                            <div className={`${className}__Buttons`}>
                                Search Field:  <StringArraySelect stringArray={search_types} selectedString={search_type} set_selectedString={set_search_type}/>
                            </div>
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
                        {search_type==="All" &&
                        <Trials  data={data} selected_trial={selected_trial} set_selected_trial={set_selected_trial} set_selected_trial_obj={set_selected_trial_obj} />}
                        {search_type==="Phase" &&
                        <TrialsByPhaseQueryContainer search_string={search_string} selected_trial={selected_trial} set_selected_trial={set_selected_trial} set_selected_trial_obj={set_selected_trial_obj} />}
                        {search_type==="Drug" &&
                        <TrialsByDrugQueryContainer search_string={search_string} selected_trial={selected_trial} set_selected_trial={set_selected_trial} set_selected_trial_obj={set_selected_trial_obj} />}
                        {search_type==="Condition" &&
                        <TrialsByConditionQueryContainer search_string={search_string} selected_trial={selected_trial} set_selected_trial={set_selected_trial} set_selected_trial_obj={set_selected_trial_obj} />}

                    </div>
                </div>
                <div className={`${className}__DetailsContainer`}>
                    <TrialsDetails selected_trials_obj={selected_trial_obj} />
                </div>
            </div>
        </Fragment>

    )
};

export default TrialsContainer;


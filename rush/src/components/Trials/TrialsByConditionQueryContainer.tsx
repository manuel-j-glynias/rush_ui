import React, {Fragment} from 'react'
import {
    ClinicalTrial,
    Maybe,
    useTrialListByConditionQuery
} from "../../generated/graphql";
import Trials from "./Trials";

interface Props {
    search_string:string;
    selected_trial: string;
    set_selected_trial: (s:string) => void;
    set_selected_trial_obj: (trial:Maybe<ClinicalTrial>)=> void;
}

const TrialsByConditionQueryContainer : React.FC<Props> = ({search_string,selected_trial,set_selected_trial,set_selected_trial_obj}:Props) => {

    const {data, error, loading, refetch} = useTrialListByConditionQuery(
        {variables: {str: search_string}});


    React.useEffect(() => {
        refetch();
    }, [search_string, refetch]);


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
            <Trials  data={data} selected_trial={selected_trial} set_selected_trial={set_selected_trial} set_selected_trial_obj={set_selected_trial_obj} />
        </Fragment>
    )
}

export default TrialsByConditionQueryContainer;
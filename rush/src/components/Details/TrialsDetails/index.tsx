import React, {Fragment} from 'react'
import {useTrialQuery} from '../../../generated/graphql';
import TrialDetails from "./TrialDetails";

interface Props {
    trial_graph_id: string;
    show_abstract:boolean;
}

// const className = 'PublicationDetails'

const TrialsDetailsContainer = ({trial_graph_id,show_abstract}:Props) => {

    const {data, error, loading} = useTrialQuery(
        {variables: {id:trial_graph_id}});

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>ERROR</div>;
    }

    if (!data) {
        return <div>No data</div>;
    }
    return (
        <Fragment>
            <TrialDetails data={data} show_abstract={show_abstract}/>
        </Fragment>
    )

}

export default TrialsDetailsContainer;
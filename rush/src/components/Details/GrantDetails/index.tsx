import React, {Fragment} from 'react'
import {useGrantQuery} from '../../../generated/graphql';
import GrantDetails from "./GrantDetails"

interface Props {
    grant_graph_id: string;
}

// const className = 'GrantDetails'

const GrantDetailsContainer = ({grant_graph_id}:Props) => {

    const {data, error, loading} = useGrantQuery(
        {variables: {id:grant_graph_id}});

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
            <GrantDetails data={data} />
        </Fragment>
    )

}

export default GrantDetailsContainer;
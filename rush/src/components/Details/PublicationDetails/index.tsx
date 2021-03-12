import React, {Fragment} from 'react'
import {usePublicationQuery} from '../../../generated/graphql';
import PublicationDetails from "./PublicationDetails"

interface Props {
    publication_graph_id: string;
    should_show_abstract:boolean;
}

// const className = 'PublicationDetails'

const PublicationDetailsContainer = ({publication_graph_id,should_show_abstract}:Props) => {

    const {data, error, loading} = usePublicationQuery(
        {variables: {id:publication_graph_id}});

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
            <PublicationDetails data={data} should_show_abstract={should_show_abstract}/>
        </Fragment>
    )

}

export default PublicationDetailsContainer;
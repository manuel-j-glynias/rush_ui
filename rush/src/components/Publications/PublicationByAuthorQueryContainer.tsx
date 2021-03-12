import React, {Fragment} from 'react'
import {LiteratureReference, Maybe,usePublicationsByAuthorQuery} from '../../generated/graphql';
import PublicationsByAuthor from "./PublicationsByAuthor";


interface Props {
    search_string:string;
    selected_publication: string;
    set_selected_publication: (s:string) => void;
    set_selected_publication_obj: (project:Maybe<LiteratureReference>)=> void;

}

// const className = 'Publications';

const PublicationByAuthorQueryContainer = ({search_string,selected_publication,set_selected_publication,set_selected_publication_obj}: Props) => {




    // const {data, error, loading, refetch} = usePublicationListQuery(
    //     {variables: {str: search_string}});

    const {data, error, loading, refetch} = usePublicationsByAuthorQuery(
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
        return <div>Please select a project from the panel</div>;
    }

    return (
        <Fragment>
                        <PublicationsByAuthor data={data} selected_publication={selected_publication}
                                      set_selected_publication={set_selected_publication} set_selected_publication_obj={set_selected_publication_obj}/>

        </Fragment>

    )
};

export default PublicationByAuthorQueryContainer;


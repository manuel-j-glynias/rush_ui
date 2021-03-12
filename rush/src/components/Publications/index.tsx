import React, {Fragment, useState} from 'react'
import {LiteratureReference, Maybe} from '../../generated/graphql';
import {Redirect} from "react-router-dom";
import PublicationsDetails from "./PublicationsDetails";
import StringArraySelect from "../common/StringArraySelect/StringArraySelect";
import PublicationQueryContainer from "./PublicationQueryContainer";
import PublicationByAuthorQueryContainer from "./PublicationByAuthorQueryContainer";
import PublicationByJournalQueryContainer from "./PublicationByJournalQueryContainer";
import {useParams} from "react-router";

interface Props {
    logged_in: boolean;
    user_name:string;
}

const className = 'Publications';

const PublicationsContainer = ({logged_in, user_name}: Props) => {
    const { type, id } = useParams();

    const [search_string, set_search_string] = useState(id!=null ? decodeURIComponent(id) : '');
    const [filter_term, set_filter_term] = useState(search_string);
    const [selected_publication, set_selected_publication] = React.useState('');
    const [selected_publication_obj, set_selected_publication_obj] = useState<Maybe<LiteratureReference>>(null);

    const search_types = ["All","Author","Journal"]


    const [search_type, set_search_type] = useState(type!=null ? type : "All");



    // const {data, error, loading, refetch} = usePublicationsByAuthorQuery(
    //     {variables: {str: search_string}});
    //
    // const {data, error, loading, refetch} = usePublicationsByJournalQuery(
    //     {variables: {str: search_string}});


    const handleNameFilter = () => {
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
                            <div className={`${className}__Title`}>Publications</div>

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
                            <PublicationQueryContainer search_string={search_string}
                                                   selected_publication={selected_publication}
                                                   set_selected_publication={set_selected_publication}
                                                   set_selected_publication_obj={set_selected_publication_obj} /> }
                        {search_type==="Author" &&
                            <PublicationByAuthorQueryContainer search_string={search_string}
                                                   selected_publication={selected_publication}
                                                   set_selected_publication={set_selected_publication}
                                                   set_selected_publication_obj={set_selected_publication_obj} /> }
                       {search_type==="Journal" &&
                            <PublicationByJournalQueryContainer search_string={search_string}
                                               selected_publication={selected_publication}
                                               set_selected_publication={set_selected_publication}
                                               set_selected_publication_obj={set_selected_publication_obj} /> }
                     </div>
                </div>
                <div className={`${className}__DetailsContainer`}>
                    <PublicationsDetails selected_publication_obj={selected_publication_obj} />
                </div>
             </div>
        </Fragment>

    )
};

export default PublicationsContainer;


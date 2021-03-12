import React, {Fragment} from 'react'
import {Maybe,CoreProject, useCoreProjectListQuery} from '../../generated/graphql';
import CoreProjects from "./CoreProjects";


interface Props {
    search_string:string;
    search_string2:string;
    selected_project: string;
    set_selected_project: (s:string) => void;
    set_selected_project_obj: (project:Maybe<CoreProject>)=> void;
}

// const className = 'CoreProjects';

const ProjectQueryContainer : React.FC<Props> = ({search_string, search_string2,selected_project,set_selected_project,set_selected_project_obj}: Props) => {


    const {data, error, loading, refetch} = useCoreProjectListQuery(
        {variables: {str: search_string, str2:search_string2}});


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
                         <CoreProjects data={data} selected_project={selected_project}
                                    set_selected_project={set_selected_project} set_selected_project_obj={set_selected_project_obj}/>
         </Fragment>

    )
};

export default ProjectQueryContainer;


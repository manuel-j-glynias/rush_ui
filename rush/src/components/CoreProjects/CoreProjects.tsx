import * as React from 'react'
import {Maybe,CoreProject,CoreProjectListQuery} from '../../generated/graphql';
import './styles.css'

interface Props  {
    data: CoreProjectListQuery;
    selected_project: string;
    set_selected_project: (s:string) => void;
    set_selected_project_obj: (project:Maybe<CoreProject>)=> void;
}

const className = 'CoreProjects';

//    const [selected_project, set_selected_project] = React.useState('');

const CoreProjects: React.FC<Props> = ({data,
                                           selected_project,set_selected_project,set_selected_project_obj}) => {
    const handleProject_select =  (id:string)  => {
        set_selected_project(id)
        if (data !=null && data.CoreProject!=null && data.CoreProject.length>0){
            let index : number = 0;
            for (index = 0; index < data.CoreProject.length; index++){
                let project = data.CoreProject[index];
                if (project != null && project.id===id){
                    // @ts-ignore
                    set_selected_project_obj(project)
                }
            }

        }
    }



    return (
        <div className={className} >

            <ol className={`${className}__list`} >
                {!!data.CoreProject &&
                data.CoreProject.map(
                    (project, i: string | number ) =>
                        !!project && (
                            <li key={i}
                                className={ project.id===selected_project ?  `${className}__selected_item` :  `${className}__item`  }
                                onClick={() => handleProject_select(project.id!)}
                            ><span>{project.grants && project.grants[0] && project.grants[0].projectTitle} ({project.coreProjectNumber})</span>

                            </li>
                        ),
                )}
            </ol>

        </div>
    )
}

export default CoreProjects;
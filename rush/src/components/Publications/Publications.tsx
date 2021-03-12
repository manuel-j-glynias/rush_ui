import * as React from 'react'
import {Maybe, PublicationListQuery, LiteratureReference} from '../../generated/graphql';
import './styles.css'

interface Props  {
    data: PublicationListQuery;
    selected_publication: string;
    set_selected_publication: (s:string) => void;
    set_selected_publication_obj: (project:Maybe<LiteratureReference>)=> void;
}

const className = 'Publications';

//    const [selected_project, set_selected_project] = React.useState('');

const Publications: React.FC<Props> = ({data,
                                           selected_publication,set_selected_publication,set_selected_publication_obj}) => {
    const handlePublication_select =  (id:string)  => {
        set_selected_publication(id)
        if (data !=null && data.LiteratureReference!=null && data.LiteratureReference.length>0){
            let index : number = 0;
            for (index = 0; index < data.LiteratureReference.length; index++){
                let publication = data.LiteratureReference[index];
                if (publication != null && publication.id===id){
                    // @ts-ignore
                    set_selected_publication_obj(publication)
                }
            }

        }
    }



    return (
        <div className={className} >

            <ol className={`${className}__list`} >
                {!!data.LiteratureReference &&
                data.LiteratureReference.map(
                    (publication, i: string | number ) =>
                        !!publication && (
                            <li key={i}
                                className={ publication.id===selected_publication ?  `${className}__selected_item` :  `${className}__item`  }
                                onClick={() => handlePublication_select(publication.id!)}
                            ><span>{publication.title} ({publication.shortReference})</span>

                            </li>
                        ),
                )}
            </ol>

        </div>
    )
}

export default Publications;
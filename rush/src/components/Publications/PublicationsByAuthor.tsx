import * as React from 'react'
import {Maybe, PublicationsByAuthorQuery, LiteratureReference} from '../../generated/graphql';
import './styles.css'

interface Props  {
    data: PublicationsByAuthorQuery;
    selected_publication: string;
    set_selected_publication: (s:string) => void;
    set_selected_publication_obj: (project:Maybe<LiteratureReference>)=> void;
}

const className = 'Publications';


const PublicationsByAuthor: React.FC<Props> = ({data,
                                           selected_publication,set_selected_publication,set_selected_publication_obj}) => {
    const handlePublication_select =  (id:string)  => {
        set_selected_publication(id)
        if (data!= null && data.Author && data.Author.length>0){
            let a_index = 0;
            for (a_index = 0;a_index<data.Author.length;a_index++){
                // @ts-ignore
                if (data.Author[a_index] && data.Author[a_index].references && data.Author[a_index].references.length>0){
                    let r_index = 0;
                    // @ts-ignore
                    for (r_index=0;r_index<data.Author[a_index].references.length;r_index++){
                        // @ts-ignore
                        let publication = data.Author[a_index].references[r_index];
                        if (publication != null && publication.id===id){
                            // @ts-ignore
                            set_selected_publication_obj(publication)
                        }
                    }
                }
            }
        }
     }



    return (
        <div className={className} >

            <ol className={`${className}__list`} >
                {!!data.Author && data.Author.map(
                    (author,i:string | number ) =>
                        !!author && (
                            author.references.map(
                                (publication, i: string | number ) =>
                                    !!publication && (
                                        <li key={i}
                                            className={ publication.id===selected_publication ?  `${className}__selected_item` :  `${className}__item`  }
                                            onClick={() => handlePublication_select(publication.id!)}
                                        ><span>{publication.title} ({publication.shortReference})</span>
                                        </li>
                                            ), ) ), )
                }
            </ol>

        </div>
    )
}

export default PublicationsByAuthor;


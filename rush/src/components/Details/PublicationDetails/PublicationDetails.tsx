import React, {Fragment,useState} from 'react'
import {PublicationQuery} from "../../../generated/graphql";
import './styles.css';
import {Link} from "react-router-dom";

interface Props {
    data: PublicationQuery;
    should_show_abstract:boolean;
}

const className = 'PublicationDetails'

const PublicationDetails: React.FC<Props> = ({data,should_show_abstract}) => {

    const [show_abstract, set_show_abstract] = useState<boolean>(should_show_abstract)






    return (
        <Fragment>
        {data && data.LiteratureReference && data.LiteratureReference[0] &&
            <div className={show_abstract ? `${className}__Details_Panel_with_Abstract` :`${className}__Details_Panel`}>
                <div className={`${className}__DetailsTable`}>
                    <div className={`${className}__DetailsRow`}>
                        <div className={`${className}__DetailsCellLeft`}>Journal:</div>
                        <div className={`${className}__DetailsCellRight`}><Link to={`/publications/Journal/${encodeURIComponent(data.LiteratureReference[0].journal.name.toLowerCase())}`} >{data.LiteratureReference[0].journal.name}</Link> </div>
                        <div className={`${className}__DetailsCellLeft`}>Volume:</div>
                        <div className={`${className}__DetailsCellRight`}>{data.LiteratureReference[0].volume} </div>
                        <div className={`${className}__DetailsCellLeft`}>Year:</div>
                        <div className={`${className}__DetailsCellRight`}>{data.LiteratureReference[0].publicationYear} </div>

                    </div>

                    <div className={`${className}__DetailsRow`}>
                        <div className={`${className}__DetailsCellLeft`}>Pages:</div>
                        <div className={`${className}__DetailsCellRight`}>{data.LiteratureReference[0].firstPage} - {data.LiteratureReference[0].lastPage} </div>
                        <div className={`${className}__DetailsCellLeft`}>PMID:</div>
                        <div className={`${className}__DetailsCellRight`}><a href={'https://pubmed.ncbi.nlm.nih.gov/' + data.LiteratureReference[0].PMID} target="_blank"
                                                                             rel="noopener noreferrer">{data.LiteratureReference[0].PMID }</a></div>
                        <div className={`${className}__DetailsCellLeft`}>DOI:</div>
                        <div className={`${className}__DetailsCellRight`}>{data.LiteratureReference[0].DOI} </div>
                    </div>



                </div>
                <div>
                    Authors:
                    <div className={`${className}__Details_Authors`}>
                        <div className={`${className}__Authors_List`} >
                            {data.LiteratureReference[0].authors.map(
                                (author, i: string | number ) =>
                                    !!author && (
                                        <span key={i}
                                            className={`${className}__Author_Item`}
                                        >
                                            <Link to={`/publications/Author/${encodeURIComponent((author.firstInitial + ' ' +author.surname).toLowerCase())}`} >{author.firstInitial} {author.surname}, </Link>


                                        </span>
                                    ),
                            )}
                        </div>
                    </div>
                </div>
                <div>
                    {show_abstract ?
                        <span><i className="far fa-chevron-square-down"
                                 onClick={() => set_show_abstract(false)}>
                            </i>Abstract
                            <div  className={`${className}__Details_Abstract`}>
                                {data.LiteratureReference[0].abstract}
                            </div>
                        </span>
                        :
                        <span><i className="far fa-chevron-square-right"
                                 onClick={() => set_show_abstract(true)}>
                                                </i>Abstract</span> }
                </div>
            </div>
        }
        </Fragment>
    )
}

export default PublicationDetails;
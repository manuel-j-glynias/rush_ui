import React, {Fragment,useState} from 'react'
import {Maybe, TrialQuery} from '../../../generated/graphql';
import {Link} from "react-router-dom";

import './styles.css';

interface Props {
    data:TrialQuery;
    show_abstract:boolean;
}
//U54NS092090
const className = 'TrialDetails'

const TrialDetails: React.FC<Props> = ({data,show_abstract}) => {
    const [show_brief_summary, set_show_brief_summary] = useState<boolean>(show_abstract)

    // const show_list = (list:Maybe<string>[]):string => {
    //     let s= ''
    //     if (list!=null && list[0]!=null){
    //         let i = 0
    //         for (i=0;i<list.length;i++){
    //             if (s!==''){
    //                 s += ', '
    //             }
    //             s += list[i]
    //         }
    //     }
    //     return s
    // }

    return (
        <Fragment>
            {data && data.ClinicalTrial && data.ClinicalTrial[0] &&
            <div className={show_brief_summary ? `${className}__Details_Panel_with_Abstract` :`${className}__Details_Panel`}>
                <div className={`${className}__DetailsTable`}>
                    <div className={`${className}__DetailsRow`}>
                        <div className={`${className}__DetailsCellLeft`}>Status:</div>
                        <div className={`${className}__DetailsCellRight`}> {data.ClinicalTrial[0].status} on {data.ClinicalTrial[0].status_date}</div>
                        <div className={`${className}__DetailsCellLeft`}>Phases:</div>
                        <div className={`${className}__DetailsCellRight`}>
                            <div className={`${className}__Details_Phases`}>
                                <ol className={`${className}__conditionList`} >
                                    {data.ClinicalTrial[0].phases.map( (phase,i:number) =>
                                        !!phase && (
                                            <li key={i}
                                                className={`${className}__conditionItem`}
                                            >
                                                <Link to={`/clinical_trials/Phase/${encodeURIComponent(
                                                    phase.toLowerCase())}`} >
                                                    {phase} </Link>

                                            </li>
                                        )
                                    )}
                                </ol>
                            </div>
                        </div>
                        <div className={`${className}__DetailsCellLeft`}>Study Type:</div>
                        <div className={`${className}__DetailsCellRight`}> {data.ClinicalTrial[0].study_type} </div>
                    </div>
                    <div className={`${className}__DetailsRow`}>
                        <div className={`${className}__DetailsCellLeft`}>Conditions</div>
                        <div className={`${className}__DetailsCellRightLarge`}>
                            <div className={`${className}__Details_Conditions`}>
                                <ol className={`${className}__conditionList`} >
                            {data.ClinicalTrial[0].conditions.map( (condition,i:number) =>
                                !!condition && (
                                    <li key={i}
                                    className={`${className}__conditionItem`}
                                    >
                                        <Link to={`/clinical_trials/Condition/${encodeURIComponent(
                                            condition.toLowerCase())}`} >
                                            {condition} </Link>

                                    </li>
                                )
                            )}
                                </ol>
                            </div>
                        </div>
                        <div className={`${className}__DetailsCellLeft`}>Drugs:</div>
                        <div className={`${className}__DetailsCellRight`}>
                            <div className={`${className}__Details_Conditions`}>
                                <ol className={`${className}__conditionList`} >
                                    {data.ClinicalTrial[0].drugs.map( (drug,i:number) =>
                                        !!drug && (
                                            <li key={i}
                                                className={`${className}__conditionItem`}
                                            >
                                                <Link to={`/clinical_trials/Drug/${encodeURIComponent(
                                                    drug.toLowerCase())}`} >
                                                    {drug} </Link>

                                            </li>
                                        )
                                    )}
                                </ol>
                            </div>

                        </div>
                     </div>

                </div>
                <div>
                    {show_brief_summary ?
                        <span><i className="far fa-chevron-square-down"
                                 onClick={() => set_show_brief_summary(false)}>
                            </i>Summary
                            <div  className={`${className}__Details_Abstract`}>
                                {data.ClinicalTrial[0].brief_summary}
                            </div>
                        </span>
                        :
                        <span><i className="far fa-chevron-square-right"
                                 onClick={() => set_show_brief_summary(true)}>
                                                </i>Summary</span> }
                </div>
            </div>
                    }
        </Fragment>
    )
}

export default TrialDetails;

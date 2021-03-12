import * as React from 'react'
import {Maybe,ClinicalTrial,TrialListQuery} from '../../generated/graphql';
import './styles.css'

interface Props  {
    data: TrialListQuery;
    selected_trial: string;
    set_selected_trial: (s:string) => void;
    set_selected_trial_obj: (project:Maybe<ClinicalTrial>)=> void;
}

const className = 'Trials';

//    const [selected_project, set_selected_project] = React.useState('');

const Trials: React.FC<Props> = ({data,
                                           selected_trial,set_selected_trial,set_selected_trial_obj}) => {
    const handleTrial_select =  (id:string)  => {
        set_selected_trial(id)
        if (data !=null && data.ClinicalTrial!=null && data.ClinicalTrial.length>0){
            let index : number = 0;
            for (index = 0; index < data.ClinicalTrial.length; index++){
                let trial = data.ClinicalTrial[index];
                if (trial != null && trial.id===id){
                    // @ts-ignore
                    set_selected_trial_obj(trial)
                }
            }

        }
    }



    return (
        <div className={className} >

            <ol className={`${className}__list`} >
                {!!data.ClinicalTrial &&
                data.ClinicalTrial.map(
                    (trial, i: string | number ) =>
                        !!trial && (
                            <li key={i}
                                className={ trial.id===selected_trial ?  `${className}__selected_item` :  `${className}__item`  }
                                onClick={() => handleTrial_select(trial.id!)}
                            ><span>{trial.nct_id} {trial.brief_title}</span>

                            </li>
                        ),
                )}
            </ol>

        </div>
    )
}

export default Trials;
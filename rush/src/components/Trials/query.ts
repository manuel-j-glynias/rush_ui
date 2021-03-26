import gql from 'graphql-tag';

export const QUERY_TRIAL = gql`
    query trialList($str: String,$str2:String){
        ClinicalTrial(first:100,filter:{OR:[
            {lower_case_search_string_contains:$str},
            {nct_id:$str2},
        ]}){
            id
            nct_id
            brief_title
            brief_summary
            conditions
            detailed_description
            drugs
            official_title
            phases
            status
            status_date
            study_type
            coreProject{
                id
                coreProjectNumber
            }
        }
    }
`
export const QUERY_TRIAL_BY_PHASE = gql`
    query trialListByPhase($str: String){
        ClinicalTrial(first:100,filter:{phase_lower_case_search_string_contains:$str}){
            id
            nct_id
            brief_title
            brief_summary
            conditions
            detailed_description
            drugs
            official_title
            phases
            status
            status_date
            study_type
            coreProject{
                id
                coreProjectNumber
            }
        }
    }
`
export const QUERY_TRIAL_BY_DRUG = gql`
    query trialListByDrug($str: String){
        ClinicalTrial(first:100,filter:{drug_lower_case_search_string_contains:$str}){
            id
            nct_id
            brief_title
            brief_summary
            conditions
            detailed_description
            drugs
            official_title
            phases
            status
            status_date
            study_type
            coreProject{
                id
                coreProjectNumber
            }
        }
    }
`
export const QUERY_TRIAL_BY_CONDITION = gql`
    query trialListByCondition($str: String){
        ClinicalTrial(first:100,filter:{condition_lower_case_search_string_contains:$str}){
            id
            nct_id
            brief_title
            brief_summary
            conditions
            detailed_description
            drugs
            official_title
            phases
            status
            status_date
            study_type
            coreProject{
                id
                coreProjectNumber
            }
        }
    }
`
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
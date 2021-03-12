import gql from 'graphql-tag';

export const QUERY_TRIAL = gql`
    query trial($id:ID){
        ClinicalTrial(id:$id){
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
        }
    }
`
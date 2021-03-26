import gql from 'graphql-tag';

export const QUERY_CORE_PROJECT_LIST = gql`
    query CoreProjectList($str: String,$str2:String) {
        CoreProject(first:100,filter:{OR:[
            {grants:{lower_case_search_string_contains:$str}},
            {coreProjectNumber_contains:$str2},
                                ]}){
            id
            coreProjectNumber
            grants{
                id
                projectTitle
                fiscalYear
            }
            clinical_trials{
                id
                nct_id
                brief_title
            }
            publications{
                id
                title
                shortReference
            }
            
        }
    }
`
export const QUERY_CORE_PROJECT_LIST_BY_PI = gql`
    query CoreProjectListByPI($str: String) {
        CoreProject(first:100,filter:{grants:{contactPIorProjectLeader:{lower_case_search_string_contains:$str}}})
        {
            id
            coreProjectNumber
            grants{
                id
                projectTitle
                fiscalYear
            }
            clinical_trials{
                id
                nct_id
                brief_title
            }
            publications{
                id
                title
                shortReference
            }

        }
    }
`
export const QUERY_CORE_PROJECT_LIST_BY_ORGANIZATION = gql`
    query CoreProjectListByOrganization($str: String) {
        CoreProject(first:100,filter:{grants:{organization:{lower_case_search_string_contains:$str}}})
        {
            id
            coreProjectNumber
            grants{
                id
                projectTitle
                fiscalYear
            }
            clinical_trials{
                id
                nct_id
                brief_title
            }
            publications{
                id
                title
                shortReference
            }

        }
    }
`
export const QUERY_CORE_PROJECT_LIST_BY_FUNDING_IC = gql`
    query CoreProjectListByFundingIC($str: String) {
        CoreProject(first:100,filter:{grants:{fundingIC:{lower_case_search_string_contains:$str}}})
        {
            id
            coreProjectNumber
            grants{
                id
                projectTitle
                fiscalYear
            }
            clinical_trials{
                id
                nct_id
                brief_title
            }
            publications{
                id
                title
                shortReference
            }

        }
    }
`
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
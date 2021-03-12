import gql from 'graphql-tag';

export const QUERY_PUBLICATION_LIST = gql`
    query PublicationList($str: String) {
        LiteratureReference(first:100, filter: {title_contains: $str}){
            id
            PMID
            DOI
            title
            shortReference
            authors{
                id
                firstInitial
                surname
            }
            journal{
                id
                name
            }
            publicationYear
            firstPage
            lastPage
            volume
            abstract
            coreProjects{
                id
                coreProjectNumber
            }
        }
     }
`

export const QUERY_PUBLICATION_LIST_BY_AUTHOR = gql`
    query PublicationsByAuthor($str:String){
        Author(first:100, filter:{lower_case_search_string_contains:$str}){
            id
            firstInitial
            surname
            references{
                id
                PMID
                DOI
                title
                shortReference
                authors{
                    id
                    firstInitial
                    surname
                }
                journal{
                    id
                    name
                }
                publicationYear
                firstPage
                lastPage
                volume
                abstract
                coreProjects{
                    id
                    coreProjectNumber
                }
            }
        }
    }
    `
export const QUERY_PUBLICATION_LIST_BY_JOURNAL = gql`
    query PublicationsByJournal($str:String){
        Journal(first:100, filter:{lower_case_search_string_contains:$str}){
            id
            name
            references{
                id
                PMID
                DOI
                title
                shortReference
                authors{
                    id
                    firstInitial
                    surname
                }
                journal{
                    id
                    name
                }
                publicationYear
                firstPage
                lastPage
                volume
                abstract
                coreProjects{
                    id
                    coreProjectNumber
                }
            }
        }
    }
`

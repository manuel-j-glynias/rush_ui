import gql from 'graphql-tag';

export const QUERY_PUBLICATION = gql`
    query publication($id:ID){
        LiteratureReference(id:$id){
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

        }
    }
`
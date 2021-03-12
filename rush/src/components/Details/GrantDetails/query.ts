import gql from 'graphql-tag';

export const QUERY_GRANT = gql`
    query grant($id:ID){
        NIHGrant(id:$id) {
            id
            activity
            IC
            applicationID
            projectNumber
            serialNumber
            CFDACode
            FOA
            projectTitle
            awardNoticeDate
            fiscalYear
            supportYear
            budgetStartDate
            budgetEndDate
            projectEndDate
            projectStartDate
            organization {
                id
                organizationID
                name
                city
                state
                country
                type
            }
            department
            contactPIorProjectLeader {
                id
                firstName
                middleName
                surname
                personID
            }
            totalCost
            type
            totalCost_IC
            totalCost_SubProjects
            directCost_IC
            inDirectCost_IC
            fundingIC {
                id
                name
            }
            fundingMechanism
            nihSpendingCategorization
            otherPIorProjectLeaders
            programOfficialInformation
            publicHealthRelevance
            studySection
            administeringIC {
                id
                name
            }
            abstract
        }
    }

`
import React, {Fragment} from 'react'
import {GrantQuery} from "../../../generated/graphql";
import './styles.css';
import {Link} from "react-router-dom";

interface Props {
    data: GrantQuery;
}

const className = 'GrantDetails'

const GrantDetails: React.FC<Props> = ({data}) => {

    const [show_abstract, set_show_abstract] = React.useState<boolean>(false)


    const show_as_dollars = (d:number): string => {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',

            // These options are needed to round to whole numbers if that's what you want.
            //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
            maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
        });
        return formatter.format(d)
    }




    return (
        <Fragment>
        {data && data.NIHGrant && data.NIHGrant[0] &&
            <div className={show_abstract ? `${className}__Details_Panel_with_Abstract` :`${className}__Details_Panel`}>
                <div className={`${className}__DetailsTable`}>
                    <div className={`${className}__DetailsRow`}>
                        <div className={`${className}__DetailsCellLeft`}>Project Number:</div>
                        <div className={`${className}__DetailsCellRight`}>{data.NIHGrant[0].projectNumber}</div>
                        <div className={`${className}__DetailsCellLeft`}>Application ID:</div>
                        <div className={`${className}__DetailsCellRightSmall`}>{data.NIHGrant[0].applicationID}</div>
                        <div className={`${className}__DetailsCellLeft`}>Serial Number:</div>
                        <div className={`${className}__DetailsCellRightSmall`}>{data.NIHGrant[0].serialNumber}</div>

                    </div>
                    <div className={`${className}__DetailsRow`}>
                        <div className={`${className}__DetailsCellLeft`}>Budget start/end:</div>
                        <div className={`${className}__DetailsCellRight`}>{data.NIHGrant[0].budgetStartDate} / {data.NIHGrant[0].budgetEndDate}</div>
                        <div className={`${className}__DetailsCellLeft`}>Project start/end:</div>
                        <div className={`${className}__DetailsCellRight`}>{data.NIHGrant[0].projectStartDate} / {data.NIHGrant[0].projectEndDate}</div>
                        <div className={`${className}__DetailsCellLeft`}>Award Notice Date:</div>
                        <div className={`${className}__DetailsCellRight`}>{data.NIHGrant[0].awardNoticeDate} </div>

                    </div>

                    <div className={`${className}__DetailsRow`}>
                        <div className={`${className}__DetailsCellLeft`}>Principal Investigator:</div>
                        <div className={`${className}__DetailsCellRight`}>
                            <Link to={`/core_projects/Principal Investigator/${encodeURIComponent(
                                (data.NIHGrant[0].contactPIorProjectLeader.firstName + ' ' + data.NIHGrant[0].contactPIorProjectLeader.surname).toLowerCase())}`} >
                            {data.NIHGrant[0].contactPIorProjectLeader.firstName} {data.NIHGrant[0].contactPIorProjectLeader.middleName} {data.NIHGrant[0].contactPIorProjectLeader.surname} </Link>
                        </div>
                        <div className={`${className}__DetailsCellLeft`}>Person ID:</div>
                        <div className={`${className}__DetailsCellRight`}>{data.NIHGrant[0].contactPIorProjectLeader.personID} </div>
                        <div className={`${className}__DetailsCellLeft`}>Other Project Leaders:</div>
                        <div className={`${className}__DetailsCellRight`}>{data.NIHGrant[0].otherPIorProjectLeaders} </div>

                    </div>


                    <div className={`${className}__DetailsRow`}>
                        <div className={`${className}__DetailsCellLeft`}>Organization Name:</div>
                        <div className={`${className}__DetailsCellRight`}>
                            <Link to={`/core_projects/Organization/${encodeURIComponent(
                                data.NIHGrant[0].organization.name.toLowerCase())}`} >
                                {data.NIHGrant[0].organization.name} </Link>

                        </div>
                        <div className={`${className}__DetailsCellLeft`}>Organization ID:</div>
                        <div className={`${className}__DetailsCellRight`}>{data.NIHGrant[0].organization.organizationID} </div>
                        <div className={`${className}__DetailsCellLeft`}>Organization Type:</div>
                        <div className={`${className}__DetailsCellRight`}>{data.NIHGrant[0].organization.type} </div>

                    </div>

                    <div className={`${className}__DetailsRow`}>
                        <div className={`${className}__DetailsCellLeft`}>Organization City:</div>
                        <div className={`${className}__DetailsCellRight`}>{data.NIHGrant[0].organization.city} </div>
                        <div className={`${className}__DetailsCellLeft`}>Organization State:</div>
                        <div className={`${className}__DetailsCellRight`}>{data.NIHGrant[0].organization.state} </div>
                        <div className={`${className}__DetailsCellLeft`}>Organization Country:</div>
                        <div className={`${className}__DetailsCellRight`}>{data.NIHGrant[0].organization.country} </div>

                    </div>

                    <div className={`${className}__DetailsRow`}>
                        <div className={`${className}__DetailsCellLeft`}>Total Cost:</div>
                        <div className={`${className}__DetailsCellRight`}>{show_as_dollars(data.NIHGrant[0].totalCost)} </div>
                        <div className={`${className}__DetailsCellLeft`}>Sub-projects:</div>
                        <div className={`${className}__DetailsCellRight`}>{show_as_dollars(data.NIHGrant[0].totalCost_SubProjects)} </div>
                        <div className={`${className}__DetailsCellLeft`}>Funding Mechanism:</div>
                        <div className={`${className}__DetailsCellRight`}>{data.NIHGrant[0].fundingMechanism} </div>

                    </div>
                    <div className={`${className}__DetailsRow`}>
                        <div className={`${className}__DetailsCellLeft`}>Total Cost IC:</div>
                        <div className={`${className}__DetailsCellRight`}>{show_as_dollars(data.NIHGrant[0].totalCost_IC)} </div>
                        <div className={`${className}__DetailsCellLeft`}>Direct Cost IC:</div>
                        <div className={`${className}__DetailsCellRight`}>{show_as_dollars(data.NIHGrant[0].directCost_IC)} </div>
                        <div className={`${className}__DetailsCellLeft`}>Indirect Costs IC:</div>
                        <div className={`${className}__DetailsCellRight`}>{show_as_dollars(data.NIHGrant[0].inDirectCost_IC)} </div>

                    </div>

                    <div className={`${className}__DetailsRow`}>
                        <div className={`${className}__DetailsCellLeft`}>Administering IC:</div>
                        <div className={`${className}__DetailsCellRight`}>{data.NIHGrant[0].administeringIC.name} </div>
                        <div className={`${className}__DetailsCellLeft`}>Funding IC:</div>
                        <div className={`${className}__DetailsCellRight`}>
                            <Link to={`/core_projects/Funding IC/${encodeURIComponent(
                                data.NIHGrant[0].fundingIC.name.toLowerCase())}`} >
                                {data.NIHGrant[0].fundingIC.name}  </Link>

                        </div>
                        <div className={`${className}__DetailsCellLeft`}>Study Section:</div>
                        <div className={`${className}__DetailsCellRight`}>{data.NIHGrant[0].studySection} </div>

                    </div>

                    <div className={`${className}__DetailsRow`}>
                        <div className={`${className}__DetailsCellLeft`}>Program Officer:</div>
                        <div className={`${className}__DetailsCellRight`}>{data.NIHGrant[0].programOfficialInformation} </div>
                        <div className={`${className}__DetailsCellLeft`}>FOA:</div>
                        <div className={`${className}__DetailsCellRight`}>{data.NIHGrant[0].FOA} </div>
                        <div className={`${className}__DetailsCellLeft`}>CFDACode:</div>
                        <div className={`${className}__DetailsCellRight`}>{data.NIHGrant[0].CFDACode} </div>

                    </div>


                </div>
                <div>
                    {show_abstract ?
                        <span><i className="far fa-chevron-square-down"
                                 onClick={() => set_show_abstract(false)}>
                            </i>Abstract
                            <div  className={`${className}__Details_Abstract`}>
                                {data.NIHGrant[0].abstract}
                            </div>
                        </span>
                        :
                        <span><i className="far fa-chevron-square-right"
                                 onClick={() => set_show_abstract(true)}>
                                                </i>Abstract</span> }
                </div>
            </div>
        }
        </Fragment>
    )
}

export default GrantDetails;
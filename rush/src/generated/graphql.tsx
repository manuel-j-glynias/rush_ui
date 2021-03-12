import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Long: any;
};










export type _AuthorFilter = {
  AND?: Maybe<Array<_AuthorFilter>>;
  OR?: Maybe<Array<_AuthorFilter>>;
  firstInitial?: Maybe<Scalars['String']>;
  firstInitial_contains?: Maybe<Scalars['String']>;
  firstInitial_ends_with?: Maybe<Scalars['String']>;
  firstInitial_gt?: Maybe<Scalars['String']>;
  firstInitial_gte?: Maybe<Scalars['String']>;
  firstInitial_in?: Maybe<Array<Scalars['String']>>;
  firstInitial_lt?: Maybe<Scalars['String']>;
  firstInitial_lte?: Maybe<Scalars['String']>;
  firstInitial_not?: Maybe<Scalars['String']>;
  firstInitial_not_contains?: Maybe<Scalars['String']>;
  firstInitial_not_ends_with?: Maybe<Scalars['String']>;
  firstInitial_not_in?: Maybe<Array<Scalars['String']>>;
  firstInitial_not_starts_with?: Maybe<Scalars['String']>;
  firstInitial_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  lower_case_search_string?: Maybe<Scalars['String']>;
  lower_case_search_string_contains?: Maybe<Scalars['String']>;
  lower_case_search_string_ends_with?: Maybe<Scalars['String']>;
  lower_case_search_string_gt?: Maybe<Scalars['String']>;
  lower_case_search_string_gte?: Maybe<Scalars['String']>;
  lower_case_search_string_in?: Maybe<Array<Scalars['String']>>;
  lower_case_search_string_lt?: Maybe<Scalars['String']>;
  lower_case_search_string_lte?: Maybe<Scalars['String']>;
  lower_case_search_string_not?: Maybe<Scalars['String']>;
  lower_case_search_string_not_contains?: Maybe<Scalars['String']>;
  lower_case_search_string_not_ends_with?: Maybe<Scalars['String']>;
  lower_case_search_string_not_in?: Maybe<Array<Scalars['String']>>;
  lower_case_search_string_not_starts_with?: Maybe<Scalars['String']>;
  lower_case_search_string_starts_with?: Maybe<Scalars['String']>;
  references?: Maybe<_LiteratureReferenceFilter>;
  references_every?: Maybe<_LiteratureReferenceFilter>;
  references_in?: Maybe<_LiteratureReferenceFilter>;
  references_none?: Maybe<_LiteratureReferenceFilter>;
  references_not?: Maybe<_LiteratureReferenceFilter>;
  references_not_in?: Maybe<_LiteratureReferenceFilter>;
  references_single?: Maybe<_LiteratureReferenceFilter>;
  references_some?: Maybe<_LiteratureReferenceFilter>;
  surname?: Maybe<Scalars['String']>;
  surname_contains?: Maybe<Scalars['String']>;
  surname_ends_with?: Maybe<Scalars['String']>;
  surname_gt?: Maybe<Scalars['String']>;
  surname_gte?: Maybe<Scalars['String']>;
  surname_in?: Maybe<Array<Scalars['String']>>;
  surname_lt?: Maybe<Scalars['String']>;
  surname_lte?: Maybe<Scalars['String']>;
  surname_not?: Maybe<Scalars['String']>;
  surname_not_contains?: Maybe<Scalars['String']>;
  surname_not_ends_with?: Maybe<Scalars['String']>;
  surname_not_in?: Maybe<Array<Scalars['String']>>;
  surname_not_starts_with?: Maybe<Scalars['String']>;
  surname_starts_with?: Maybe<Scalars['String']>;
};

export enum _AuthorOrdering {
  FirstInitialAsc = 'firstInitial_asc',
  FirstInitialDesc = 'firstInitial_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  LowerCaseSearchStringAsc = 'lower_case_search_string_asc',
  LowerCaseSearchStringDesc = 'lower_case_search_string_desc',
  SurnameAsc = 'surname_asc',
  SurnameDesc = 'surname_desc'
}

export type _ClinicalTrialFilter = {
  AND?: Maybe<Array<_ClinicalTrialFilter>>;
  OR?: Maybe<Array<_ClinicalTrialFilter>>;
  brief_summary?: Maybe<Scalars['String']>;
  brief_summary_contains?: Maybe<Scalars['String']>;
  brief_summary_ends_with?: Maybe<Scalars['String']>;
  brief_summary_gt?: Maybe<Scalars['String']>;
  brief_summary_gte?: Maybe<Scalars['String']>;
  brief_summary_in?: Maybe<Array<Scalars['String']>>;
  brief_summary_lt?: Maybe<Scalars['String']>;
  brief_summary_lte?: Maybe<Scalars['String']>;
  brief_summary_not?: Maybe<Scalars['String']>;
  brief_summary_not_contains?: Maybe<Scalars['String']>;
  brief_summary_not_ends_with?: Maybe<Scalars['String']>;
  brief_summary_not_in?: Maybe<Array<Scalars['String']>>;
  brief_summary_not_starts_with?: Maybe<Scalars['String']>;
  brief_summary_starts_with?: Maybe<Scalars['String']>;
  brief_title?: Maybe<Scalars['String']>;
  brief_title_contains?: Maybe<Scalars['String']>;
  brief_title_ends_with?: Maybe<Scalars['String']>;
  brief_title_gt?: Maybe<Scalars['String']>;
  brief_title_gte?: Maybe<Scalars['String']>;
  brief_title_in?: Maybe<Array<Scalars['String']>>;
  brief_title_lt?: Maybe<Scalars['String']>;
  brief_title_lte?: Maybe<Scalars['String']>;
  brief_title_not?: Maybe<Scalars['String']>;
  brief_title_not_contains?: Maybe<Scalars['String']>;
  brief_title_not_ends_with?: Maybe<Scalars['String']>;
  brief_title_not_in?: Maybe<Array<Scalars['String']>>;
  brief_title_not_starts_with?: Maybe<Scalars['String']>;
  brief_title_starts_with?: Maybe<Scalars['String']>;
  conditions?: Maybe<Scalars['String']>;
  conditions_contains?: Maybe<Scalars['String']>;
  conditions_ends_with?: Maybe<Scalars['String']>;
  conditions_gt?: Maybe<Scalars['String']>;
  conditions_gte?: Maybe<Scalars['String']>;
  conditions_in?: Maybe<Array<Scalars['String']>>;
  conditions_lt?: Maybe<Scalars['String']>;
  conditions_lte?: Maybe<Scalars['String']>;
  conditions_not?: Maybe<Scalars['String']>;
  conditions_not_contains?: Maybe<Scalars['String']>;
  conditions_not_ends_with?: Maybe<Scalars['String']>;
  conditions_not_in?: Maybe<Array<Scalars['String']>>;
  conditions_not_starts_with?: Maybe<Scalars['String']>;
  conditions_starts_with?: Maybe<Scalars['String']>;
  coreProject?: Maybe<_CoreProjectFilter>;
  coreProject_in?: Maybe<_CoreProjectFilter>;
  coreProject_not?: Maybe<_CoreProjectFilter>;
  coreProject_not_in?: Maybe<_CoreProjectFilter>;
  detailed_description?: Maybe<Scalars['String']>;
  detailed_description_contains?: Maybe<Scalars['String']>;
  detailed_description_ends_with?: Maybe<Scalars['String']>;
  detailed_description_gt?: Maybe<Scalars['String']>;
  detailed_description_gte?: Maybe<Scalars['String']>;
  detailed_description_in?: Maybe<Array<Scalars['String']>>;
  detailed_description_lt?: Maybe<Scalars['String']>;
  detailed_description_lte?: Maybe<Scalars['String']>;
  detailed_description_not?: Maybe<Scalars['String']>;
  detailed_description_not_contains?: Maybe<Scalars['String']>;
  detailed_description_not_ends_with?: Maybe<Scalars['String']>;
  detailed_description_not_in?: Maybe<Array<Scalars['String']>>;
  detailed_description_not_starts_with?: Maybe<Scalars['String']>;
  detailed_description_starts_with?: Maybe<Scalars['String']>;
  drugs?: Maybe<Scalars['String']>;
  drugs_contains?: Maybe<Scalars['String']>;
  drugs_ends_with?: Maybe<Scalars['String']>;
  drugs_gt?: Maybe<Scalars['String']>;
  drugs_gte?: Maybe<Scalars['String']>;
  drugs_in?: Maybe<Array<Scalars['String']>>;
  drugs_lt?: Maybe<Scalars['String']>;
  drugs_lte?: Maybe<Scalars['String']>;
  drugs_not?: Maybe<Scalars['String']>;
  drugs_not_contains?: Maybe<Scalars['String']>;
  drugs_not_ends_with?: Maybe<Scalars['String']>;
  drugs_not_in?: Maybe<Array<Scalars['String']>>;
  drugs_not_starts_with?: Maybe<Scalars['String']>;
  drugs_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  lower_case_search_string?: Maybe<Scalars['String']>;
  lower_case_search_string_contains?: Maybe<Scalars['String']>;
  lower_case_search_string_ends_with?: Maybe<Scalars['String']>;
  lower_case_search_string_gt?: Maybe<Scalars['String']>;
  lower_case_search_string_gte?: Maybe<Scalars['String']>;
  lower_case_search_string_in?: Maybe<Array<Scalars['String']>>;
  lower_case_search_string_lt?: Maybe<Scalars['String']>;
  lower_case_search_string_lte?: Maybe<Scalars['String']>;
  lower_case_search_string_not?: Maybe<Scalars['String']>;
  lower_case_search_string_not_contains?: Maybe<Scalars['String']>;
  lower_case_search_string_not_ends_with?: Maybe<Scalars['String']>;
  lower_case_search_string_not_in?: Maybe<Array<Scalars['String']>>;
  lower_case_search_string_not_starts_with?: Maybe<Scalars['String']>;
  lower_case_search_string_starts_with?: Maybe<Scalars['String']>;
  nct_id?: Maybe<Scalars['String']>;
  nct_id_contains?: Maybe<Scalars['String']>;
  nct_id_ends_with?: Maybe<Scalars['String']>;
  nct_id_gt?: Maybe<Scalars['String']>;
  nct_id_gte?: Maybe<Scalars['String']>;
  nct_id_in?: Maybe<Array<Scalars['String']>>;
  nct_id_lt?: Maybe<Scalars['String']>;
  nct_id_lte?: Maybe<Scalars['String']>;
  nct_id_not?: Maybe<Scalars['String']>;
  nct_id_not_contains?: Maybe<Scalars['String']>;
  nct_id_not_ends_with?: Maybe<Scalars['String']>;
  nct_id_not_in?: Maybe<Array<Scalars['String']>>;
  nct_id_not_starts_with?: Maybe<Scalars['String']>;
  nct_id_starts_with?: Maybe<Scalars['String']>;
  official_title?: Maybe<Scalars['String']>;
  official_title_contains?: Maybe<Scalars['String']>;
  official_title_ends_with?: Maybe<Scalars['String']>;
  official_title_gt?: Maybe<Scalars['String']>;
  official_title_gte?: Maybe<Scalars['String']>;
  official_title_in?: Maybe<Array<Scalars['String']>>;
  official_title_lt?: Maybe<Scalars['String']>;
  official_title_lte?: Maybe<Scalars['String']>;
  official_title_not?: Maybe<Scalars['String']>;
  official_title_not_contains?: Maybe<Scalars['String']>;
  official_title_not_ends_with?: Maybe<Scalars['String']>;
  official_title_not_in?: Maybe<Array<Scalars['String']>>;
  official_title_not_starts_with?: Maybe<Scalars['String']>;
  official_title_starts_with?: Maybe<Scalars['String']>;
  phases?: Maybe<Scalars['String']>;
  phases_contains?: Maybe<Scalars['String']>;
  phases_ends_with?: Maybe<Scalars['String']>;
  phases_gt?: Maybe<Scalars['String']>;
  phases_gte?: Maybe<Scalars['String']>;
  phases_in?: Maybe<Array<Scalars['String']>>;
  phases_lt?: Maybe<Scalars['String']>;
  phases_lte?: Maybe<Scalars['String']>;
  phases_not?: Maybe<Scalars['String']>;
  phases_not_contains?: Maybe<Scalars['String']>;
  phases_not_ends_with?: Maybe<Scalars['String']>;
  phases_not_in?: Maybe<Array<Scalars['String']>>;
  phases_not_starts_with?: Maybe<Scalars['String']>;
  phases_starts_with?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  status_contains?: Maybe<Scalars['String']>;
  status_date?: Maybe<Scalars['String']>;
  status_date_contains?: Maybe<Scalars['String']>;
  status_date_ends_with?: Maybe<Scalars['String']>;
  status_date_gt?: Maybe<Scalars['String']>;
  status_date_gte?: Maybe<Scalars['String']>;
  status_date_in?: Maybe<Array<Scalars['String']>>;
  status_date_lt?: Maybe<Scalars['String']>;
  status_date_lte?: Maybe<Scalars['String']>;
  status_date_not?: Maybe<Scalars['String']>;
  status_date_not_contains?: Maybe<Scalars['String']>;
  status_date_not_ends_with?: Maybe<Scalars['String']>;
  status_date_not_in?: Maybe<Array<Scalars['String']>>;
  status_date_not_starts_with?: Maybe<Scalars['String']>;
  status_date_starts_with?: Maybe<Scalars['String']>;
  status_ends_with?: Maybe<Scalars['String']>;
  status_gt?: Maybe<Scalars['String']>;
  status_gte?: Maybe<Scalars['String']>;
  status_in?: Maybe<Array<Scalars['String']>>;
  status_lt?: Maybe<Scalars['String']>;
  status_lte?: Maybe<Scalars['String']>;
  status_not?: Maybe<Scalars['String']>;
  status_not_contains?: Maybe<Scalars['String']>;
  status_not_ends_with?: Maybe<Scalars['String']>;
  status_not_in?: Maybe<Array<Scalars['String']>>;
  status_not_starts_with?: Maybe<Scalars['String']>;
  status_starts_with?: Maybe<Scalars['String']>;
  study_type?: Maybe<Scalars['String']>;
  study_type_contains?: Maybe<Scalars['String']>;
  study_type_ends_with?: Maybe<Scalars['String']>;
  study_type_gt?: Maybe<Scalars['String']>;
  study_type_gte?: Maybe<Scalars['String']>;
  study_type_in?: Maybe<Array<Scalars['String']>>;
  study_type_lt?: Maybe<Scalars['String']>;
  study_type_lte?: Maybe<Scalars['String']>;
  study_type_not?: Maybe<Scalars['String']>;
  study_type_not_contains?: Maybe<Scalars['String']>;
  study_type_not_ends_with?: Maybe<Scalars['String']>;
  study_type_not_in?: Maybe<Array<Scalars['String']>>;
  study_type_not_starts_with?: Maybe<Scalars['String']>;
  study_type_starts_with?: Maybe<Scalars['String']>;
};

export enum _ClinicalTrialOrdering {
  BriefSummaryAsc = 'brief_summary_asc',
  BriefSummaryDesc = 'brief_summary_desc',
  BriefTitleAsc = 'brief_title_asc',
  BriefTitleDesc = 'brief_title_desc',
  ConditionsAsc = 'conditions_asc',
  ConditionsDesc = 'conditions_desc',
  DetailedDescriptionAsc = 'detailed_description_asc',
  DetailedDescriptionDesc = 'detailed_description_desc',
  DrugsAsc = 'drugs_asc',
  DrugsDesc = 'drugs_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  LowerCaseSearchStringAsc = 'lower_case_search_string_asc',
  LowerCaseSearchStringDesc = 'lower_case_search_string_desc',
  NctIdAsc = 'nct_id_asc',
  NctIdDesc = 'nct_id_desc',
  OfficialTitleAsc = 'official_title_asc',
  OfficialTitleDesc = 'official_title_desc',
  PhasesAsc = 'phases_asc',
  PhasesDesc = 'phases_desc',
  StatusAsc = 'status_asc',
  StatusDateAsc = 'status_date_asc',
  StatusDateDesc = 'status_date_desc',
  StatusDesc = 'status_desc',
  StudyTypeAsc = 'study_type_asc',
  StudyTypeDesc = 'study_type_desc'
}

export type _CoreProjectFilter = {
  AND?: Maybe<Array<_CoreProjectFilter>>;
  OR?: Maybe<Array<_CoreProjectFilter>>;
  clinical_trials?: Maybe<_ClinicalTrialFilter>;
  clinical_trials_every?: Maybe<_ClinicalTrialFilter>;
  clinical_trials_in?: Maybe<_ClinicalTrialFilter>;
  clinical_trials_none?: Maybe<_ClinicalTrialFilter>;
  clinical_trials_not?: Maybe<_ClinicalTrialFilter>;
  clinical_trials_not_in?: Maybe<_ClinicalTrialFilter>;
  clinical_trials_single?: Maybe<_ClinicalTrialFilter>;
  clinical_trials_some?: Maybe<_ClinicalTrialFilter>;
  coreProjectNumber?: Maybe<Scalars['String']>;
  coreProjectNumber_contains?: Maybe<Scalars['String']>;
  coreProjectNumber_ends_with?: Maybe<Scalars['String']>;
  coreProjectNumber_gt?: Maybe<Scalars['String']>;
  coreProjectNumber_gte?: Maybe<Scalars['String']>;
  coreProjectNumber_in?: Maybe<Array<Scalars['String']>>;
  coreProjectNumber_lt?: Maybe<Scalars['String']>;
  coreProjectNumber_lte?: Maybe<Scalars['String']>;
  coreProjectNumber_not?: Maybe<Scalars['String']>;
  coreProjectNumber_not_contains?: Maybe<Scalars['String']>;
  coreProjectNumber_not_ends_with?: Maybe<Scalars['String']>;
  coreProjectNumber_not_in?: Maybe<Array<Scalars['String']>>;
  coreProjectNumber_not_starts_with?: Maybe<Scalars['String']>;
  coreProjectNumber_starts_with?: Maybe<Scalars['String']>;
  grants?: Maybe<_NihGrantFilter>;
  grants_every?: Maybe<_NihGrantFilter>;
  grants_in?: Maybe<_NihGrantFilter>;
  grants_none?: Maybe<_NihGrantFilter>;
  grants_not?: Maybe<_NihGrantFilter>;
  grants_not_in?: Maybe<_NihGrantFilter>;
  grants_single?: Maybe<_NihGrantFilter>;
  grants_some?: Maybe<_NihGrantFilter>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  publications?: Maybe<_LiteratureReferenceFilter>;
  publications_every?: Maybe<_LiteratureReferenceFilter>;
  publications_in?: Maybe<_LiteratureReferenceFilter>;
  publications_none?: Maybe<_LiteratureReferenceFilter>;
  publications_not?: Maybe<_LiteratureReferenceFilter>;
  publications_not_in?: Maybe<_LiteratureReferenceFilter>;
  publications_single?: Maybe<_LiteratureReferenceFilter>;
  publications_some?: Maybe<_LiteratureReferenceFilter>;
};

export enum _CoreProjectOrdering {
  CoreProjectNumberAsc = 'coreProjectNumber_asc',
  CoreProjectNumberDesc = 'coreProjectNumber_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc'
}

export type _FundedOrganizationFilter = {
  AND?: Maybe<Array<_FundedOrganizationFilter>>;
  OR?: Maybe<Array<_FundedOrganizationFilter>>;
  city?: Maybe<Scalars['String']>;
  city_contains?: Maybe<Scalars['String']>;
  city_ends_with?: Maybe<Scalars['String']>;
  city_gt?: Maybe<Scalars['String']>;
  city_gte?: Maybe<Scalars['String']>;
  city_in?: Maybe<Array<Scalars['String']>>;
  city_lt?: Maybe<Scalars['String']>;
  city_lte?: Maybe<Scalars['String']>;
  city_not?: Maybe<Scalars['String']>;
  city_not_contains?: Maybe<Scalars['String']>;
  city_not_ends_with?: Maybe<Scalars['String']>;
  city_not_in?: Maybe<Array<Scalars['String']>>;
  city_not_starts_with?: Maybe<Scalars['String']>;
  city_starts_with?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  country_contains?: Maybe<Scalars['String']>;
  country_ends_with?: Maybe<Scalars['String']>;
  country_gt?: Maybe<Scalars['String']>;
  country_gte?: Maybe<Scalars['String']>;
  country_in?: Maybe<Array<Scalars['String']>>;
  country_lt?: Maybe<Scalars['String']>;
  country_lte?: Maybe<Scalars['String']>;
  country_not?: Maybe<Scalars['String']>;
  country_not_contains?: Maybe<Scalars['String']>;
  country_not_ends_with?: Maybe<Scalars['String']>;
  country_not_in?: Maybe<Array<Scalars['String']>>;
  country_not_starts_with?: Maybe<Scalars['String']>;
  country_starts_with?: Maybe<Scalars['String']>;
  grants?: Maybe<_NihGrantFilter>;
  grants_every?: Maybe<_NihGrantFilter>;
  grants_in?: Maybe<_NihGrantFilter>;
  grants_none?: Maybe<_NihGrantFilter>;
  grants_not?: Maybe<_NihGrantFilter>;
  grants_not_in?: Maybe<_NihGrantFilter>;
  grants_single?: Maybe<_NihGrantFilter>;
  grants_some?: Maybe<_NihGrantFilter>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  lower_case_search_string?: Maybe<Scalars['String']>;
  lower_case_search_string_contains?: Maybe<Scalars['String']>;
  lower_case_search_string_ends_with?: Maybe<Scalars['String']>;
  lower_case_search_string_gt?: Maybe<Scalars['String']>;
  lower_case_search_string_gte?: Maybe<Scalars['String']>;
  lower_case_search_string_in?: Maybe<Array<Scalars['String']>>;
  lower_case_search_string_lt?: Maybe<Scalars['String']>;
  lower_case_search_string_lte?: Maybe<Scalars['String']>;
  lower_case_search_string_not?: Maybe<Scalars['String']>;
  lower_case_search_string_not_contains?: Maybe<Scalars['String']>;
  lower_case_search_string_not_ends_with?: Maybe<Scalars['String']>;
  lower_case_search_string_not_in?: Maybe<Array<Scalars['String']>>;
  lower_case_search_string_not_starts_with?: Maybe<Scalars['String']>;
  lower_case_search_string_starts_with?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_lt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  organizationID?: Maybe<Scalars['String']>;
  organizationID_contains?: Maybe<Scalars['String']>;
  organizationID_ends_with?: Maybe<Scalars['String']>;
  organizationID_gt?: Maybe<Scalars['String']>;
  organizationID_gte?: Maybe<Scalars['String']>;
  organizationID_in?: Maybe<Array<Scalars['String']>>;
  organizationID_lt?: Maybe<Scalars['String']>;
  organizationID_lte?: Maybe<Scalars['String']>;
  organizationID_not?: Maybe<Scalars['String']>;
  organizationID_not_contains?: Maybe<Scalars['String']>;
  organizationID_not_ends_with?: Maybe<Scalars['String']>;
  organizationID_not_in?: Maybe<Array<Scalars['String']>>;
  organizationID_not_starts_with?: Maybe<Scalars['String']>;
  organizationID_starts_with?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  state_contains?: Maybe<Scalars['String']>;
  state_ends_with?: Maybe<Scalars['String']>;
  state_gt?: Maybe<Scalars['String']>;
  state_gte?: Maybe<Scalars['String']>;
  state_in?: Maybe<Array<Scalars['String']>>;
  state_lt?: Maybe<Scalars['String']>;
  state_lte?: Maybe<Scalars['String']>;
  state_not?: Maybe<Scalars['String']>;
  state_not_contains?: Maybe<Scalars['String']>;
  state_not_ends_with?: Maybe<Scalars['String']>;
  state_not_in?: Maybe<Array<Scalars['String']>>;
  state_not_starts_with?: Maybe<Scalars['String']>;
  state_starts_with?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  type_contains?: Maybe<Scalars['String']>;
  type_ends_with?: Maybe<Scalars['String']>;
  type_gt?: Maybe<Scalars['String']>;
  type_gte?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Scalars['String']>>;
  type_lt?: Maybe<Scalars['String']>;
  type_lte?: Maybe<Scalars['String']>;
  type_not?: Maybe<Scalars['String']>;
  type_not_contains?: Maybe<Scalars['String']>;
  type_not_ends_with?: Maybe<Scalars['String']>;
  type_not_in?: Maybe<Array<Scalars['String']>>;
  type_not_starts_with?: Maybe<Scalars['String']>;
  type_starts_with?: Maybe<Scalars['String']>;
};

export enum _FundedOrganizationOrdering {
  CityAsc = 'city_asc',
  CityDesc = 'city_desc',
  CountryAsc = 'country_asc',
  CountryDesc = 'country_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  LowerCaseSearchStringAsc = 'lower_case_search_string_asc',
  LowerCaseSearchStringDesc = 'lower_case_search_string_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  OrganizationIdAsc = 'organizationID_asc',
  OrganizationIdDesc = 'organizationID_desc',
  StateAsc = 'state_asc',
  StateDesc = 'state_desc',
  TypeAsc = 'type_asc',
  TypeDesc = 'type_desc'
}

export type _JournalFilter = {
  AND?: Maybe<Array<_JournalFilter>>;
  OR?: Maybe<Array<_JournalFilter>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  lower_case_search_string?: Maybe<Scalars['String']>;
  lower_case_search_string_contains?: Maybe<Scalars['String']>;
  lower_case_search_string_ends_with?: Maybe<Scalars['String']>;
  lower_case_search_string_gt?: Maybe<Scalars['String']>;
  lower_case_search_string_gte?: Maybe<Scalars['String']>;
  lower_case_search_string_in?: Maybe<Array<Scalars['String']>>;
  lower_case_search_string_lt?: Maybe<Scalars['String']>;
  lower_case_search_string_lte?: Maybe<Scalars['String']>;
  lower_case_search_string_not?: Maybe<Scalars['String']>;
  lower_case_search_string_not_contains?: Maybe<Scalars['String']>;
  lower_case_search_string_not_ends_with?: Maybe<Scalars['String']>;
  lower_case_search_string_not_in?: Maybe<Array<Scalars['String']>>;
  lower_case_search_string_not_starts_with?: Maybe<Scalars['String']>;
  lower_case_search_string_starts_with?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_lt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  references?: Maybe<_LiteratureReferenceFilter>;
  references_every?: Maybe<_LiteratureReferenceFilter>;
  references_in?: Maybe<_LiteratureReferenceFilter>;
  references_none?: Maybe<_LiteratureReferenceFilter>;
  references_not?: Maybe<_LiteratureReferenceFilter>;
  references_not_in?: Maybe<_LiteratureReferenceFilter>;
  references_single?: Maybe<_LiteratureReferenceFilter>;
  references_some?: Maybe<_LiteratureReferenceFilter>;
};

export enum _JournalOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  LowerCaseSearchStringAsc = 'lower_case_search_string_asc',
  LowerCaseSearchStringDesc = 'lower_case_search_string_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc'
}

export type _LiteratureReferenceFilter = {
  AND?: Maybe<Array<_LiteratureReferenceFilter>>;
  DOI?: Maybe<Scalars['String']>;
  DOI_contains?: Maybe<Scalars['String']>;
  DOI_ends_with?: Maybe<Scalars['String']>;
  DOI_gt?: Maybe<Scalars['String']>;
  DOI_gte?: Maybe<Scalars['String']>;
  DOI_in?: Maybe<Array<Scalars['String']>>;
  DOI_lt?: Maybe<Scalars['String']>;
  DOI_lte?: Maybe<Scalars['String']>;
  DOI_not?: Maybe<Scalars['String']>;
  DOI_not_contains?: Maybe<Scalars['String']>;
  DOI_not_ends_with?: Maybe<Scalars['String']>;
  DOI_not_in?: Maybe<Array<Scalars['String']>>;
  DOI_not_starts_with?: Maybe<Scalars['String']>;
  DOI_starts_with?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<_LiteratureReferenceFilter>>;
  PMID?: Maybe<Scalars['String']>;
  PMID_contains?: Maybe<Scalars['String']>;
  PMID_ends_with?: Maybe<Scalars['String']>;
  PMID_gt?: Maybe<Scalars['String']>;
  PMID_gte?: Maybe<Scalars['String']>;
  PMID_in?: Maybe<Array<Scalars['String']>>;
  PMID_lt?: Maybe<Scalars['String']>;
  PMID_lte?: Maybe<Scalars['String']>;
  PMID_not?: Maybe<Scalars['String']>;
  PMID_not_contains?: Maybe<Scalars['String']>;
  PMID_not_ends_with?: Maybe<Scalars['String']>;
  PMID_not_in?: Maybe<Array<Scalars['String']>>;
  PMID_not_starts_with?: Maybe<Scalars['String']>;
  PMID_starts_with?: Maybe<Scalars['String']>;
  abstract?: Maybe<Scalars['String']>;
  abstract_contains?: Maybe<Scalars['String']>;
  abstract_ends_with?: Maybe<Scalars['String']>;
  abstract_gt?: Maybe<Scalars['String']>;
  abstract_gte?: Maybe<Scalars['String']>;
  abstract_in?: Maybe<Array<Scalars['String']>>;
  abstract_lt?: Maybe<Scalars['String']>;
  abstract_lte?: Maybe<Scalars['String']>;
  abstract_not?: Maybe<Scalars['String']>;
  abstract_not_contains?: Maybe<Scalars['String']>;
  abstract_not_ends_with?: Maybe<Scalars['String']>;
  abstract_not_in?: Maybe<Array<Scalars['String']>>;
  abstract_not_starts_with?: Maybe<Scalars['String']>;
  abstract_starts_with?: Maybe<Scalars['String']>;
  authors?: Maybe<_AuthorFilter>;
  authors_every?: Maybe<_AuthorFilter>;
  authors_in?: Maybe<_AuthorFilter>;
  authors_none?: Maybe<_AuthorFilter>;
  authors_not?: Maybe<_AuthorFilter>;
  authors_not_in?: Maybe<_AuthorFilter>;
  authors_single?: Maybe<_AuthorFilter>;
  authors_some?: Maybe<_AuthorFilter>;
  coreProjects?: Maybe<_CoreProjectFilter>;
  coreProjects_every?: Maybe<_CoreProjectFilter>;
  coreProjects_in?: Maybe<_CoreProjectFilter>;
  coreProjects_none?: Maybe<_CoreProjectFilter>;
  coreProjects_not?: Maybe<_CoreProjectFilter>;
  coreProjects_not_in?: Maybe<_CoreProjectFilter>;
  coreProjects_single?: Maybe<_CoreProjectFilter>;
  coreProjects_some?: Maybe<_CoreProjectFilter>;
  firstPage?: Maybe<Scalars['String']>;
  firstPage_contains?: Maybe<Scalars['String']>;
  firstPage_ends_with?: Maybe<Scalars['String']>;
  firstPage_gt?: Maybe<Scalars['String']>;
  firstPage_gte?: Maybe<Scalars['String']>;
  firstPage_in?: Maybe<Array<Scalars['String']>>;
  firstPage_lt?: Maybe<Scalars['String']>;
  firstPage_lte?: Maybe<Scalars['String']>;
  firstPage_not?: Maybe<Scalars['String']>;
  firstPage_not_contains?: Maybe<Scalars['String']>;
  firstPage_not_ends_with?: Maybe<Scalars['String']>;
  firstPage_not_in?: Maybe<Array<Scalars['String']>>;
  firstPage_not_starts_with?: Maybe<Scalars['String']>;
  firstPage_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  journal?: Maybe<_JournalFilter>;
  journal_in?: Maybe<_JournalFilter>;
  journal_not?: Maybe<_JournalFilter>;
  journal_not_in?: Maybe<_JournalFilter>;
  lastPage?: Maybe<Scalars['String']>;
  lastPage_contains?: Maybe<Scalars['String']>;
  lastPage_ends_with?: Maybe<Scalars['String']>;
  lastPage_gt?: Maybe<Scalars['String']>;
  lastPage_gte?: Maybe<Scalars['String']>;
  lastPage_in?: Maybe<Array<Scalars['String']>>;
  lastPage_lt?: Maybe<Scalars['String']>;
  lastPage_lte?: Maybe<Scalars['String']>;
  lastPage_not?: Maybe<Scalars['String']>;
  lastPage_not_contains?: Maybe<Scalars['String']>;
  lastPage_not_ends_with?: Maybe<Scalars['String']>;
  lastPage_not_in?: Maybe<Array<Scalars['String']>>;
  lastPage_not_starts_with?: Maybe<Scalars['String']>;
  lastPage_starts_with?: Maybe<Scalars['String']>;
  lower_case_search_string?: Maybe<Scalars['String']>;
  lower_case_search_string_contains?: Maybe<Scalars['String']>;
  lower_case_search_string_ends_with?: Maybe<Scalars['String']>;
  lower_case_search_string_gt?: Maybe<Scalars['String']>;
  lower_case_search_string_gte?: Maybe<Scalars['String']>;
  lower_case_search_string_in?: Maybe<Array<Scalars['String']>>;
  lower_case_search_string_lt?: Maybe<Scalars['String']>;
  lower_case_search_string_lte?: Maybe<Scalars['String']>;
  lower_case_search_string_not?: Maybe<Scalars['String']>;
  lower_case_search_string_not_contains?: Maybe<Scalars['String']>;
  lower_case_search_string_not_ends_with?: Maybe<Scalars['String']>;
  lower_case_search_string_not_in?: Maybe<Array<Scalars['String']>>;
  lower_case_search_string_not_starts_with?: Maybe<Scalars['String']>;
  lower_case_search_string_starts_with?: Maybe<Scalars['String']>;
  publicationYear?: Maybe<Scalars['String']>;
  publicationYear_contains?: Maybe<Scalars['String']>;
  publicationYear_ends_with?: Maybe<Scalars['String']>;
  publicationYear_gt?: Maybe<Scalars['String']>;
  publicationYear_gte?: Maybe<Scalars['String']>;
  publicationYear_in?: Maybe<Array<Scalars['String']>>;
  publicationYear_lt?: Maybe<Scalars['String']>;
  publicationYear_lte?: Maybe<Scalars['String']>;
  publicationYear_not?: Maybe<Scalars['String']>;
  publicationYear_not_contains?: Maybe<Scalars['String']>;
  publicationYear_not_ends_with?: Maybe<Scalars['String']>;
  publicationYear_not_in?: Maybe<Array<Scalars['String']>>;
  publicationYear_not_starts_with?: Maybe<Scalars['String']>;
  publicationYear_starts_with?: Maybe<Scalars['String']>;
  shortReference?: Maybe<Scalars['String']>;
  shortReference_contains?: Maybe<Scalars['String']>;
  shortReference_ends_with?: Maybe<Scalars['String']>;
  shortReference_gt?: Maybe<Scalars['String']>;
  shortReference_gte?: Maybe<Scalars['String']>;
  shortReference_in?: Maybe<Array<Scalars['String']>>;
  shortReference_lt?: Maybe<Scalars['String']>;
  shortReference_lte?: Maybe<Scalars['String']>;
  shortReference_not?: Maybe<Scalars['String']>;
  shortReference_not_contains?: Maybe<Scalars['String']>;
  shortReference_not_ends_with?: Maybe<Scalars['String']>;
  shortReference_not_in?: Maybe<Array<Scalars['String']>>;
  shortReference_not_starts_with?: Maybe<Scalars['String']>;
  shortReference_starts_with?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_ends_with?: Maybe<Scalars['String']>;
  title_gt?: Maybe<Scalars['String']>;
  title_gte?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Scalars['String']>>;
  title_lt?: Maybe<Scalars['String']>;
  title_lte?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_not_ends_with?: Maybe<Scalars['String']>;
  title_not_in?: Maybe<Array<Scalars['String']>>;
  title_not_starts_with?: Maybe<Scalars['String']>;
  title_starts_with?: Maybe<Scalars['String']>;
  volume?: Maybe<Scalars['String']>;
  volume_contains?: Maybe<Scalars['String']>;
  volume_ends_with?: Maybe<Scalars['String']>;
  volume_gt?: Maybe<Scalars['String']>;
  volume_gte?: Maybe<Scalars['String']>;
  volume_in?: Maybe<Array<Scalars['String']>>;
  volume_lt?: Maybe<Scalars['String']>;
  volume_lte?: Maybe<Scalars['String']>;
  volume_not?: Maybe<Scalars['String']>;
  volume_not_contains?: Maybe<Scalars['String']>;
  volume_not_ends_with?: Maybe<Scalars['String']>;
  volume_not_in?: Maybe<Array<Scalars['String']>>;
  volume_not_starts_with?: Maybe<Scalars['String']>;
  volume_starts_with?: Maybe<Scalars['String']>;
};

export enum _LiteratureReferenceOrdering {
  DoiAsc = 'DOI_asc',
  DoiDesc = 'DOI_desc',
  PmidAsc = 'PMID_asc',
  PmidDesc = 'PMID_desc',
  AbstractAsc = 'abstract_asc',
  AbstractDesc = 'abstract_desc',
  FirstPageAsc = 'firstPage_asc',
  FirstPageDesc = 'firstPage_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  LastPageAsc = 'lastPage_asc',
  LastPageDesc = 'lastPage_desc',
  LowerCaseSearchStringAsc = 'lower_case_search_string_asc',
  LowerCaseSearchStringDesc = 'lower_case_search_string_desc',
  PublicationYearAsc = 'publicationYear_asc',
  PublicationYearDesc = 'publicationYear_desc',
  ShortReferenceAsc = 'shortReference_asc',
  ShortReferenceDesc = 'shortReference_desc',
  TitleAsc = 'title_asc',
  TitleDesc = 'title_desc',
  VolumeAsc = 'volume_asc',
  VolumeDesc = 'volume_desc'
}

export type _NihGrantFilter = {
  AND?: Maybe<Array<_NihGrantFilter>>;
  CFDACode?: Maybe<Scalars['String']>;
  CFDACode_contains?: Maybe<Scalars['String']>;
  CFDACode_ends_with?: Maybe<Scalars['String']>;
  CFDACode_gt?: Maybe<Scalars['String']>;
  CFDACode_gte?: Maybe<Scalars['String']>;
  CFDACode_in?: Maybe<Array<Scalars['String']>>;
  CFDACode_lt?: Maybe<Scalars['String']>;
  CFDACode_lte?: Maybe<Scalars['String']>;
  CFDACode_not?: Maybe<Scalars['String']>;
  CFDACode_not_contains?: Maybe<Scalars['String']>;
  CFDACode_not_ends_with?: Maybe<Scalars['String']>;
  CFDACode_not_in?: Maybe<Array<Scalars['String']>>;
  CFDACode_not_starts_with?: Maybe<Scalars['String']>;
  CFDACode_starts_with?: Maybe<Scalars['String']>;
  FOA?: Maybe<Scalars['String']>;
  FOA_contains?: Maybe<Scalars['String']>;
  FOA_ends_with?: Maybe<Scalars['String']>;
  FOA_gt?: Maybe<Scalars['String']>;
  FOA_gte?: Maybe<Scalars['String']>;
  FOA_in?: Maybe<Array<Scalars['String']>>;
  FOA_lt?: Maybe<Scalars['String']>;
  FOA_lte?: Maybe<Scalars['String']>;
  FOA_not?: Maybe<Scalars['String']>;
  FOA_not_contains?: Maybe<Scalars['String']>;
  FOA_not_ends_with?: Maybe<Scalars['String']>;
  FOA_not_in?: Maybe<Array<Scalars['String']>>;
  FOA_not_starts_with?: Maybe<Scalars['String']>;
  FOA_starts_with?: Maybe<Scalars['String']>;
  IC?: Maybe<Scalars['String']>;
  IC_contains?: Maybe<Scalars['String']>;
  IC_ends_with?: Maybe<Scalars['String']>;
  IC_gt?: Maybe<Scalars['String']>;
  IC_gte?: Maybe<Scalars['String']>;
  IC_in?: Maybe<Array<Scalars['String']>>;
  IC_lt?: Maybe<Scalars['String']>;
  IC_lte?: Maybe<Scalars['String']>;
  IC_not?: Maybe<Scalars['String']>;
  IC_not_contains?: Maybe<Scalars['String']>;
  IC_not_ends_with?: Maybe<Scalars['String']>;
  IC_not_in?: Maybe<Array<Scalars['String']>>;
  IC_not_starts_with?: Maybe<Scalars['String']>;
  IC_starts_with?: Maybe<Scalars['String']>;
  NIHCOVID19Response?: Maybe<Scalars['String']>;
  NIHCOVID19Response_contains?: Maybe<Scalars['String']>;
  NIHCOVID19Response_ends_with?: Maybe<Scalars['String']>;
  NIHCOVID19Response_gt?: Maybe<Scalars['String']>;
  NIHCOVID19Response_gte?: Maybe<Scalars['String']>;
  NIHCOVID19Response_in?: Maybe<Array<Scalars['String']>>;
  NIHCOVID19Response_lt?: Maybe<Scalars['String']>;
  NIHCOVID19Response_lte?: Maybe<Scalars['String']>;
  NIHCOVID19Response_not?: Maybe<Scalars['String']>;
  NIHCOVID19Response_not_contains?: Maybe<Scalars['String']>;
  NIHCOVID19Response_not_ends_with?: Maybe<Scalars['String']>;
  NIHCOVID19Response_not_in?: Maybe<Array<Scalars['String']>>;
  NIHCOVID19Response_not_starts_with?: Maybe<Scalars['String']>;
  NIHCOVID19Response_starts_with?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<_NihGrantFilter>>;
  abstract?: Maybe<Scalars['String']>;
  abstract_contains?: Maybe<Scalars['String']>;
  abstract_ends_with?: Maybe<Scalars['String']>;
  abstract_gt?: Maybe<Scalars['String']>;
  abstract_gte?: Maybe<Scalars['String']>;
  abstract_in?: Maybe<Array<Scalars['String']>>;
  abstract_lt?: Maybe<Scalars['String']>;
  abstract_lte?: Maybe<Scalars['String']>;
  abstract_not?: Maybe<Scalars['String']>;
  abstract_not_contains?: Maybe<Scalars['String']>;
  abstract_not_ends_with?: Maybe<Scalars['String']>;
  abstract_not_in?: Maybe<Array<Scalars['String']>>;
  abstract_not_starts_with?: Maybe<Scalars['String']>;
  abstract_starts_with?: Maybe<Scalars['String']>;
  activity?: Maybe<Scalars['String']>;
  activity_contains?: Maybe<Scalars['String']>;
  activity_ends_with?: Maybe<Scalars['String']>;
  activity_gt?: Maybe<Scalars['String']>;
  activity_gte?: Maybe<Scalars['String']>;
  activity_in?: Maybe<Array<Scalars['String']>>;
  activity_lt?: Maybe<Scalars['String']>;
  activity_lte?: Maybe<Scalars['String']>;
  activity_not?: Maybe<Scalars['String']>;
  activity_not_contains?: Maybe<Scalars['String']>;
  activity_not_ends_with?: Maybe<Scalars['String']>;
  activity_not_in?: Maybe<Array<Scalars['String']>>;
  activity_not_starts_with?: Maybe<Scalars['String']>;
  activity_starts_with?: Maybe<Scalars['String']>;
  administeringIC?: Maybe<_NihInstituteOrCenterFilter>;
  administeringIC_in?: Maybe<_NihInstituteOrCenterFilter>;
  administeringIC_not?: Maybe<_NihInstituteOrCenterFilter>;
  administeringIC_not_in?: Maybe<_NihInstituteOrCenterFilter>;
  applicationID?: Maybe<Scalars['String']>;
  applicationID_contains?: Maybe<Scalars['String']>;
  applicationID_ends_with?: Maybe<Scalars['String']>;
  applicationID_gt?: Maybe<Scalars['String']>;
  applicationID_gte?: Maybe<Scalars['String']>;
  applicationID_in?: Maybe<Array<Scalars['String']>>;
  applicationID_lt?: Maybe<Scalars['String']>;
  applicationID_lte?: Maybe<Scalars['String']>;
  applicationID_not?: Maybe<Scalars['String']>;
  applicationID_not_contains?: Maybe<Scalars['String']>;
  applicationID_not_ends_with?: Maybe<Scalars['String']>;
  applicationID_not_in?: Maybe<Array<Scalars['String']>>;
  applicationID_not_starts_with?: Maybe<Scalars['String']>;
  applicationID_starts_with?: Maybe<Scalars['String']>;
  awardNoticeDate?: Maybe<Scalars['String']>;
  awardNoticeDate_contains?: Maybe<Scalars['String']>;
  awardNoticeDate_ends_with?: Maybe<Scalars['String']>;
  awardNoticeDate_gt?: Maybe<Scalars['String']>;
  awardNoticeDate_gte?: Maybe<Scalars['String']>;
  awardNoticeDate_in?: Maybe<Array<Scalars['String']>>;
  awardNoticeDate_lt?: Maybe<Scalars['String']>;
  awardNoticeDate_lte?: Maybe<Scalars['String']>;
  awardNoticeDate_not?: Maybe<Scalars['String']>;
  awardNoticeDate_not_contains?: Maybe<Scalars['String']>;
  awardNoticeDate_not_ends_with?: Maybe<Scalars['String']>;
  awardNoticeDate_not_in?: Maybe<Array<Scalars['String']>>;
  awardNoticeDate_not_starts_with?: Maybe<Scalars['String']>;
  awardNoticeDate_starts_with?: Maybe<Scalars['String']>;
  budgetEndDate?: Maybe<Scalars['String']>;
  budgetEndDate_contains?: Maybe<Scalars['String']>;
  budgetEndDate_ends_with?: Maybe<Scalars['String']>;
  budgetEndDate_gt?: Maybe<Scalars['String']>;
  budgetEndDate_gte?: Maybe<Scalars['String']>;
  budgetEndDate_in?: Maybe<Array<Scalars['String']>>;
  budgetEndDate_lt?: Maybe<Scalars['String']>;
  budgetEndDate_lte?: Maybe<Scalars['String']>;
  budgetEndDate_not?: Maybe<Scalars['String']>;
  budgetEndDate_not_contains?: Maybe<Scalars['String']>;
  budgetEndDate_not_ends_with?: Maybe<Scalars['String']>;
  budgetEndDate_not_in?: Maybe<Array<Scalars['String']>>;
  budgetEndDate_not_starts_with?: Maybe<Scalars['String']>;
  budgetEndDate_starts_with?: Maybe<Scalars['String']>;
  budgetStartDate?: Maybe<Scalars['String']>;
  budgetStartDate_contains?: Maybe<Scalars['String']>;
  budgetStartDate_ends_with?: Maybe<Scalars['String']>;
  budgetStartDate_gt?: Maybe<Scalars['String']>;
  budgetStartDate_gte?: Maybe<Scalars['String']>;
  budgetStartDate_in?: Maybe<Array<Scalars['String']>>;
  budgetStartDate_lt?: Maybe<Scalars['String']>;
  budgetStartDate_lte?: Maybe<Scalars['String']>;
  budgetStartDate_not?: Maybe<Scalars['String']>;
  budgetStartDate_not_contains?: Maybe<Scalars['String']>;
  budgetStartDate_not_ends_with?: Maybe<Scalars['String']>;
  budgetStartDate_not_in?: Maybe<Array<Scalars['String']>>;
  budgetStartDate_not_starts_with?: Maybe<Scalars['String']>;
  budgetStartDate_starts_with?: Maybe<Scalars['String']>;
  contactPIorProjectLeader?: Maybe<_PrincipalInvestigatorFilter>;
  contactPIorProjectLeader_in?: Maybe<_PrincipalInvestigatorFilter>;
  contactPIorProjectLeader_not?: Maybe<_PrincipalInvestigatorFilter>;
  contactPIorProjectLeader_not_in?: Maybe<_PrincipalInvestigatorFilter>;
  coreProject?: Maybe<_CoreProjectFilter>;
  coreProject_in?: Maybe<_CoreProjectFilter>;
  coreProject_not?: Maybe<_CoreProjectFilter>;
  coreProject_not_in?: Maybe<_CoreProjectFilter>;
  department?: Maybe<Scalars['String']>;
  department_contains?: Maybe<Scalars['String']>;
  department_ends_with?: Maybe<Scalars['String']>;
  department_gt?: Maybe<Scalars['String']>;
  department_gte?: Maybe<Scalars['String']>;
  department_in?: Maybe<Array<Scalars['String']>>;
  department_lt?: Maybe<Scalars['String']>;
  department_lte?: Maybe<Scalars['String']>;
  department_not?: Maybe<Scalars['String']>;
  department_not_contains?: Maybe<Scalars['String']>;
  department_not_ends_with?: Maybe<Scalars['String']>;
  department_not_in?: Maybe<Array<Scalars['String']>>;
  department_not_starts_with?: Maybe<Scalars['String']>;
  department_starts_with?: Maybe<Scalars['String']>;
  directCost_IC?: Maybe<Scalars['Int']>;
  directCost_IC_gt?: Maybe<Scalars['Int']>;
  directCost_IC_gte?: Maybe<Scalars['Int']>;
  directCost_IC_in?: Maybe<Array<Scalars['Int']>>;
  directCost_IC_lt?: Maybe<Scalars['Int']>;
  directCost_IC_lte?: Maybe<Scalars['Int']>;
  directCost_IC_not?: Maybe<Scalars['Int']>;
  directCost_IC_not_in?: Maybe<Array<Scalars['Int']>>;
  fiscalYear?: Maybe<Scalars['String']>;
  fiscalYear_contains?: Maybe<Scalars['String']>;
  fiscalYear_ends_with?: Maybe<Scalars['String']>;
  fiscalYear_gt?: Maybe<Scalars['String']>;
  fiscalYear_gte?: Maybe<Scalars['String']>;
  fiscalYear_in?: Maybe<Array<Scalars['String']>>;
  fiscalYear_lt?: Maybe<Scalars['String']>;
  fiscalYear_lte?: Maybe<Scalars['String']>;
  fiscalYear_not?: Maybe<Scalars['String']>;
  fiscalYear_not_contains?: Maybe<Scalars['String']>;
  fiscalYear_not_ends_with?: Maybe<Scalars['String']>;
  fiscalYear_not_in?: Maybe<Array<Scalars['String']>>;
  fiscalYear_not_starts_with?: Maybe<Scalars['String']>;
  fiscalYear_starts_with?: Maybe<Scalars['String']>;
  fundingIC?: Maybe<_NihInstituteOrCenterFilter>;
  fundingIC_in?: Maybe<_NihInstituteOrCenterFilter>;
  fundingIC_not?: Maybe<_NihInstituteOrCenterFilter>;
  fundingIC_not_in?: Maybe<_NihInstituteOrCenterFilter>;
  fundingMechanism?: Maybe<Scalars['String']>;
  fundingMechanism_contains?: Maybe<Scalars['String']>;
  fundingMechanism_ends_with?: Maybe<Scalars['String']>;
  fundingMechanism_gt?: Maybe<Scalars['String']>;
  fundingMechanism_gte?: Maybe<Scalars['String']>;
  fundingMechanism_in?: Maybe<Array<Scalars['String']>>;
  fundingMechanism_lt?: Maybe<Scalars['String']>;
  fundingMechanism_lte?: Maybe<Scalars['String']>;
  fundingMechanism_not?: Maybe<Scalars['String']>;
  fundingMechanism_not_contains?: Maybe<Scalars['String']>;
  fundingMechanism_not_ends_with?: Maybe<Scalars['String']>;
  fundingMechanism_not_in?: Maybe<Array<Scalars['String']>>;
  fundingMechanism_not_starts_with?: Maybe<Scalars['String']>;
  fundingMechanism_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  inDirectCost_IC?: Maybe<Scalars['Int']>;
  inDirectCost_IC_gt?: Maybe<Scalars['Int']>;
  inDirectCost_IC_gte?: Maybe<Scalars['Int']>;
  inDirectCost_IC_in?: Maybe<Array<Scalars['Int']>>;
  inDirectCost_IC_lt?: Maybe<Scalars['Int']>;
  inDirectCost_IC_lte?: Maybe<Scalars['Int']>;
  inDirectCost_IC_not?: Maybe<Scalars['Int']>;
  inDirectCost_IC_not_in?: Maybe<Array<Scalars['Int']>>;
  lower_case_search_string?: Maybe<Scalars['String']>;
  lower_case_search_string_contains?: Maybe<Scalars['String']>;
  lower_case_search_string_ends_with?: Maybe<Scalars['String']>;
  lower_case_search_string_gt?: Maybe<Scalars['String']>;
  lower_case_search_string_gte?: Maybe<Scalars['String']>;
  lower_case_search_string_in?: Maybe<Array<Scalars['String']>>;
  lower_case_search_string_lt?: Maybe<Scalars['String']>;
  lower_case_search_string_lte?: Maybe<Scalars['String']>;
  lower_case_search_string_not?: Maybe<Scalars['String']>;
  lower_case_search_string_not_contains?: Maybe<Scalars['String']>;
  lower_case_search_string_not_ends_with?: Maybe<Scalars['String']>;
  lower_case_search_string_not_in?: Maybe<Array<Scalars['String']>>;
  lower_case_search_string_not_starts_with?: Maybe<Scalars['String']>;
  lower_case_search_string_starts_with?: Maybe<Scalars['String']>;
  nihSpendingCategorization?: Maybe<Scalars['String']>;
  nihSpendingCategorization_contains?: Maybe<Scalars['String']>;
  nihSpendingCategorization_ends_with?: Maybe<Scalars['String']>;
  nihSpendingCategorization_gt?: Maybe<Scalars['String']>;
  nihSpendingCategorization_gte?: Maybe<Scalars['String']>;
  nihSpendingCategorization_in?: Maybe<Array<Scalars['String']>>;
  nihSpendingCategorization_lt?: Maybe<Scalars['String']>;
  nihSpendingCategorization_lte?: Maybe<Scalars['String']>;
  nihSpendingCategorization_not?: Maybe<Scalars['String']>;
  nihSpendingCategorization_not_contains?: Maybe<Scalars['String']>;
  nihSpendingCategorization_not_ends_with?: Maybe<Scalars['String']>;
  nihSpendingCategorization_not_in?: Maybe<Array<Scalars['String']>>;
  nihSpendingCategorization_not_starts_with?: Maybe<Scalars['String']>;
  nihSpendingCategorization_starts_with?: Maybe<Scalars['String']>;
  organization?: Maybe<_FundedOrganizationFilter>;
  organization_in?: Maybe<_FundedOrganizationFilter>;
  organization_not?: Maybe<_FundedOrganizationFilter>;
  organization_not_in?: Maybe<_FundedOrganizationFilter>;
  otherPIorProjectLeaders?: Maybe<Scalars['String']>;
  otherPIorProjectLeaders_contains?: Maybe<Scalars['String']>;
  otherPIorProjectLeaders_ends_with?: Maybe<Scalars['String']>;
  otherPIorProjectLeaders_gt?: Maybe<Scalars['String']>;
  otherPIorProjectLeaders_gte?: Maybe<Scalars['String']>;
  otherPIorProjectLeaders_in?: Maybe<Array<Scalars['String']>>;
  otherPIorProjectLeaders_lt?: Maybe<Scalars['String']>;
  otherPIorProjectLeaders_lte?: Maybe<Scalars['String']>;
  otherPIorProjectLeaders_not?: Maybe<Scalars['String']>;
  otherPIorProjectLeaders_not_contains?: Maybe<Scalars['String']>;
  otherPIorProjectLeaders_not_ends_with?: Maybe<Scalars['String']>;
  otherPIorProjectLeaders_not_in?: Maybe<Array<Scalars['String']>>;
  otherPIorProjectLeaders_not_starts_with?: Maybe<Scalars['String']>;
  otherPIorProjectLeaders_starts_with?: Maybe<Scalars['String']>;
  programOfficialInformation?: Maybe<Scalars['String']>;
  programOfficialInformation_contains?: Maybe<Scalars['String']>;
  programOfficialInformation_ends_with?: Maybe<Scalars['String']>;
  programOfficialInformation_gt?: Maybe<Scalars['String']>;
  programOfficialInformation_gte?: Maybe<Scalars['String']>;
  programOfficialInformation_in?: Maybe<Array<Scalars['String']>>;
  programOfficialInformation_lt?: Maybe<Scalars['String']>;
  programOfficialInformation_lte?: Maybe<Scalars['String']>;
  programOfficialInformation_not?: Maybe<Scalars['String']>;
  programOfficialInformation_not_contains?: Maybe<Scalars['String']>;
  programOfficialInformation_not_ends_with?: Maybe<Scalars['String']>;
  programOfficialInformation_not_in?: Maybe<Array<Scalars['String']>>;
  programOfficialInformation_not_starts_with?: Maybe<Scalars['String']>;
  programOfficialInformation_starts_with?: Maybe<Scalars['String']>;
  projectEndDate?: Maybe<Scalars['String']>;
  projectEndDate_contains?: Maybe<Scalars['String']>;
  projectEndDate_ends_with?: Maybe<Scalars['String']>;
  projectEndDate_gt?: Maybe<Scalars['String']>;
  projectEndDate_gte?: Maybe<Scalars['String']>;
  projectEndDate_in?: Maybe<Array<Scalars['String']>>;
  projectEndDate_lt?: Maybe<Scalars['String']>;
  projectEndDate_lte?: Maybe<Scalars['String']>;
  projectEndDate_not?: Maybe<Scalars['String']>;
  projectEndDate_not_contains?: Maybe<Scalars['String']>;
  projectEndDate_not_ends_with?: Maybe<Scalars['String']>;
  projectEndDate_not_in?: Maybe<Array<Scalars['String']>>;
  projectEndDate_not_starts_with?: Maybe<Scalars['String']>;
  projectEndDate_starts_with?: Maybe<Scalars['String']>;
  projectNumber?: Maybe<Scalars['String']>;
  projectNumber_contains?: Maybe<Scalars['String']>;
  projectNumber_ends_with?: Maybe<Scalars['String']>;
  projectNumber_gt?: Maybe<Scalars['String']>;
  projectNumber_gte?: Maybe<Scalars['String']>;
  projectNumber_in?: Maybe<Array<Scalars['String']>>;
  projectNumber_lt?: Maybe<Scalars['String']>;
  projectNumber_lte?: Maybe<Scalars['String']>;
  projectNumber_not?: Maybe<Scalars['String']>;
  projectNumber_not_contains?: Maybe<Scalars['String']>;
  projectNumber_not_ends_with?: Maybe<Scalars['String']>;
  projectNumber_not_in?: Maybe<Array<Scalars['String']>>;
  projectNumber_not_starts_with?: Maybe<Scalars['String']>;
  projectNumber_starts_with?: Maybe<Scalars['String']>;
  projectStartDate?: Maybe<Scalars['String']>;
  projectStartDate_contains?: Maybe<Scalars['String']>;
  projectStartDate_ends_with?: Maybe<Scalars['String']>;
  projectStartDate_gt?: Maybe<Scalars['String']>;
  projectStartDate_gte?: Maybe<Scalars['String']>;
  projectStartDate_in?: Maybe<Array<Scalars['String']>>;
  projectStartDate_lt?: Maybe<Scalars['String']>;
  projectStartDate_lte?: Maybe<Scalars['String']>;
  projectStartDate_not?: Maybe<Scalars['String']>;
  projectStartDate_not_contains?: Maybe<Scalars['String']>;
  projectStartDate_not_ends_with?: Maybe<Scalars['String']>;
  projectStartDate_not_in?: Maybe<Array<Scalars['String']>>;
  projectStartDate_not_starts_with?: Maybe<Scalars['String']>;
  projectStartDate_starts_with?: Maybe<Scalars['String']>;
  projectTerms?: Maybe<Scalars['String']>;
  projectTerms_contains?: Maybe<Scalars['String']>;
  projectTerms_ends_with?: Maybe<Scalars['String']>;
  projectTerms_gt?: Maybe<Scalars['String']>;
  projectTerms_gte?: Maybe<Scalars['String']>;
  projectTerms_in?: Maybe<Array<Scalars['String']>>;
  projectTerms_lt?: Maybe<Scalars['String']>;
  projectTerms_lte?: Maybe<Scalars['String']>;
  projectTerms_not?: Maybe<Scalars['String']>;
  projectTerms_not_contains?: Maybe<Scalars['String']>;
  projectTerms_not_ends_with?: Maybe<Scalars['String']>;
  projectTerms_not_in?: Maybe<Array<Scalars['String']>>;
  projectTerms_not_starts_with?: Maybe<Scalars['String']>;
  projectTerms_starts_with?: Maybe<Scalars['String']>;
  projectTitle?: Maybe<Scalars['String']>;
  projectTitle_contains?: Maybe<Scalars['String']>;
  projectTitle_ends_with?: Maybe<Scalars['String']>;
  projectTitle_gt?: Maybe<Scalars['String']>;
  projectTitle_gte?: Maybe<Scalars['String']>;
  projectTitle_in?: Maybe<Array<Scalars['String']>>;
  projectTitle_lt?: Maybe<Scalars['String']>;
  projectTitle_lte?: Maybe<Scalars['String']>;
  projectTitle_not?: Maybe<Scalars['String']>;
  projectTitle_not_contains?: Maybe<Scalars['String']>;
  projectTitle_not_ends_with?: Maybe<Scalars['String']>;
  projectTitle_not_in?: Maybe<Array<Scalars['String']>>;
  projectTitle_not_starts_with?: Maybe<Scalars['String']>;
  projectTitle_starts_with?: Maybe<Scalars['String']>;
  publicHealthRelevance?: Maybe<Scalars['String']>;
  publicHealthRelevance_contains?: Maybe<Scalars['String']>;
  publicHealthRelevance_ends_with?: Maybe<Scalars['String']>;
  publicHealthRelevance_gt?: Maybe<Scalars['String']>;
  publicHealthRelevance_gte?: Maybe<Scalars['String']>;
  publicHealthRelevance_in?: Maybe<Array<Scalars['String']>>;
  publicHealthRelevance_lt?: Maybe<Scalars['String']>;
  publicHealthRelevance_lte?: Maybe<Scalars['String']>;
  publicHealthRelevance_not?: Maybe<Scalars['String']>;
  publicHealthRelevance_not_contains?: Maybe<Scalars['String']>;
  publicHealthRelevance_not_ends_with?: Maybe<Scalars['String']>;
  publicHealthRelevance_not_in?: Maybe<Array<Scalars['String']>>;
  publicHealthRelevance_not_starts_with?: Maybe<Scalars['String']>;
  publicHealthRelevance_starts_with?: Maybe<Scalars['String']>;
  serialNumber?: Maybe<Scalars['String']>;
  serialNumber_contains?: Maybe<Scalars['String']>;
  serialNumber_ends_with?: Maybe<Scalars['String']>;
  serialNumber_gt?: Maybe<Scalars['String']>;
  serialNumber_gte?: Maybe<Scalars['String']>;
  serialNumber_in?: Maybe<Array<Scalars['String']>>;
  serialNumber_lt?: Maybe<Scalars['String']>;
  serialNumber_lte?: Maybe<Scalars['String']>;
  serialNumber_not?: Maybe<Scalars['String']>;
  serialNumber_not_contains?: Maybe<Scalars['String']>;
  serialNumber_not_ends_with?: Maybe<Scalars['String']>;
  serialNumber_not_in?: Maybe<Array<Scalars['String']>>;
  serialNumber_not_starts_with?: Maybe<Scalars['String']>;
  serialNumber_starts_with?: Maybe<Scalars['String']>;
  studySection?: Maybe<Scalars['String']>;
  studySection_contains?: Maybe<Scalars['String']>;
  studySection_ends_with?: Maybe<Scalars['String']>;
  studySection_gt?: Maybe<Scalars['String']>;
  studySection_gte?: Maybe<Scalars['String']>;
  studySection_in?: Maybe<Array<Scalars['String']>>;
  studySection_lt?: Maybe<Scalars['String']>;
  studySection_lte?: Maybe<Scalars['String']>;
  studySection_not?: Maybe<Scalars['String']>;
  studySection_not_contains?: Maybe<Scalars['String']>;
  studySection_not_ends_with?: Maybe<Scalars['String']>;
  studySection_not_in?: Maybe<Array<Scalars['String']>>;
  studySection_not_starts_with?: Maybe<Scalars['String']>;
  studySection_starts_with?: Maybe<Scalars['String']>;
  supportYear?: Maybe<Scalars['String']>;
  supportYear_contains?: Maybe<Scalars['String']>;
  supportYear_ends_with?: Maybe<Scalars['String']>;
  supportYear_gt?: Maybe<Scalars['String']>;
  supportYear_gte?: Maybe<Scalars['String']>;
  supportYear_in?: Maybe<Array<Scalars['String']>>;
  supportYear_lt?: Maybe<Scalars['String']>;
  supportYear_lte?: Maybe<Scalars['String']>;
  supportYear_not?: Maybe<Scalars['String']>;
  supportYear_not_contains?: Maybe<Scalars['String']>;
  supportYear_not_ends_with?: Maybe<Scalars['String']>;
  supportYear_not_in?: Maybe<Array<Scalars['String']>>;
  supportYear_not_starts_with?: Maybe<Scalars['String']>;
  supportYear_starts_with?: Maybe<Scalars['String']>;
  totalCost?: Maybe<Scalars['Int']>;
  totalCost_IC?: Maybe<Scalars['Int']>;
  totalCost_IC_gt?: Maybe<Scalars['Int']>;
  totalCost_IC_gte?: Maybe<Scalars['Int']>;
  totalCost_IC_in?: Maybe<Array<Scalars['Int']>>;
  totalCost_IC_lt?: Maybe<Scalars['Int']>;
  totalCost_IC_lte?: Maybe<Scalars['Int']>;
  totalCost_IC_not?: Maybe<Scalars['Int']>;
  totalCost_IC_not_in?: Maybe<Array<Scalars['Int']>>;
  totalCost_SubProjects?: Maybe<Scalars['Int']>;
  totalCost_SubProjects_gt?: Maybe<Scalars['Int']>;
  totalCost_SubProjects_gte?: Maybe<Scalars['Int']>;
  totalCost_SubProjects_in?: Maybe<Array<Scalars['Int']>>;
  totalCost_SubProjects_lt?: Maybe<Scalars['Int']>;
  totalCost_SubProjects_lte?: Maybe<Scalars['Int']>;
  totalCost_SubProjects_not?: Maybe<Scalars['Int']>;
  totalCost_SubProjects_not_in?: Maybe<Array<Scalars['Int']>>;
  totalCost_gt?: Maybe<Scalars['Int']>;
  totalCost_gte?: Maybe<Scalars['Int']>;
  totalCost_in?: Maybe<Array<Scalars['Int']>>;
  totalCost_lt?: Maybe<Scalars['Int']>;
  totalCost_lte?: Maybe<Scalars['Int']>;
  totalCost_not?: Maybe<Scalars['Int']>;
  totalCost_not_in?: Maybe<Array<Scalars['Int']>>;
  type?: Maybe<Scalars['String']>;
  type_contains?: Maybe<Scalars['String']>;
  type_ends_with?: Maybe<Scalars['String']>;
  type_gt?: Maybe<Scalars['String']>;
  type_gte?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Scalars['String']>>;
  type_lt?: Maybe<Scalars['String']>;
  type_lte?: Maybe<Scalars['String']>;
  type_not?: Maybe<Scalars['String']>;
  type_not_contains?: Maybe<Scalars['String']>;
  type_not_ends_with?: Maybe<Scalars['String']>;
  type_not_in?: Maybe<Array<Scalars['String']>>;
  type_not_starts_with?: Maybe<Scalars['String']>;
  type_starts_with?: Maybe<Scalars['String']>;
};

export enum _NihGrantOrdering {
  CfdaCodeAsc = 'CFDACode_asc',
  CfdaCodeDesc = 'CFDACode_desc',
  FoaAsc = 'FOA_asc',
  FoaDesc = 'FOA_desc',
  IcAsc = 'IC_asc',
  IcDesc = 'IC_desc',
  Nihcovid19ResponseAsc = 'NIHCOVID19Response_asc',
  Nihcovid19ResponseDesc = 'NIHCOVID19Response_desc',
  AbstractAsc = 'abstract_asc',
  AbstractDesc = 'abstract_desc',
  ActivityAsc = 'activity_asc',
  ActivityDesc = 'activity_desc',
  ApplicationIdAsc = 'applicationID_asc',
  ApplicationIdDesc = 'applicationID_desc',
  AwardNoticeDateAsc = 'awardNoticeDate_asc',
  AwardNoticeDateDesc = 'awardNoticeDate_desc',
  BudgetEndDateAsc = 'budgetEndDate_asc',
  BudgetEndDateDesc = 'budgetEndDate_desc',
  BudgetStartDateAsc = 'budgetStartDate_asc',
  BudgetStartDateDesc = 'budgetStartDate_desc',
  DepartmentAsc = 'department_asc',
  DepartmentDesc = 'department_desc',
  DirectCostIcAsc = 'directCost_IC_asc',
  DirectCostIcDesc = 'directCost_IC_desc',
  FiscalYearAsc = 'fiscalYear_asc',
  FiscalYearDesc = 'fiscalYear_desc',
  FundingMechanismAsc = 'fundingMechanism_asc',
  FundingMechanismDesc = 'fundingMechanism_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  InDirectCostIcAsc = 'inDirectCost_IC_asc',
  InDirectCostIcDesc = 'inDirectCost_IC_desc',
  LowerCaseSearchStringAsc = 'lower_case_search_string_asc',
  LowerCaseSearchStringDesc = 'lower_case_search_string_desc',
  NihSpendingCategorizationAsc = 'nihSpendingCategorization_asc',
  NihSpendingCategorizationDesc = 'nihSpendingCategorization_desc',
  OtherPIorProjectLeadersAsc = 'otherPIorProjectLeaders_asc',
  OtherPIorProjectLeadersDesc = 'otherPIorProjectLeaders_desc',
  ProgramOfficialInformationAsc = 'programOfficialInformation_asc',
  ProgramOfficialInformationDesc = 'programOfficialInformation_desc',
  ProjectEndDateAsc = 'projectEndDate_asc',
  ProjectEndDateDesc = 'projectEndDate_desc',
  ProjectNumberAsc = 'projectNumber_asc',
  ProjectNumberDesc = 'projectNumber_desc',
  ProjectStartDateAsc = 'projectStartDate_asc',
  ProjectStartDateDesc = 'projectStartDate_desc',
  ProjectTermsAsc = 'projectTerms_asc',
  ProjectTermsDesc = 'projectTerms_desc',
  ProjectTitleAsc = 'projectTitle_asc',
  ProjectTitleDesc = 'projectTitle_desc',
  PublicHealthRelevanceAsc = 'publicHealthRelevance_asc',
  PublicHealthRelevanceDesc = 'publicHealthRelevance_desc',
  SerialNumberAsc = 'serialNumber_asc',
  SerialNumberDesc = 'serialNumber_desc',
  StudySectionAsc = 'studySection_asc',
  StudySectionDesc = 'studySection_desc',
  SupportYearAsc = 'supportYear_asc',
  SupportYearDesc = 'supportYear_desc',
  TotalCostIcAsc = 'totalCost_IC_asc',
  TotalCostIcDesc = 'totalCost_IC_desc',
  TotalCostSubProjectsAsc = 'totalCost_SubProjects_asc',
  TotalCostSubProjectsDesc = 'totalCost_SubProjects_desc',
  TotalCostAsc = 'totalCost_asc',
  TotalCostDesc = 'totalCost_desc',
  TypeAsc = 'type_asc',
  TypeDesc = 'type_desc'
}

export type _NihInstituteOrCenterFilter = {
  AND?: Maybe<Array<_NihInstituteOrCenterFilter>>;
  OR?: Maybe<Array<_NihInstituteOrCenterFilter>>;
  grantsAdministered?: Maybe<_NihGrantFilter>;
  grantsAdministered_every?: Maybe<_NihGrantFilter>;
  grantsAdministered_in?: Maybe<_NihGrantFilter>;
  grantsAdministered_none?: Maybe<_NihGrantFilter>;
  grantsAdministered_not?: Maybe<_NihGrantFilter>;
  grantsAdministered_not_in?: Maybe<_NihGrantFilter>;
  grantsAdministered_single?: Maybe<_NihGrantFilter>;
  grantsAdministered_some?: Maybe<_NihGrantFilter>;
  grantsFunded?: Maybe<_NihGrantFilter>;
  grantsFunded_every?: Maybe<_NihGrantFilter>;
  grantsFunded_in?: Maybe<_NihGrantFilter>;
  grantsFunded_none?: Maybe<_NihGrantFilter>;
  grantsFunded_not?: Maybe<_NihGrantFilter>;
  grantsFunded_not_in?: Maybe<_NihGrantFilter>;
  grantsFunded_single?: Maybe<_NihGrantFilter>;
  grantsFunded_some?: Maybe<_NihGrantFilter>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  lower_case_search_string?: Maybe<Scalars['String']>;
  lower_case_search_string_contains?: Maybe<Scalars['String']>;
  lower_case_search_string_ends_with?: Maybe<Scalars['String']>;
  lower_case_search_string_gt?: Maybe<Scalars['String']>;
  lower_case_search_string_gte?: Maybe<Scalars['String']>;
  lower_case_search_string_in?: Maybe<Array<Scalars['String']>>;
  lower_case_search_string_lt?: Maybe<Scalars['String']>;
  lower_case_search_string_lte?: Maybe<Scalars['String']>;
  lower_case_search_string_not?: Maybe<Scalars['String']>;
  lower_case_search_string_not_contains?: Maybe<Scalars['String']>;
  lower_case_search_string_not_ends_with?: Maybe<Scalars['String']>;
  lower_case_search_string_not_in?: Maybe<Array<Scalars['String']>>;
  lower_case_search_string_not_starts_with?: Maybe<Scalars['String']>;
  lower_case_search_string_starts_with?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_lt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
};

export enum _NihInstituteOrCenterOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  LowerCaseSearchStringAsc = 'lower_case_search_string_asc',
  LowerCaseSearchStringDesc = 'lower_case_search_string_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc'
}

export type _PrincipalInvestigatorFilter = {
  AND?: Maybe<Array<_PrincipalInvestigatorFilter>>;
  OR?: Maybe<Array<_PrincipalInvestigatorFilter>>;
  firstName?: Maybe<Scalars['String']>;
  firstName_contains?: Maybe<Scalars['String']>;
  firstName_ends_with?: Maybe<Scalars['String']>;
  firstName_gt?: Maybe<Scalars['String']>;
  firstName_gte?: Maybe<Scalars['String']>;
  firstName_in?: Maybe<Array<Scalars['String']>>;
  firstName_lt?: Maybe<Scalars['String']>;
  firstName_lte?: Maybe<Scalars['String']>;
  firstName_not?: Maybe<Scalars['String']>;
  firstName_not_contains?: Maybe<Scalars['String']>;
  firstName_not_ends_with?: Maybe<Scalars['String']>;
  firstName_not_in?: Maybe<Array<Scalars['String']>>;
  firstName_not_starts_with?: Maybe<Scalars['String']>;
  firstName_starts_with?: Maybe<Scalars['String']>;
  grants?: Maybe<_NihGrantFilter>;
  grants_every?: Maybe<_NihGrantFilter>;
  grants_in?: Maybe<_NihGrantFilter>;
  grants_none?: Maybe<_NihGrantFilter>;
  grants_not?: Maybe<_NihGrantFilter>;
  grants_not_in?: Maybe<_NihGrantFilter>;
  grants_single?: Maybe<_NihGrantFilter>;
  grants_some?: Maybe<_NihGrantFilter>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  lower_case_search_string?: Maybe<Scalars['String']>;
  lower_case_search_string_contains?: Maybe<Scalars['String']>;
  lower_case_search_string_ends_with?: Maybe<Scalars['String']>;
  lower_case_search_string_gt?: Maybe<Scalars['String']>;
  lower_case_search_string_gte?: Maybe<Scalars['String']>;
  lower_case_search_string_in?: Maybe<Array<Scalars['String']>>;
  lower_case_search_string_lt?: Maybe<Scalars['String']>;
  lower_case_search_string_lte?: Maybe<Scalars['String']>;
  lower_case_search_string_not?: Maybe<Scalars['String']>;
  lower_case_search_string_not_contains?: Maybe<Scalars['String']>;
  lower_case_search_string_not_ends_with?: Maybe<Scalars['String']>;
  lower_case_search_string_not_in?: Maybe<Array<Scalars['String']>>;
  lower_case_search_string_not_starts_with?: Maybe<Scalars['String']>;
  lower_case_search_string_starts_with?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  middleName_contains?: Maybe<Scalars['String']>;
  middleName_ends_with?: Maybe<Scalars['String']>;
  middleName_gt?: Maybe<Scalars['String']>;
  middleName_gte?: Maybe<Scalars['String']>;
  middleName_in?: Maybe<Array<Scalars['String']>>;
  middleName_lt?: Maybe<Scalars['String']>;
  middleName_lte?: Maybe<Scalars['String']>;
  middleName_not?: Maybe<Scalars['String']>;
  middleName_not_contains?: Maybe<Scalars['String']>;
  middleName_not_ends_with?: Maybe<Scalars['String']>;
  middleName_not_in?: Maybe<Array<Scalars['String']>>;
  middleName_not_starts_with?: Maybe<Scalars['String']>;
  middleName_starts_with?: Maybe<Scalars['String']>;
  personID?: Maybe<Scalars['String']>;
  personID_contains?: Maybe<Scalars['String']>;
  personID_ends_with?: Maybe<Scalars['String']>;
  personID_gt?: Maybe<Scalars['String']>;
  personID_gte?: Maybe<Scalars['String']>;
  personID_in?: Maybe<Array<Scalars['String']>>;
  personID_lt?: Maybe<Scalars['String']>;
  personID_lte?: Maybe<Scalars['String']>;
  personID_not?: Maybe<Scalars['String']>;
  personID_not_contains?: Maybe<Scalars['String']>;
  personID_not_ends_with?: Maybe<Scalars['String']>;
  personID_not_in?: Maybe<Array<Scalars['String']>>;
  personID_not_starts_with?: Maybe<Scalars['String']>;
  personID_starts_with?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  surname_contains?: Maybe<Scalars['String']>;
  surname_ends_with?: Maybe<Scalars['String']>;
  surname_gt?: Maybe<Scalars['String']>;
  surname_gte?: Maybe<Scalars['String']>;
  surname_in?: Maybe<Array<Scalars['String']>>;
  surname_lt?: Maybe<Scalars['String']>;
  surname_lte?: Maybe<Scalars['String']>;
  surname_not?: Maybe<Scalars['String']>;
  surname_not_contains?: Maybe<Scalars['String']>;
  surname_not_ends_with?: Maybe<Scalars['String']>;
  surname_not_in?: Maybe<Array<Scalars['String']>>;
  surname_not_starts_with?: Maybe<Scalars['String']>;
  surname_starts_with?: Maybe<Scalars['String']>;
};

export enum _PrincipalInvestigatorOrdering {
  FirstNameAsc = 'firstName_asc',
  FirstNameDesc = 'firstName_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  LowerCaseSearchStringAsc = 'lower_case_search_string_asc',
  LowerCaseSearchStringDesc = 'lower_case_search_string_desc',
  MiddleNameAsc = 'middleName_asc',
  MiddleNameDesc = 'middleName_desc',
  PersonIdAsc = 'personID_asc',
  PersonIdDesc = 'personID_desc',
  SurnameAsc = 'surname_asc',
  SurnameDesc = 'surname_desc'
}

export type _UserFilter = {
  AND?: Maybe<Array<_UserFilter>>;
  OR?: Maybe<Array<_UserFilter>>;
  author?: Maybe<_AuthorFilter>;
  author_in?: Maybe<_AuthorFilter>;
  author_not?: Maybe<_AuthorFilter>;
  author_not_in?: Maybe<_AuthorFilter>;
  email?: Maybe<Scalars['String']>;
  email_contains?: Maybe<Scalars['String']>;
  email_ends_with?: Maybe<Scalars['String']>;
  email_gt?: Maybe<Scalars['String']>;
  email_gte?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Scalars['String']>>;
  email_lt?: Maybe<Scalars['String']>;
  email_lte?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  email_not_ends_with?: Maybe<Scalars['String']>;
  email_not_in?: Maybe<Array<Scalars['String']>>;
  email_not_starts_with?: Maybe<Scalars['String']>;
  email_starts_with?: Maybe<Scalars['String']>;
  firstInitial?: Maybe<Scalars['String']>;
  firstInitial_contains?: Maybe<Scalars['String']>;
  firstInitial_ends_with?: Maybe<Scalars['String']>;
  firstInitial_gt?: Maybe<Scalars['String']>;
  firstInitial_gte?: Maybe<Scalars['String']>;
  firstInitial_in?: Maybe<Array<Scalars['String']>>;
  firstInitial_lt?: Maybe<Scalars['String']>;
  firstInitial_lte?: Maybe<Scalars['String']>;
  firstInitial_not?: Maybe<Scalars['String']>;
  firstInitial_not_contains?: Maybe<Scalars['String']>;
  firstInitial_not_ends_with?: Maybe<Scalars['String']>;
  firstInitial_not_in?: Maybe<Array<Scalars['String']>>;
  firstInitial_not_starts_with?: Maybe<Scalars['String']>;
  firstInitial_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  lower_case_search_string?: Maybe<Scalars['String']>;
  lower_case_search_string_contains?: Maybe<Scalars['String']>;
  lower_case_search_string_ends_with?: Maybe<Scalars['String']>;
  lower_case_search_string_gt?: Maybe<Scalars['String']>;
  lower_case_search_string_gte?: Maybe<Scalars['String']>;
  lower_case_search_string_in?: Maybe<Array<Scalars['String']>>;
  lower_case_search_string_lt?: Maybe<Scalars['String']>;
  lower_case_search_string_lte?: Maybe<Scalars['String']>;
  lower_case_search_string_not?: Maybe<Scalars['String']>;
  lower_case_search_string_not_contains?: Maybe<Scalars['String']>;
  lower_case_search_string_not_ends_with?: Maybe<Scalars['String']>;
  lower_case_search_string_not_in?: Maybe<Array<Scalars['String']>>;
  lower_case_search_string_not_starts_with?: Maybe<Scalars['String']>;
  lower_case_search_string_starts_with?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  password_contains?: Maybe<Scalars['String']>;
  password_ends_with?: Maybe<Scalars['String']>;
  password_gt?: Maybe<Scalars['String']>;
  password_gte?: Maybe<Scalars['String']>;
  password_in?: Maybe<Array<Scalars['String']>>;
  password_lt?: Maybe<Scalars['String']>;
  password_lte?: Maybe<Scalars['String']>;
  password_not?: Maybe<Scalars['String']>;
  password_not_contains?: Maybe<Scalars['String']>;
  password_not_ends_with?: Maybe<Scalars['String']>;
  password_not_in?: Maybe<Array<Scalars['String']>>;
  password_not_starts_with?: Maybe<Scalars['String']>;
  password_starts_with?: Maybe<Scalars['String']>;
  pi?: Maybe<_PrincipalInvestigatorFilter>;
  pi_in?: Maybe<_PrincipalInvestigatorFilter>;
  pi_not?: Maybe<_PrincipalInvestigatorFilter>;
  pi_not_in?: Maybe<_PrincipalInvestigatorFilter>;
  surname?: Maybe<Scalars['String']>;
  surname_contains?: Maybe<Scalars['String']>;
  surname_ends_with?: Maybe<Scalars['String']>;
  surname_gt?: Maybe<Scalars['String']>;
  surname_gte?: Maybe<Scalars['String']>;
  surname_in?: Maybe<Array<Scalars['String']>>;
  surname_lt?: Maybe<Scalars['String']>;
  surname_lte?: Maybe<Scalars['String']>;
  surname_not?: Maybe<Scalars['String']>;
  surname_not_contains?: Maybe<Scalars['String']>;
  surname_not_ends_with?: Maybe<Scalars['String']>;
  surname_not_in?: Maybe<Array<Scalars['String']>>;
  surname_not_starts_with?: Maybe<Scalars['String']>;
  surname_starts_with?: Maybe<Scalars['String']>;
  user_name?: Maybe<Scalars['String']>;
  user_name_contains?: Maybe<Scalars['String']>;
  user_name_ends_with?: Maybe<Scalars['String']>;
  user_name_gt?: Maybe<Scalars['String']>;
  user_name_gte?: Maybe<Scalars['String']>;
  user_name_in?: Maybe<Array<Scalars['String']>>;
  user_name_lt?: Maybe<Scalars['String']>;
  user_name_lte?: Maybe<Scalars['String']>;
  user_name_not?: Maybe<Scalars['String']>;
  user_name_not_contains?: Maybe<Scalars['String']>;
  user_name_not_ends_with?: Maybe<Scalars['String']>;
  user_name_not_in?: Maybe<Array<Scalars['String']>>;
  user_name_not_starts_with?: Maybe<Scalars['String']>;
  user_name_starts_with?: Maybe<Scalars['String']>;
};

export enum _UserOrdering {
  EmailAsc = 'email_asc',
  EmailDesc = 'email_desc',
  FirstInitialAsc = 'firstInitial_asc',
  FirstInitialDesc = 'firstInitial_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  LowerCaseSearchStringAsc = 'lower_case_search_string_asc',
  LowerCaseSearchStringDesc = 'lower_case_search_string_desc',
  PasswordAsc = 'password_asc',
  PasswordDesc = 'password_desc',
  SurnameAsc = 'surname_asc',
  SurnameDesc = 'surname_desc',
  UserNameAsc = 'user_name_asc',
  UserNameDesc = 'user_name_desc'
}

export type Author = {
   __typename?: 'Author';
  _id?: Maybe<Scalars['Long']>;
  firstInitial: Scalars['String'];
  id: Scalars['ID'];
  lower_case_search_string: Scalars['String'];
  references: Array<LiteratureReference>;
  surname: Scalars['String'];
};


export type AuthorReferencesArgs = {
  DOI?: Maybe<Scalars['String']>;
  DOIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  PMID?: Maybe<Scalars['String']>;
  PMIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  abstract?: Maybe<Scalars['String']>;
  abstracts?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_LiteratureReferenceFilter>;
  first?: Maybe<Scalars['Int']>;
  firstPage?: Maybe<Scalars['String']>;
  firstPages?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  lastPage?: Maybe<Scalars['String']>;
  lastPages?: Maybe<Array<Maybe<Scalars['String']>>>;
  lower_case_search_string?: Maybe<Scalars['String']>;
  lower_case_search_strings?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_LiteratureReferenceOrdering>>>;
  publicationYear?: Maybe<Scalars['String']>;
  publicationYears?: Maybe<Array<Maybe<Scalars['String']>>>;
  shortReference?: Maybe<Scalars['String']>;
  shortReferences?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
  titles?: Maybe<Array<Maybe<Scalars['String']>>>;
  volume?: Maybe<Scalars['String']>;
  volumes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ClinicalTrial = {
   __typename?: 'ClinicalTrial';
  _id?: Maybe<Scalars['Long']>;
  brief_summary: Scalars['String'];
  brief_title: Scalars['String'];
  conditions: Array<Maybe<Scalars['String']>>;
  coreProject: CoreProject;
  detailed_description: Scalars['String'];
  drugs: Array<Maybe<Scalars['String']>>;
  id: Scalars['ID'];
  lower_case_search_string: Scalars['String'];
  nct_id: Scalars['String'];
  official_title: Scalars['String'];
  phases: Array<Maybe<Scalars['String']>>;
  status: Scalars['String'];
  status_date: Scalars['String'];
  study_type: Scalars['String'];
};


export type ClinicalTrialCoreProjectArgs = {
  coreProjectNumber?: Maybe<Scalars['String']>;
  coreProjectNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_CoreProjectFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_CoreProjectOrdering>>>;
};

export type CoreProject = {
   __typename?: 'CoreProject';
  _id?: Maybe<Scalars['Long']>;
  clinical_trials: Array<Maybe<ClinicalTrial>>;
  coreProjectNumber: Scalars['String'];
  grants: Array<Maybe<NihGrant>>;
  id: Scalars['ID'];
  publications?: Maybe<Array<Maybe<LiteratureReference>>>;
};


export type CoreProjectClinical_TrialsArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  brief_summary?: Maybe<Scalars['String']>;
  brief_summarys?: Maybe<Array<Maybe<Scalars['String']>>>;
  brief_title?: Maybe<Scalars['String']>;
  brief_titles?: Maybe<Array<Maybe<Scalars['String']>>>;
  conditions?: Maybe<Array<Maybe<Scalars['String']>>>;
  conditionss?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  detailed_description?: Maybe<Scalars['String']>;
  detailed_descriptions?: Maybe<Array<Maybe<Scalars['String']>>>;
  drugs?: Maybe<Array<Maybe<Scalars['String']>>>;
  drugss?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  filter?: Maybe<_ClinicalTrialFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  lower_case_search_string?: Maybe<Scalars['String']>;
  lower_case_search_strings?: Maybe<Array<Maybe<Scalars['String']>>>;
  nct_id?: Maybe<Scalars['String']>;
  nct_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  official_title?: Maybe<Scalars['String']>;
  official_titles?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ClinicalTrialOrdering>>>;
  phases?: Maybe<Array<Maybe<Scalars['String']>>>;
  phasess?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  status?: Maybe<Scalars['String']>;
  status_date?: Maybe<Scalars['String']>;
  status_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  statuss?: Maybe<Array<Maybe<Scalars['String']>>>;
  study_type?: Maybe<Scalars['String']>;
  study_types?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type CoreProjectGrantsArgs = {
  CFDACode?: Maybe<Scalars['String']>;
  CFDACodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  FOA?: Maybe<Scalars['String']>;
  FOAs?: Maybe<Array<Maybe<Scalars['String']>>>;
  IC?: Maybe<Scalars['String']>;
  ICs?: Maybe<Array<Maybe<Scalars['String']>>>;
  NIHCOVID19Response?: Maybe<Scalars['String']>;
  NIHCOVID19Responses?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  abstract?: Maybe<Scalars['String']>;
  abstracts?: Maybe<Array<Maybe<Scalars['String']>>>;
  activity?: Maybe<Scalars['String']>;
  activitys?: Maybe<Array<Maybe<Scalars['String']>>>;
  applicationID?: Maybe<Scalars['String']>;
  applicationIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  awardNoticeDate?: Maybe<Scalars['String']>;
  awardNoticeDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  budgetEndDate?: Maybe<Scalars['String']>;
  budgetEndDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  budgetStartDate?: Maybe<Scalars['String']>;
  budgetStartDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  department?: Maybe<Scalars['String']>;
  departments?: Maybe<Array<Maybe<Scalars['String']>>>;
  directCost_IC?: Maybe<Scalars['Int']>;
  directCost_ICs?: Maybe<Array<Maybe<Scalars['Int']>>>;
  filter?: Maybe<_NihGrantFilter>;
  first?: Maybe<Scalars['Int']>;
  fiscalYear?: Maybe<Scalars['String']>;
  fiscalYears?: Maybe<Array<Maybe<Scalars['String']>>>;
  fundingMechanism?: Maybe<Scalars['String']>;
  fundingMechanisms?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  inDirectCost_IC?: Maybe<Scalars['Int']>;
  inDirectCost_ICs?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lower_case_search_string?: Maybe<Scalars['String']>;
  lower_case_search_strings?: Maybe<Array<Maybe<Scalars['String']>>>;
  nihSpendingCategorization?: Maybe<Scalars['String']>;
  nihSpendingCategorizations?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_NihGrantOrdering>>>;
  otherPIorProjectLeaders?: Maybe<Scalars['String']>;
  otherPIorProjectLeaderss?: Maybe<Array<Maybe<Scalars['String']>>>;
  programOfficialInformation?: Maybe<Scalars['String']>;
  programOfficialInformations?: Maybe<Array<Maybe<Scalars['String']>>>;
  projectEndDate?: Maybe<Scalars['String']>;
  projectEndDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  projectNumber?: Maybe<Scalars['String']>;
  projectNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  projectStartDate?: Maybe<Scalars['String']>;
  projectStartDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  projectTerms?: Maybe<Scalars['String']>;
  projectTermss?: Maybe<Array<Maybe<Scalars['String']>>>;
  projectTitle?: Maybe<Scalars['String']>;
  projectTitles?: Maybe<Array<Maybe<Scalars['String']>>>;
  publicHealthRelevance?: Maybe<Scalars['String']>;
  publicHealthRelevances?: Maybe<Array<Maybe<Scalars['String']>>>;
  serialNumber?: Maybe<Scalars['String']>;
  serialNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  studySection?: Maybe<Scalars['String']>;
  studySections?: Maybe<Array<Maybe<Scalars['String']>>>;
  supportYear?: Maybe<Scalars['String']>;
  supportYears?: Maybe<Array<Maybe<Scalars['String']>>>;
  totalCost?: Maybe<Scalars['Int']>;
  totalCost_IC?: Maybe<Scalars['Int']>;
  totalCost_ICs?: Maybe<Array<Maybe<Scalars['Int']>>>;
  totalCost_SubProjects?: Maybe<Scalars['Int']>;
  totalCost_SubProjectss?: Maybe<Array<Maybe<Scalars['Int']>>>;
  totalCosts?: Maybe<Array<Maybe<Scalars['Int']>>>;
  type?: Maybe<Scalars['String']>;
  types?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type CoreProjectPublicationsArgs = {
  DOI?: Maybe<Scalars['String']>;
  DOIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  PMID?: Maybe<Scalars['String']>;
  PMIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  abstract?: Maybe<Scalars['String']>;
  abstracts?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_LiteratureReferenceFilter>;
  first?: Maybe<Scalars['Int']>;
  firstPage?: Maybe<Scalars['String']>;
  firstPages?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  lastPage?: Maybe<Scalars['String']>;
  lastPages?: Maybe<Array<Maybe<Scalars['String']>>>;
  lower_case_search_string?: Maybe<Scalars['String']>;
  lower_case_search_strings?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_LiteratureReferenceOrdering>>>;
  publicationYear?: Maybe<Scalars['String']>;
  publicationYears?: Maybe<Array<Maybe<Scalars['String']>>>;
  shortReference?: Maybe<Scalars['String']>;
  shortReferences?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
  titles?: Maybe<Array<Maybe<Scalars['String']>>>;
  volume?: Maybe<Scalars['String']>;
  volumes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FundedOrganization = {
   __typename?: 'FundedOrganization';
  _id?: Maybe<Scalars['Long']>;
  city: Scalars['String'];
  country: Scalars['String'];
  grants: Array<Maybe<NihGrant>>;
  id: Scalars['ID'];
  lower_case_search_string: Scalars['String'];
  name: Scalars['String'];
  organizationID: Scalars['String'];
  state: Scalars['String'];
  type: Scalars['String'];
};


export type FundedOrganizationGrantsArgs = {
  CFDACode?: Maybe<Scalars['String']>;
  CFDACodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  FOA?: Maybe<Scalars['String']>;
  FOAs?: Maybe<Array<Maybe<Scalars['String']>>>;
  IC?: Maybe<Scalars['String']>;
  ICs?: Maybe<Array<Maybe<Scalars['String']>>>;
  NIHCOVID19Response?: Maybe<Scalars['String']>;
  NIHCOVID19Responses?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  abstract?: Maybe<Scalars['String']>;
  abstracts?: Maybe<Array<Maybe<Scalars['String']>>>;
  activity?: Maybe<Scalars['String']>;
  activitys?: Maybe<Array<Maybe<Scalars['String']>>>;
  applicationID?: Maybe<Scalars['String']>;
  applicationIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  awardNoticeDate?: Maybe<Scalars['String']>;
  awardNoticeDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  budgetEndDate?: Maybe<Scalars['String']>;
  budgetEndDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  budgetStartDate?: Maybe<Scalars['String']>;
  budgetStartDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  department?: Maybe<Scalars['String']>;
  departments?: Maybe<Array<Maybe<Scalars['String']>>>;
  directCost_IC?: Maybe<Scalars['Int']>;
  directCost_ICs?: Maybe<Array<Maybe<Scalars['Int']>>>;
  filter?: Maybe<_NihGrantFilter>;
  first?: Maybe<Scalars['Int']>;
  fiscalYear?: Maybe<Scalars['String']>;
  fiscalYears?: Maybe<Array<Maybe<Scalars['String']>>>;
  fundingMechanism?: Maybe<Scalars['String']>;
  fundingMechanisms?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  inDirectCost_IC?: Maybe<Scalars['Int']>;
  inDirectCost_ICs?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lower_case_search_string?: Maybe<Scalars['String']>;
  lower_case_search_strings?: Maybe<Array<Maybe<Scalars['String']>>>;
  nihSpendingCategorization?: Maybe<Scalars['String']>;
  nihSpendingCategorizations?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_NihGrantOrdering>>>;
  otherPIorProjectLeaders?: Maybe<Scalars['String']>;
  otherPIorProjectLeaderss?: Maybe<Array<Maybe<Scalars['String']>>>;
  programOfficialInformation?: Maybe<Scalars['String']>;
  programOfficialInformations?: Maybe<Array<Maybe<Scalars['String']>>>;
  projectEndDate?: Maybe<Scalars['String']>;
  projectEndDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  projectNumber?: Maybe<Scalars['String']>;
  projectNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  projectStartDate?: Maybe<Scalars['String']>;
  projectStartDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  projectTerms?: Maybe<Scalars['String']>;
  projectTermss?: Maybe<Array<Maybe<Scalars['String']>>>;
  projectTitle?: Maybe<Scalars['String']>;
  projectTitles?: Maybe<Array<Maybe<Scalars['String']>>>;
  publicHealthRelevance?: Maybe<Scalars['String']>;
  publicHealthRelevances?: Maybe<Array<Maybe<Scalars['String']>>>;
  serialNumber?: Maybe<Scalars['String']>;
  serialNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  studySection?: Maybe<Scalars['String']>;
  studySections?: Maybe<Array<Maybe<Scalars['String']>>>;
  supportYear?: Maybe<Scalars['String']>;
  supportYears?: Maybe<Array<Maybe<Scalars['String']>>>;
  totalCost?: Maybe<Scalars['Int']>;
  totalCost_IC?: Maybe<Scalars['Int']>;
  totalCost_ICs?: Maybe<Array<Maybe<Scalars['Int']>>>;
  totalCost_SubProjects?: Maybe<Scalars['Int']>;
  totalCost_SubProjectss?: Maybe<Array<Maybe<Scalars['Int']>>>;
  totalCosts?: Maybe<Array<Maybe<Scalars['Int']>>>;
  type?: Maybe<Scalars['String']>;
  types?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Journal = {
   __typename?: 'Journal';
  _id?: Maybe<Scalars['Long']>;
  id: Scalars['ID'];
  lower_case_search_string: Scalars['String'];
  name: Scalars['String'];
  references: Array<LiteratureReference>;
};


export type JournalReferencesArgs = {
  DOI?: Maybe<Scalars['String']>;
  DOIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  PMID?: Maybe<Scalars['String']>;
  PMIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  abstract?: Maybe<Scalars['String']>;
  abstracts?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_LiteratureReferenceFilter>;
  first?: Maybe<Scalars['Int']>;
  firstPage?: Maybe<Scalars['String']>;
  firstPages?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  lastPage?: Maybe<Scalars['String']>;
  lastPages?: Maybe<Array<Maybe<Scalars['String']>>>;
  lower_case_search_string?: Maybe<Scalars['String']>;
  lower_case_search_strings?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_LiteratureReferenceOrdering>>>;
  publicationYear?: Maybe<Scalars['String']>;
  publicationYears?: Maybe<Array<Maybe<Scalars['String']>>>;
  shortReference?: Maybe<Scalars['String']>;
  shortReferences?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
  titles?: Maybe<Array<Maybe<Scalars['String']>>>;
  volume?: Maybe<Scalars['String']>;
  volumes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type LiteratureReference = {
   __typename?: 'LiteratureReference';
  DOI?: Maybe<Scalars['String']>;
  PMID?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['Long']>;
  abstract?: Maybe<Scalars['String']>;
  authors: Array<Author>;
  coreProjects: Array<Maybe<CoreProject>>;
  firstPage: Scalars['String'];
  id: Scalars['ID'];
  journal: Journal;
  lastPage: Scalars['String'];
  lower_case_search_string: Scalars['String'];
  publicationYear: Scalars['String'];
  shortReference: Scalars['String'];
  title: Scalars['String'];
  volume: Scalars['String'];
};


export type LiteratureReferenceAuthorsArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_AuthorFilter>;
  first?: Maybe<Scalars['Int']>;
  firstInitial?: Maybe<Scalars['String']>;
  firstInitials?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  lower_case_search_string?: Maybe<Scalars['String']>;
  lower_case_search_strings?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_AuthorOrdering>>>;
  surname?: Maybe<Scalars['String']>;
  surnames?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type LiteratureReferenceCoreProjectsArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  coreProjectNumber?: Maybe<Scalars['String']>;
  coreProjectNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_CoreProjectFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CoreProjectOrdering>>>;
};


export type LiteratureReferenceJournalArgs = {
  filter?: Maybe<_JournalFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  lower_case_search_string?: Maybe<Scalars['String']>;
  lower_case_search_strings?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_JournalOrdering>>>;
};


export type MutationType = {
   __typename?: 'MutationType';
  addAuthorReferences?: Maybe<Scalars['String']>;
  addClinicalTrialCoreProject?: Maybe<Scalars['String']>;
  addCoreProjectClinical_trials?: Maybe<Scalars['String']>;
  addCoreProjectGrants?: Maybe<Scalars['String']>;
  addCoreProjectPublications?: Maybe<Scalars['String']>;
  addFundedOrganizationGrants?: Maybe<Scalars['String']>;
  addJournalReferences?: Maybe<Scalars['String']>;
  addLiteratureReferenceAuthors?: Maybe<Scalars['String']>;
  addLiteratureReferenceCoreProjects?: Maybe<Scalars['String']>;
  addLiteratureReferenceJournal?: Maybe<Scalars['String']>;
  addNIHGrantAdministeringIC?: Maybe<Scalars['String']>;
  addNIHGrantContactPIorProjectLeader?: Maybe<Scalars['String']>;
  addNIHGrantCoreProject?: Maybe<Scalars['String']>;
  addNIHGrantFundingIC?: Maybe<Scalars['String']>;
  addNIHGrantOrganization?: Maybe<Scalars['String']>;
  addNIHInstituteOrCenterGrantsAdministered?: Maybe<Scalars['String']>;
  addNIHInstituteOrCenterGrantsFunded?: Maybe<Scalars['String']>;
  addPrincipalInvestigatorGrants?: Maybe<Scalars['String']>;
  addUserAuthor?: Maybe<Scalars['String']>;
  addUserPi?: Maybe<Scalars['String']>;
  createAuthor?: Maybe<Scalars['String']>;
  createClinicalTrial?: Maybe<Scalars['String']>;
  createCoreProject?: Maybe<Scalars['String']>;
  createFundedOrganization?: Maybe<Scalars['String']>;
  createJournal?: Maybe<Scalars['String']>;
  createLiteratureReference?: Maybe<Scalars['String']>;
  createNIHGrant?: Maybe<Scalars['String']>;
  createNIHInstituteOrCenter?: Maybe<Scalars['String']>;
  createPrincipalInvestigator?: Maybe<Scalars['String']>;
  createUser?: Maybe<Scalars['String']>;
  deleteAuthor?: Maybe<Scalars['String']>;
  deleteAuthorReferences?: Maybe<Scalars['String']>;
  deleteClinicalTrial?: Maybe<Scalars['String']>;
  deleteClinicalTrialCoreProject?: Maybe<Scalars['String']>;
  deleteCoreProject?: Maybe<Scalars['String']>;
  deleteCoreProjectClinical_trials?: Maybe<Scalars['String']>;
  deleteCoreProjectGrants?: Maybe<Scalars['String']>;
  deleteCoreProjectPublications?: Maybe<Scalars['String']>;
  deleteFundedOrganization?: Maybe<Scalars['String']>;
  deleteFundedOrganizationGrants?: Maybe<Scalars['String']>;
  deleteJournal?: Maybe<Scalars['String']>;
  deleteJournalReferences?: Maybe<Scalars['String']>;
  deleteLiteratureReference?: Maybe<Scalars['String']>;
  deleteLiteratureReferenceAuthors?: Maybe<Scalars['String']>;
  deleteLiteratureReferenceCoreProjects?: Maybe<Scalars['String']>;
  deleteLiteratureReferenceJournal?: Maybe<Scalars['String']>;
  deleteNIHGrant?: Maybe<Scalars['String']>;
  deleteNIHGrantAdministeringIC?: Maybe<Scalars['String']>;
  deleteNIHGrantContactPIorProjectLeader?: Maybe<Scalars['String']>;
  deleteNIHGrantCoreProject?: Maybe<Scalars['String']>;
  deleteNIHGrantFundingIC?: Maybe<Scalars['String']>;
  deleteNIHGrantOrganization?: Maybe<Scalars['String']>;
  deleteNIHInstituteOrCenter?: Maybe<Scalars['String']>;
  deleteNIHInstituteOrCenterGrantsAdministered?: Maybe<Scalars['String']>;
  deleteNIHInstituteOrCenterGrantsFunded?: Maybe<Scalars['String']>;
  deletePrincipalInvestigator?: Maybe<Scalars['String']>;
  deletePrincipalInvestigatorGrants?: Maybe<Scalars['String']>;
  deleteUser?: Maybe<Scalars['String']>;
  deleteUserAuthor?: Maybe<Scalars['String']>;
  deleteUserPi?: Maybe<Scalars['String']>;
  mergeAuthor?: Maybe<Scalars['String']>;
  mergeClinicalTrial?: Maybe<Scalars['String']>;
  mergeCoreProject?: Maybe<Scalars['String']>;
  mergeFundedOrganization?: Maybe<Scalars['String']>;
  mergeJournal?: Maybe<Scalars['String']>;
  mergeLiteratureReference?: Maybe<Scalars['String']>;
  mergeNIHGrant?: Maybe<Scalars['String']>;
  mergeNIHInstituteOrCenter?: Maybe<Scalars['String']>;
  mergePrincipalInvestigator?: Maybe<Scalars['String']>;
  mergeUser?: Maybe<Scalars['String']>;
  updateAuthor?: Maybe<Scalars['String']>;
  updateClinicalTrial?: Maybe<Scalars['String']>;
  updateCoreProject?: Maybe<Scalars['String']>;
  updateFundedOrganization?: Maybe<Scalars['String']>;
  updateJournal?: Maybe<Scalars['String']>;
  updateLiteratureReference?: Maybe<Scalars['String']>;
  updateNIHGrant?: Maybe<Scalars['String']>;
  updateNIHInstituteOrCenter?: Maybe<Scalars['String']>;
  updatePrincipalInvestigator?: Maybe<Scalars['String']>;
  updateUser?: Maybe<Scalars['String']>;
};


export type MutationTypeAddAuthorReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeAddClinicalTrialCoreProjectArgs = {
  coreProject: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddCoreProjectClinical_TrialsArgs = {
  clinical_trials: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddCoreProjectGrantsArgs = {
  grants: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddCoreProjectPublicationsArgs = {
  id: Scalars['ID'];
  publications: Array<Scalars['ID']>;
};


export type MutationTypeAddFundedOrganizationGrantsArgs = {
  grants: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddJournalReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeAddLiteratureReferenceAuthorsArgs = {
  authors: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddLiteratureReferenceCoreProjectsArgs = {
  coreProjects: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddLiteratureReferenceJournalArgs = {
  id: Scalars['ID'];
  journal: Array<Scalars['ID']>;
};


export type MutationTypeAddNihGrantAdministeringIcArgs = {
  administeringIC: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddNihGrantContactPIorProjectLeaderArgs = {
  contactPIorProjectLeader: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddNihGrantCoreProjectArgs = {
  coreProject: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddNihGrantFundingIcArgs = {
  fundingIC: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddNihGrantOrganizationArgs = {
  id: Scalars['ID'];
  organization: Array<Scalars['ID']>;
};


export type MutationTypeAddNihInstituteOrCenterGrantsAdministeredArgs = {
  grantsAdministered: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddNihInstituteOrCenterGrantsFundedArgs = {
  grantsFunded: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddPrincipalInvestigatorGrantsArgs = {
  grants: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddUserAuthorArgs = {
  author: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddUserPiArgs = {
  id: Scalars['ID'];
  pi: Array<Scalars['ID']>;
};


export type MutationTypeCreateAuthorArgs = {
  firstInitial: Scalars['String'];
  id: Scalars['ID'];
  lower_case_search_string: Scalars['String'];
  surname: Scalars['String'];
};


export type MutationTypeCreateClinicalTrialArgs = {
  brief_summary: Scalars['String'];
  brief_title: Scalars['String'];
  conditions: Array<Maybe<Scalars['String']>>;
  detailed_description: Scalars['String'];
  drugs: Array<Maybe<Scalars['String']>>;
  id: Scalars['ID'];
  lower_case_search_string: Scalars['String'];
  nct_id: Scalars['String'];
  official_title: Scalars['String'];
  phases: Array<Maybe<Scalars['String']>>;
  status: Scalars['String'];
  status_date: Scalars['String'];
  study_type: Scalars['String'];
};


export type MutationTypeCreateCoreProjectArgs = {
  coreProjectNumber: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeCreateFundedOrganizationArgs = {
  city: Scalars['String'];
  country: Scalars['String'];
  id: Scalars['ID'];
  lower_case_search_string: Scalars['String'];
  name: Scalars['String'];
  organizationID: Scalars['String'];
  state: Scalars['String'];
  type: Scalars['String'];
};


export type MutationTypeCreateJournalArgs = {
  id: Scalars['ID'];
  lower_case_search_string: Scalars['String'];
  name: Scalars['String'];
};


export type MutationTypeCreateLiteratureReferenceArgs = {
  DOI?: Maybe<Scalars['String']>;
  PMID?: Maybe<Scalars['String']>;
  abstract?: Maybe<Scalars['String']>;
  firstPage: Scalars['String'];
  id: Scalars['ID'];
  lastPage: Scalars['String'];
  lower_case_search_string: Scalars['String'];
  publicationYear: Scalars['String'];
  shortReference: Scalars['String'];
  title: Scalars['String'];
  volume: Scalars['String'];
};


export type MutationTypeCreateNihGrantArgs = {
  CFDACode: Scalars['String'];
  FOA: Scalars['String'];
  IC: Scalars['String'];
  NIHCOVID19Response: Scalars['String'];
  abstract?: Maybe<Scalars['String']>;
  activity: Scalars['String'];
  applicationID: Scalars['String'];
  awardNoticeDate: Scalars['String'];
  budgetEndDate: Scalars['String'];
  budgetStartDate: Scalars['String'];
  department: Scalars['String'];
  directCost_IC: Scalars['Int'];
  fiscalYear: Scalars['String'];
  fundingMechanism: Scalars['String'];
  id: Scalars['ID'];
  inDirectCost_IC: Scalars['Int'];
  lower_case_search_string: Scalars['String'];
  nihSpendingCategorization: Scalars['String'];
  otherPIorProjectLeaders: Scalars['String'];
  programOfficialInformation: Scalars['String'];
  projectEndDate: Scalars['String'];
  projectNumber: Scalars['String'];
  projectStartDate: Scalars['String'];
  projectTerms: Scalars['String'];
  projectTitle: Scalars['String'];
  publicHealthRelevance: Scalars['String'];
  serialNumber: Scalars['String'];
  studySection: Scalars['String'];
  supportYear: Scalars['String'];
  totalCost: Scalars['Int'];
  totalCost_IC: Scalars['Int'];
  totalCost_SubProjects: Scalars['Int'];
  type: Scalars['String'];
};


export type MutationTypeCreateNihInstituteOrCenterArgs = {
  id: Scalars['ID'];
  lower_case_search_string: Scalars['String'];
  name: Scalars['String'];
};


export type MutationTypeCreatePrincipalInvestigatorArgs = {
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lower_case_search_string: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  personID: Scalars['String'];
  surname: Scalars['String'];
};


export type MutationTypeCreateUserArgs = {
  email: Scalars['String'];
  firstInitial: Scalars['String'];
  id: Scalars['ID'];
  lower_case_search_string: Scalars['String'];
  password: Scalars['String'];
  surname: Scalars['String'];
  user_name: Scalars['String'];
};


export type MutationTypeDeleteAuthorArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteAuthorReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeDeleteClinicalTrialArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteClinicalTrialCoreProjectArgs = {
  coreProject: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteCoreProjectArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteCoreProjectClinical_TrialsArgs = {
  clinical_trials: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteCoreProjectGrantsArgs = {
  grants: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteCoreProjectPublicationsArgs = {
  id: Scalars['ID'];
  publications: Array<Scalars['ID']>;
};


export type MutationTypeDeleteFundedOrganizationArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteFundedOrganizationGrantsArgs = {
  grants: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteJournalArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteJournalReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeDeleteLiteratureReferenceArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteLiteratureReferenceAuthorsArgs = {
  authors: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteLiteratureReferenceCoreProjectsArgs = {
  coreProjects: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteLiteratureReferenceJournalArgs = {
  id: Scalars['ID'];
  journal: Array<Scalars['ID']>;
};


export type MutationTypeDeleteNihGrantArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteNihGrantAdministeringIcArgs = {
  administeringIC: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteNihGrantContactPIorProjectLeaderArgs = {
  contactPIorProjectLeader: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteNihGrantCoreProjectArgs = {
  coreProject: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteNihGrantFundingIcArgs = {
  fundingIC: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteNihGrantOrganizationArgs = {
  id: Scalars['ID'];
  organization: Array<Scalars['ID']>;
};


export type MutationTypeDeleteNihInstituteOrCenterArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteNihInstituteOrCenterGrantsAdministeredArgs = {
  grantsAdministered: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteNihInstituteOrCenterGrantsFundedArgs = {
  grantsFunded: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeletePrincipalInvestigatorArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeletePrincipalInvestigatorGrantsArgs = {
  grants: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteUserAuthorArgs = {
  author: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteUserPiArgs = {
  id: Scalars['ID'];
  pi: Array<Scalars['ID']>;
};


export type MutationTypeMergeAuthorArgs = {
  firstInitial: Scalars['String'];
  id: Scalars['ID'];
  lower_case_search_string: Scalars['String'];
  surname: Scalars['String'];
};


export type MutationTypeMergeClinicalTrialArgs = {
  brief_summary: Scalars['String'];
  brief_title: Scalars['String'];
  conditions: Array<Maybe<Scalars['String']>>;
  detailed_description: Scalars['String'];
  drugs: Array<Maybe<Scalars['String']>>;
  id: Scalars['ID'];
  lower_case_search_string: Scalars['String'];
  nct_id: Scalars['String'];
  official_title: Scalars['String'];
  phases: Array<Maybe<Scalars['String']>>;
  status: Scalars['String'];
  status_date: Scalars['String'];
  study_type: Scalars['String'];
};


export type MutationTypeMergeCoreProjectArgs = {
  coreProjectNumber: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeMergeFundedOrganizationArgs = {
  city: Scalars['String'];
  country: Scalars['String'];
  id: Scalars['ID'];
  lower_case_search_string: Scalars['String'];
  name: Scalars['String'];
  organizationID: Scalars['String'];
  state: Scalars['String'];
  type: Scalars['String'];
};


export type MutationTypeMergeJournalArgs = {
  id: Scalars['ID'];
  lower_case_search_string: Scalars['String'];
  name: Scalars['String'];
};


export type MutationTypeMergeLiteratureReferenceArgs = {
  DOI?: Maybe<Scalars['String']>;
  PMID?: Maybe<Scalars['String']>;
  abstract?: Maybe<Scalars['String']>;
  firstPage: Scalars['String'];
  id: Scalars['ID'];
  lastPage: Scalars['String'];
  lower_case_search_string: Scalars['String'];
  publicationYear: Scalars['String'];
  shortReference: Scalars['String'];
  title: Scalars['String'];
  volume: Scalars['String'];
};


export type MutationTypeMergeNihGrantArgs = {
  CFDACode: Scalars['String'];
  FOA: Scalars['String'];
  IC: Scalars['String'];
  NIHCOVID19Response: Scalars['String'];
  abstract?: Maybe<Scalars['String']>;
  activity: Scalars['String'];
  applicationID: Scalars['String'];
  awardNoticeDate: Scalars['String'];
  budgetEndDate: Scalars['String'];
  budgetStartDate: Scalars['String'];
  department: Scalars['String'];
  directCost_IC: Scalars['Int'];
  fiscalYear: Scalars['String'];
  fundingMechanism: Scalars['String'];
  id: Scalars['ID'];
  inDirectCost_IC: Scalars['Int'];
  lower_case_search_string: Scalars['String'];
  nihSpendingCategorization: Scalars['String'];
  otherPIorProjectLeaders: Scalars['String'];
  programOfficialInformation: Scalars['String'];
  projectEndDate: Scalars['String'];
  projectNumber: Scalars['String'];
  projectStartDate: Scalars['String'];
  projectTerms: Scalars['String'];
  projectTitle: Scalars['String'];
  publicHealthRelevance: Scalars['String'];
  serialNumber: Scalars['String'];
  studySection: Scalars['String'];
  supportYear: Scalars['String'];
  totalCost: Scalars['Int'];
  totalCost_IC: Scalars['Int'];
  totalCost_SubProjects: Scalars['Int'];
  type: Scalars['String'];
};


export type MutationTypeMergeNihInstituteOrCenterArgs = {
  id: Scalars['ID'];
  lower_case_search_string: Scalars['String'];
  name: Scalars['String'];
};


export type MutationTypeMergePrincipalInvestigatorArgs = {
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lower_case_search_string: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  personID: Scalars['String'];
  surname: Scalars['String'];
};


export type MutationTypeMergeUserArgs = {
  email: Scalars['String'];
  firstInitial: Scalars['String'];
  id: Scalars['ID'];
  lower_case_search_string: Scalars['String'];
  password: Scalars['String'];
  surname: Scalars['String'];
  user_name: Scalars['String'];
};


export type MutationTypeUpdateAuthorArgs = {
  firstInitial: Scalars['String'];
  id: Scalars['ID'];
  lower_case_search_string: Scalars['String'];
  surname: Scalars['String'];
};


export type MutationTypeUpdateClinicalTrialArgs = {
  brief_summary: Scalars['String'];
  brief_title: Scalars['String'];
  conditions: Array<Maybe<Scalars['String']>>;
  detailed_description: Scalars['String'];
  drugs: Array<Maybe<Scalars['String']>>;
  id: Scalars['ID'];
  lower_case_search_string: Scalars['String'];
  nct_id: Scalars['String'];
  official_title: Scalars['String'];
  phases: Array<Maybe<Scalars['String']>>;
  status: Scalars['String'];
  status_date: Scalars['String'];
  study_type: Scalars['String'];
};


export type MutationTypeUpdateCoreProjectArgs = {
  coreProjectNumber: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeUpdateFundedOrganizationArgs = {
  city: Scalars['String'];
  country: Scalars['String'];
  id: Scalars['ID'];
  lower_case_search_string: Scalars['String'];
  name: Scalars['String'];
  organizationID: Scalars['String'];
  state: Scalars['String'];
  type: Scalars['String'];
};


export type MutationTypeUpdateJournalArgs = {
  id: Scalars['ID'];
  lower_case_search_string: Scalars['String'];
  name: Scalars['String'];
};


export type MutationTypeUpdateLiteratureReferenceArgs = {
  DOI?: Maybe<Scalars['String']>;
  PMID?: Maybe<Scalars['String']>;
  abstract?: Maybe<Scalars['String']>;
  firstPage: Scalars['String'];
  id: Scalars['ID'];
  lastPage: Scalars['String'];
  lower_case_search_string: Scalars['String'];
  publicationYear: Scalars['String'];
  shortReference: Scalars['String'];
  title: Scalars['String'];
  volume: Scalars['String'];
};


export type MutationTypeUpdateNihGrantArgs = {
  CFDACode: Scalars['String'];
  FOA: Scalars['String'];
  IC: Scalars['String'];
  NIHCOVID19Response: Scalars['String'];
  abstract?: Maybe<Scalars['String']>;
  activity: Scalars['String'];
  applicationID: Scalars['String'];
  awardNoticeDate: Scalars['String'];
  budgetEndDate: Scalars['String'];
  budgetStartDate: Scalars['String'];
  department: Scalars['String'];
  directCost_IC: Scalars['Int'];
  fiscalYear: Scalars['String'];
  fundingMechanism: Scalars['String'];
  id: Scalars['ID'];
  inDirectCost_IC: Scalars['Int'];
  lower_case_search_string: Scalars['String'];
  nihSpendingCategorization: Scalars['String'];
  otherPIorProjectLeaders: Scalars['String'];
  programOfficialInformation: Scalars['String'];
  projectEndDate: Scalars['String'];
  projectNumber: Scalars['String'];
  projectStartDate: Scalars['String'];
  projectTerms: Scalars['String'];
  projectTitle: Scalars['String'];
  publicHealthRelevance: Scalars['String'];
  serialNumber: Scalars['String'];
  studySection: Scalars['String'];
  supportYear: Scalars['String'];
  totalCost: Scalars['Int'];
  totalCost_IC: Scalars['Int'];
  totalCost_SubProjects: Scalars['Int'];
  type: Scalars['String'];
};


export type MutationTypeUpdateNihInstituteOrCenterArgs = {
  id: Scalars['ID'];
  lower_case_search_string: Scalars['String'];
  name: Scalars['String'];
};


export type MutationTypeUpdatePrincipalInvestigatorArgs = {
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lower_case_search_string: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  personID: Scalars['String'];
  surname: Scalars['String'];
};


export type MutationTypeUpdateUserArgs = {
  email: Scalars['String'];
  firstInitial: Scalars['String'];
  id: Scalars['ID'];
  lower_case_search_string: Scalars['String'];
  password: Scalars['String'];
  surname: Scalars['String'];
  user_name: Scalars['String'];
};

export type NihGrant = {
   __typename?: 'NIHGrant';
  CFDACode: Scalars['String'];
  FOA: Scalars['String'];
  IC: Scalars['String'];
  NIHCOVID19Response: Scalars['String'];
  _id?: Maybe<Scalars['Long']>;
  abstract?: Maybe<Scalars['String']>;
  activity: Scalars['String'];
  administeringIC: NihInstituteOrCenter;
  applicationID: Scalars['String'];
  awardNoticeDate: Scalars['String'];
  budgetEndDate: Scalars['String'];
  budgetStartDate: Scalars['String'];
  contactPIorProjectLeader: PrincipalInvestigator;
  coreProject: CoreProject;
  department: Scalars['String'];
  directCost_IC: Scalars['Int'];
  fiscalYear: Scalars['String'];
  fundingIC: NihInstituteOrCenter;
  fundingMechanism: Scalars['String'];
  id: Scalars['ID'];
  inDirectCost_IC: Scalars['Int'];
  lower_case_search_string: Scalars['String'];
  nihSpendingCategorization: Scalars['String'];
  organization: FundedOrganization;
  otherPIorProjectLeaders: Scalars['String'];
  programOfficialInformation: Scalars['String'];
  projectEndDate: Scalars['String'];
  projectNumber: Scalars['String'];
  projectStartDate: Scalars['String'];
  projectTerms: Scalars['String'];
  projectTitle: Scalars['String'];
  publicHealthRelevance: Scalars['String'];
  serialNumber: Scalars['String'];
  studySection: Scalars['String'];
  supportYear: Scalars['String'];
  totalCost: Scalars['Int'];
  totalCost_IC: Scalars['Int'];
  totalCost_SubProjects: Scalars['Int'];
  type: Scalars['String'];
};


export type NihGrantAdministeringIcArgs = {
  filter?: Maybe<_NihInstituteOrCenterFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  lower_case_search_string?: Maybe<Scalars['String']>;
  lower_case_search_strings?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_NihInstituteOrCenterOrdering>>>;
};


export type NihGrantContactPIorProjectLeaderArgs = {
  filter?: Maybe<_PrincipalInvestigatorFilter>;
  firstName?: Maybe<Scalars['String']>;
  firstNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  lower_case_search_string?: Maybe<Scalars['String']>;
  lower_case_search_strings?: Maybe<Array<Maybe<Scalars['String']>>>;
  middleName?: Maybe<Scalars['String']>;
  middleNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_PrincipalInvestigatorOrdering>>>;
  personID?: Maybe<Scalars['String']>;
  personIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  surname?: Maybe<Scalars['String']>;
  surnames?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type NihGrantCoreProjectArgs = {
  coreProjectNumber?: Maybe<Scalars['String']>;
  coreProjectNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_CoreProjectFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_CoreProjectOrdering>>>;
};


export type NihGrantFundingIcArgs = {
  filter?: Maybe<_NihInstituteOrCenterFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  lower_case_search_string?: Maybe<Scalars['String']>;
  lower_case_search_strings?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_NihInstituteOrCenterOrdering>>>;
};


export type NihGrantOrganizationArgs = {
  city?: Maybe<Scalars['String']>;
  citys?: Maybe<Array<Maybe<Scalars['String']>>>;
  country?: Maybe<Scalars['String']>;
  countrys?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_FundedOrganizationFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  lower_case_search_string?: Maybe<Scalars['String']>;
  lower_case_search_strings?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_FundedOrganizationOrdering>>>;
  organizationID?: Maybe<Scalars['String']>;
  organizationIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  state?: Maybe<Scalars['String']>;
  states?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
  types?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type NihInstituteOrCenter = {
   __typename?: 'NIHInstituteOrCenter';
  _id?: Maybe<Scalars['Long']>;
  grantsAdministered?: Maybe<Array<Maybe<NihGrant>>>;
  grantsFunded?: Maybe<Array<Maybe<NihGrant>>>;
  id: Scalars['ID'];
  lower_case_search_string: Scalars['String'];
  name: Scalars['String'];
};


export type NihInstituteOrCenterGrantsAdministeredArgs = {
  CFDACode?: Maybe<Scalars['String']>;
  CFDACodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  FOA?: Maybe<Scalars['String']>;
  FOAs?: Maybe<Array<Maybe<Scalars['String']>>>;
  IC?: Maybe<Scalars['String']>;
  ICs?: Maybe<Array<Maybe<Scalars['String']>>>;
  NIHCOVID19Response?: Maybe<Scalars['String']>;
  NIHCOVID19Responses?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  abstract?: Maybe<Scalars['String']>;
  abstracts?: Maybe<Array<Maybe<Scalars['String']>>>;
  activity?: Maybe<Scalars['String']>;
  activitys?: Maybe<Array<Maybe<Scalars['String']>>>;
  applicationID?: Maybe<Scalars['String']>;
  applicationIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  awardNoticeDate?: Maybe<Scalars['String']>;
  awardNoticeDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  budgetEndDate?: Maybe<Scalars['String']>;
  budgetEndDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  budgetStartDate?: Maybe<Scalars['String']>;
  budgetStartDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  department?: Maybe<Scalars['String']>;
  departments?: Maybe<Array<Maybe<Scalars['String']>>>;
  directCost_IC?: Maybe<Scalars['Int']>;
  directCost_ICs?: Maybe<Array<Maybe<Scalars['Int']>>>;
  filter?: Maybe<_NihGrantFilter>;
  first?: Maybe<Scalars['Int']>;
  fiscalYear?: Maybe<Scalars['String']>;
  fiscalYears?: Maybe<Array<Maybe<Scalars['String']>>>;
  fundingMechanism?: Maybe<Scalars['String']>;
  fundingMechanisms?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  inDirectCost_IC?: Maybe<Scalars['Int']>;
  inDirectCost_ICs?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lower_case_search_string?: Maybe<Scalars['String']>;
  lower_case_search_strings?: Maybe<Array<Maybe<Scalars['String']>>>;
  nihSpendingCategorization?: Maybe<Scalars['String']>;
  nihSpendingCategorizations?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_NihGrantOrdering>>>;
  otherPIorProjectLeaders?: Maybe<Scalars['String']>;
  otherPIorProjectLeaderss?: Maybe<Array<Maybe<Scalars['String']>>>;
  programOfficialInformation?: Maybe<Scalars['String']>;
  programOfficialInformations?: Maybe<Array<Maybe<Scalars['String']>>>;
  projectEndDate?: Maybe<Scalars['String']>;
  projectEndDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  projectNumber?: Maybe<Scalars['String']>;
  projectNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  projectStartDate?: Maybe<Scalars['String']>;
  projectStartDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  projectTerms?: Maybe<Scalars['String']>;
  projectTermss?: Maybe<Array<Maybe<Scalars['String']>>>;
  projectTitle?: Maybe<Scalars['String']>;
  projectTitles?: Maybe<Array<Maybe<Scalars['String']>>>;
  publicHealthRelevance?: Maybe<Scalars['String']>;
  publicHealthRelevances?: Maybe<Array<Maybe<Scalars['String']>>>;
  serialNumber?: Maybe<Scalars['String']>;
  serialNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  studySection?: Maybe<Scalars['String']>;
  studySections?: Maybe<Array<Maybe<Scalars['String']>>>;
  supportYear?: Maybe<Scalars['String']>;
  supportYears?: Maybe<Array<Maybe<Scalars['String']>>>;
  totalCost?: Maybe<Scalars['Int']>;
  totalCost_IC?: Maybe<Scalars['Int']>;
  totalCost_ICs?: Maybe<Array<Maybe<Scalars['Int']>>>;
  totalCost_SubProjects?: Maybe<Scalars['Int']>;
  totalCost_SubProjectss?: Maybe<Array<Maybe<Scalars['Int']>>>;
  totalCosts?: Maybe<Array<Maybe<Scalars['Int']>>>;
  type?: Maybe<Scalars['String']>;
  types?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type NihInstituteOrCenterGrantsFundedArgs = {
  CFDACode?: Maybe<Scalars['String']>;
  CFDACodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  FOA?: Maybe<Scalars['String']>;
  FOAs?: Maybe<Array<Maybe<Scalars['String']>>>;
  IC?: Maybe<Scalars['String']>;
  ICs?: Maybe<Array<Maybe<Scalars['String']>>>;
  NIHCOVID19Response?: Maybe<Scalars['String']>;
  NIHCOVID19Responses?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  abstract?: Maybe<Scalars['String']>;
  abstracts?: Maybe<Array<Maybe<Scalars['String']>>>;
  activity?: Maybe<Scalars['String']>;
  activitys?: Maybe<Array<Maybe<Scalars['String']>>>;
  applicationID?: Maybe<Scalars['String']>;
  applicationIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  awardNoticeDate?: Maybe<Scalars['String']>;
  awardNoticeDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  budgetEndDate?: Maybe<Scalars['String']>;
  budgetEndDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  budgetStartDate?: Maybe<Scalars['String']>;
  budgetStartDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  department?: Maybe<Scalars['String']>;
  departments?: Maybe<Array<Maybe<Scalars['String']>>>;
  directCost_IC?: Maybe<Scalars['Int']>;
  directCost_ICs?: Maybe<Array<Maybe<Scalars['Int']>>>;
  filter?: Maybe<_NihGrantFilter>;
  first?: Maybe<Scalars['Int']>;
  fiscalYear?: Maybe<Scalars['String']>;
  fiscalYears?: Maybe<Array<Maybe<Scalars['String']>>>;
  fundingMechanism?: Maybe<Scalars['String']>;
  fundingMechanisms?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  inDirectCost_IC?: Maybe<Scalars['Int']>;
  inDirectCost_ICs?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lower_case_search_string?: Maybe<Scalars['String']>;
  lower_case_search_strings?: Maybe<Array<Maybe<Scalars['String']>>>;
  nihSpendingCategorization?: Maybe<Scalars['String']>;
  nihSpendingCategorizations?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_NihGrantOrdering>>>;
  otherPIorProjectLeaders?: Maybe<Scalars['String']>;
  otherPIorProjectLeaderss?: Maybe<Array<Maybe<Scalars['String']>>>;
  programOfficialInformation?: Maybe<Scalars['String']>;
  programOfficialInformations?: Maybe<Array<Maybe<Scalars['String']>>>;
  projectEndDate?: Maybe<Scalars['String']>;
  projectEndDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  projectNumber?: Maybe<Scalars['String']>;
  projectNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  projectStartDate?: Maybe<Scalars['String']>;
  projectStartDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  projectTerms?: Maybe<Scalars['String']>;
  projectTermss?: Maybe<Array<Maybe<Scalars['String']>>>;
  projectTitle?: Maybe<Scalars['String']>;
  projectTitles?: Maybe<Array<Maybe<Scalars['String']>>>;
  publicHealthRelevance?: Maybe<Scalars['String']>;
  publicHealthRelevances?: Maybe<Array<Maybe<Scalars['String']>>>;
  serialNumber?: Maybe<Scalars['String']>;
  serialNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  studySection?: Maybe<Scalars['String']>;
  studySections?: Maybe<Array<Maybe<Scalars['String']>>>;
  supportYear?: Maybe<Scalars['String']>;
  supportYears?: Maybe<Array<Maybe<Scalars['String']>>>;
  totalCost?: Maybe<Scalars['Int']>;
  totalCost_IC?: Maybe<Scalars['Int']>;
  totalCost_ICs?: Maybe<Array<Maybe<Scalars['Int']>>>;
  totalCost_SubProjects?: Maybe<Scalars['Int']>;
  totalCost_SubProjectss?: Maybe<Array<Maybe<Scalars['Int']>>>;
  totalCosts?: Maybe<Array<Maybe<Scalars['Int']>>>;
  type?: Maybe<Scalars['String']>;
  types?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type PrincipalInvestigator = {
   __typename?: 'PrincipalInvestigator';
  _id?: Maybe<Scalars['Long']>;
  firstName: Scalars['String'];
  grants: Array<Maybe<NihGrant>>;
  id: Scalars['ID'];
  lower_case_search_string: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  personID: Scalars['String'];
  surname: Scalars['String'];
};


export type PrincipalInvestigatorGrantsArgs = {
  CFDACode?: Maybe<Scalars['String']>;
  CFDACodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  FOA?: Maybe<Scalars['String']>;
  FOAs?: Maybe<Array<Maybe<Scalars['String']>>>;
  IC?: Maybe<Scalars['String']>;
  ICs?: Maybe<Array<Maybe<Scalars['String']>>>;
  NIHCOVID19Response?: Maybe<Scalars['String']>;
  NIHCOVID19Responses?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  abstract?: Maybe<Scalars['String']>;
  abstracts?: Maybe<Array<Maybe<Scalars['String']>>>;
  activity?: Maybe<Scalars['String']>;
  activitys?: Maybe<Array<Maybe<Scalars['String']>>>;
  applicationID?: Maybe<Scalars['String']>;
  applicationIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  awardNoticeDate?: Maybe<Scalars['String']>;
  awardNoticeDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  budgetEndDate?: Maybe<Scalars['String']>;
  budgetEndDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  budgetStartDate?: Maybe<Scalars['String']>;
  budgetStartDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  department?: Maybe<Scalars['String']>;
  departments?: Maybe<Array<Maybe<Scalars['String']>>>;
  directCost_IC?: Maybe<Scalars['Int']>;
  directCost_ICs?: Maybe<Array<Maybe<Scalars['Int']>>>;
  filter?: Maybe<_NihGrantFilter>;
  first?: Maybe<Scalars['Int']>;
  fiscalYear?: Maybe<Scalars['String']>;
  fiscalYears?: Maybe<Array<Maybe<Scalars['String']>>>;
  fundingMechanism?: Maybe<Scalars['String']>;
  fundingMechanisms?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  inDirectCost_IC?: Maybe<Scalars['Int']>;
  inDirectCost_ICs?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lower_case_search_string?: Maybe<Scalars['String']>;
  lower_case_search_strings?: Maybe<Array<Maybe<Scalars['String']>>>;
  nihSpendingCategorization?: Maybe<Scalars['String']>;
  nihSpendingCategorizations?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_NihGrantOrdering>>>;
  otherPIorProjectLeaders?: Maybe<Scalars['String']>;
  otherPIorProjectLeaderss?: Maybe<Array<Maybe<Scalars['String']>>>;
  programOfficialInformation?: Maybe<Scalars['String']>;
  programOfficialInformations?: Maybe<Array<Maybe<Scalars['String']>>>;
  projectEndDate?: Maybe<Scalars['String']>;
  projectEndDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  projectNumber?: Maybe<Scalars['String']>;
  projectNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  projectStartDate?: Maybe<Scalars['String']>;
  projectStartDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  projectTerms?: Maybe<Scalars['String']>;
  projectTermss?: Maybe<Array<Maybe<Scalars['String']>>>;
  projectTitle?: Maybe<Scalars['String']>;
  projectTitles?: Maybe<Array<Maybe<Scalars['String']>>>;
  publicHealthRelevance?: Maybe<Scalars['String']>;
  publicHealthRelevances?: Maybe<Array<Maybe<Scalars['String']>>>;
  serialNumber?: Maybe<Scalars['String']>;
  serialNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  studySection?: Maybe<Scalars['String']>;
  studySections?: Maybe<Array<Maybe<Scalars['String']>>>;
  supportYear?: Maybe<Scalars['String']>;
  supportYears?: Maybe<Array<Maybe<Scalars['String']>>>;
  totalCost?: Maybe<Scalars['Int']>;
  totalCost_IC?: Maybe<Scalars['Int']>;
  totalCost_ICs?: Maybe<Array<Maybe<Scalars['Int']>>>;
  totalCost_SubProjects?: Maybe<Scalars['Int']>;
  totalCost_SubProjectss?: Maybe<Array<Maybe<Scalars['Int']>>>;
  totalCosts?: Maybe<Array<Maybe<Scalars['Int']>>>;
  type?: Maybe<Scalars['String']>;
  types?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type QueryType = {
   __typename?: 'QueryType';
  Author?: Maybe<Array<Maybe<Author>>>;
  ClinicalTrial?: Maybe<Array<Maybe<ClinicalTrial>>>;
  CoreProject?: Maybe<Array<Maybe<CoreProject>>>;
  FundedOrganization?: Maybe<Array<Maybe<FundedOrganization>>>;
  Journal?: Maybe<Array<Maybe<Journal>>>;
  LiteratureReference?: Maybe<Array<Maybe<LiteratureReference>>>;
  NIHGrant?: Maybe<Array<Maybe<NihGrant>>>;
  NIHInstituteOrCenter?: Maybe<Array<Maybe<NihInstituteOrCenter>>>;
  PrincipalInvestigator?: Maybe<Array<Maybe<PrincipalInvestigator>>>;
  User?: Maybe<Array<Maybe<User>>>;
};


export type QueryTypeAuthorArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_AuthorFilter>;
  first?: Maybe<Scalars['Int']>;
  firstInitial?: Maybe<Scalars['String']>;
  firstInitials?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  lower_case_search_string?: Maybe<Scalars['String']>;
  lower_case_search_strings?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_AuthorOrdering>>>;
  surname?: Maybe<Scalars['String']>;
  surnames?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTypeClinicalTrialArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  brief_summary?: Maybe<Scalars['String']>;
  brief_summarys?: Maybe<Array<Maybe<Scalars['String']>>>;
  brief_title?: Maybe<Scalars['String']>;
  brief_titles?: Maybe<Array<Maybe<Scalars['String']>>>;
  conditions?: Maybe<Array<Maybe<Scalars['String']>>>;
  conditionss?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  detailed_description?: Maybe<Scalars['String']>;
  detailed_descriptions?: Maybe<Array<Maybe<Scalars['String']>>>;
  drugs?: Maybe<Array<Maybe<Scalars['String']>>>;
  drugss?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  filter?: Maybe<_ClinicalTrialFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  lower_case_search_string?: Maybe<Scalars['String']>;
  lower_case_search_strings?: Maybe<Array<Maybe<Scalars['String']>>>;
  nct_id?: Maybe<Scalars['String']>;
  nct_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  official_title?: Maybe<Scalars['String']>;
  official_titles?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ClinicalTrialOrdering>>>;
  phases?: Maybe<Array<Maybe<Scalars['String']>>>;
  phasess?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  status?: Maybe<Scalars['String']>;
  status_date?: Maybe<Scalars['String']>;
  status_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  statuss?: Maybe<Array<Maybe<Scalars['String']>>>;
  study_type?: Maybe<Scalars['String']>;
  study_types?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTypeCoreProjectArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  coreProjectNumber?: Maybe<Scalars['String']>;
  coreProjectNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_CoreProjectFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CoreProjectOrdering>>>;
};


export type QueryTypeFundedOrganizationArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  city?: Maybe<Scalars['String']>;
  citys?: Maybe<Array<Maybe<Scalars['String']>>>;
  country?: Maybe<Scalars['String']>;
  countrys?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_FundedOrganizationFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  lower_case_search_string?: Maybe<Scalars['String']>;
  lower_case_search_strings?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_FundedOrganizationOrdering>>>;
  organizationID?: Maybe<Scalars['String']>;
  organizationIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  state?: Maybe<Scalars['String']>;
  states?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
  types?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTypeJournalArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_JournalFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  lower_case_search_string?: Maybe<Scalars['String']>;
  lower_case_search_strings?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_JournalOrdering>>>;
};


export type QueryTypeLiteratureReferenceArgs = {
  DOI?: Maybe<Scalars['String']>;
  DOIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  PMID?: Maybe<Scalars['String']>;
  PMIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  abstract?: Maybe<Scalars['String']>;
  abstracts?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_LiteratureReferenceFilter>;
  first?: Maybe<Scalars['Int']>;
  firstPage?: Maybe<Scalars['String']>;
  firstPages?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  lastPage?: Maybe<Scalars['String']>;
  lastPages?: Maybe<Array<Maybe<Scalars['String']>>>;
  lower_case_search_string?: Maybe<Scalars['String']>;
  lower_case_search_strings?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_LiteratureReferenceOrdering>>>;
  publicationYear?: Maybe<Scalars['String']>;
  publicationYears?: Maybe<Array<Maybe<Scalars['String']>>>;
  shortReference?: Maybe<Scalars['String']>;
  shortReferences?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
  titles?: Maybe<Array<Maybe<Scalars['String']>>>;
  volume?: Maybe<Scalars['String']>;
  volumes?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTypeNihGrantArgs = {
  CFDACode?: Maybe<Scalars['String']>;
  CFDACodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  FOA?: Maybe<Scalars['String']>;
  FOAs?: Maybe<Array<Maybe<Scalars['String']>>>;
  IC?: Maybe<Scalars['String']>;
  ICs?: Maybe<Array<Maybe<Scalars['String']>>>;
  NIHCOVID19Response?: Maybe<Scalars['String']>;
  NIHCOVID19Responses?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  abstract?: Maybe<Scalars['String']>;
  abstracts?: Maybe<Array<Maybe<Scalars['String']>>>;
  activity?: Maybe<Scalars['String']>;
  activitys?: Maybe<Array<Maybe<Scalars['String']>>>;
  applicationID?: Maybe<Scalars['String']>;
  applicationIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  awardNoticeDate?: Maybe<Scalars['String']>;
  awardNoticeDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  budgetEndDate?: Maybe<Scalars['String']>;
  budgetEndDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  budgetStartDate?: Maybe<Scalars['String']>;
  budgetStartDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  department?: Maybe<Scalars['String']>;
  departments?: Maybe<Array<Maybe<Scalars['String']>>>;
  directCost_IC?: Maybe<Scalars['Int']>;
  directCost_ICs?: Maybe<Array<Maybe<Scalars['Int']>>>;
  filter?: Maybe<_NihGrantFilter>;
  first?: Maybe<Scalars['Int']>;
  fiscalYear?: Maybe<Scalars['String']>;
  fiscalYears?: Maybe<Array<Maybe<Scalars['String']>>>;
  fundingMechanism?: Maybe<Scalars['String']>;
  fundingMechanisms?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  inDirectCost_IC?: Maybe<Scalars['Int']>;
  inDirectCost_ICs?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lower_case_search_string?: Maybe<Scalars['String']>;
  lower_case_search_strings?: Maybe<Array<Maybe<Scalars['String']>>>;
  nihSpendingCategorization?: Maybe<Scalars['String']>;
  nihSpendingCategorizations?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_NihGrantOrdering>>>;
  otherPIorProjectLeaders?: Maybe<Scalars['String']>;
  otherPIorProjectLeaderss?: Maybe<Array<Maybe<Scalars['String']>>>;
  programOfficialInformation?: Maybe<Scalars['String']>;
  programOfficialInformations?: Maybe<Array<Maybe<Scalars['String']>>>;
  projectEndDate?: Maybe<Scalars['String']>;
  projectEndDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  projectNumber?: Maybe<Scalars['String']>;
  projectNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  projectStartDate?: Maybe<Scalars['String']>;
  projectStartDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  projectTerms?: Maybe<Scalars['String']>;
  projectTermss?: Maybe<Array<Maybe<Scalars['String']>>>;
  projectTitle?: Maybe<Scalars['String']>;
  projectTitles?: Maybe<Array<Maybe<Scalars['String']>>>;
  publicHealthRelevance?: Maybe<Scalars['String']>;
  publicHealthRelevances?: Maybe<Array<Maybe<Scalars['String']>>>;
  serialNumber?: Maybe<Scalars['String']>;
  serialNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  studySection?: Maybe<Scalars['String']>;
  studySections?: Maybe<Array<Maybe<Scalars['String']>>>;
  supportYear?: Maybe<Scalars['String']>;
  supportYears?: Maybe<Array<Maybe<Scalars['String']>>>;
  totalCost?: Maybe<Scalars['Int']>;
  totalCost_IC?: Maybe<Scalars['Int']>;
  totalCost_ICs?: Maybe<Array<Maybe<Scalars['Int']>>>;
  totalCost_SubProjects?: Maybe<Scalars['Int']>;
  totalCost_SubProjectss?: Maybe<Array<Maybe<Scalars['Int']>>>;
  totalCosts?: Maybe<Array<Maybe<Scalars['Int']>>>;
  type?: Maybe<Scalars['String']>;
  types?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTypeNihInstituteOrCenterArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_NihInstituteOrCenterFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  lower_case_search_string?: Maybe<Scalars['String']>;
  lower_case_search_strings?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_NihInstituteOrCenterOrdering>>>;
};


export type QueryTypePrincipalInvestigatorArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_PrincipalInvestigatorFilter>;
  first?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  firstNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  lower_case_search_string?: Maybe<Scalars['String']>;
  lower_case_search_strings?: Maybe<Array<Maybe<Scalars['String']>>>;
  middleName?: Maybe<Scalars['String']>;
  middleNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_PrincipalInvestigatorOrdering>>>;
  personID?: Maybe<Scalars['String']>;
  personIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  surname?: Maybe<Scalars['String']>;
  surnames?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTypeUserArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  email?: Maybe<Scalars['String']>;
  emails?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_UserFilter>;
  first?: Maybe<Scalars['Int']>;
  firstInitial?: Maybe<Scalars['String']>;
  firstInitials?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  lower_case_search_string?: Maybe<Scalars['String']>;
  lower_case_search_strings?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UserOrdering>>>;
  password?: Maybe<Scalars['String']>;
  passwords?: Maybe<Array<Maybe<Scalars['String']>>>;
  surname?: Maybe<Scalars['String']>;
  surnames?: Maybe<Array<Maybe<Scalars['String']>>>;
  user_name?: Maybe<Scalars['String']>;
  user_names?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type User = {
   __typename?: 'User';
  _id?: Maybe<Scalars['Long']>;
  author?: Maybe<Author>;
  email: Scalars['String'];
  firstInitial: Scalars['String'];
  id: Scalars['ID'];
  lower_case_search_string: Scalars['String'];
  password: Scalars['String'];
  pi?: Maybe<PrincipalInvestigator>;
  surname: Scalars['String'];
  user_name: Scalars['String'];
};


export type UserAuthorArgs = {
  filter?: Maybe<_AuthorFilter>;
  firstInitial?: Maybe<Scalars['String']>;
  firstInitials?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  lower_case_search_string?: Maybe<Scalars['String']>;
  lower_case_search_strings?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_AuthorOrdering>>>;
  surname?: Maybe<Scalars['String']>;
  surnames?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type UserPiArgs = {
  filter?: Maybe<_PrincipalInvestigatorFilter>;
  firstName?: Maybe<Scalars['String']>;
  firstNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  lower_case_search_string?: Maybe<Scalars['String']>;
  lower_case_search_strings?: Maybe<Array<Maybe<Scalars['String']>>>;
  middleName?: Maybe<Scalars['String']>;
  middleNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_PrincipalInvestigatorOrdering>>>;
  personID?: Maybe<Scalars['String']>;
  personIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  surname?: Maybe<Scalars['String']>;
  surnames?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CoreProjectListQueryVariables = {
  str?: Maybe<Scalars['String']>;
  str2?: Maybe<Scalars['String']>;
};


export type CoreProjectListQuery = (
  { __typename?: 'QueryType' }
  & { CoreProject?: Maybe<Array<Maybe<(
    { __typename?: 'CoreProject' }
    & Pick<CoreProject, 'id' | 'coreProjectNumber'>
    & { grants: Array<Maybe<(
      { __typename?: 'NIHGrant' }
      & Pick<NihGrant, 'id' | 'projectTitle' | 'fiscalYear'>
    )>>, clinical_trials: Array<Maybe<(
      { __typename?: 'ClinicalTrial' }
      & Pick<ClinicalTrial, 'id' | 'nct_id' | 'brief_title'>
    )>>, publications?: Maybe<Array<Maybe<(
      { __typename?: 'LiteratureReference' }
      & Pick<LiteratureReference, 'id' | 'title' | 'shortReference'>
    )>>> }
  )>>> }
);

export type GrantQueryVariables = {
  id?: Maybe<Scalars['ID']>;
};


export type GrantQuery = (
  { __typename?: 'QueryType' }
  & { NIHGrant?: Maybe<Array<Maybe<(
    { __typename?: 'NIHGrant' }
    & Pick<NihGrant, 'id' | 'activity' | 'IC' | 'applicationID' | 'projectNumber' | 'serialNumber' | 'CFDACode' | 'FOA' | 'projectTitle' | 'awardNoticeDate' | 'fiscalYear' | 'supportYear' | 'budgetStartDate' | 'budgetEndDate' | 'projectEndDate' | 'projectStartDate' | 'department' | 'totalCost' | 'type' | 'totalCost_IC' | 'totalCost_SubProjects' | 'directCost_IC' | 'inDirectCost_IC' | 'fundingMechanism' | 'nihSpendingCategorization' | 'otherPIorProjectLeaders' | 'programOfficialInformation' | 'publicHealthRelevance' | 'studySection' | 'abstract'>
    & { organization: (
      { __typename?: 'FundedOrganization' }
      & Pick<FundedOrganization, 'id' | 'organizationID' | 'name' | 'city' | 'state' | 'country' | 'type'>
    ), contactPIorProjectLeader: (
      { __typename?: 'PrincipalInvestigator' }
      & Pick<PrincipalInvestigator, 'id' | 'firstName' | 'middleName' | 'surname' | 'personID'>
    ), fundingIC: (
      { __typename?: 'NIHInstituteOrCenter' }
      & Pick<NihInstituteOrCenter, 'id' | 'name'>
    ), administeringIC: (
      { __typename?: 'NIHInstituteOrCenter' }
      & Pick<NihInstituteOrCenter, 'id' | 'name'>
    ) }
  )>>> }
);

export type PublicationQueryVariables = {
  id?: Maybe<Scalars['ID']>;
};


export type PublicationQuery = (
  { __typename?: 'QueryType' }
  & { LiteratureReference?: Maybe<Array<Maybe<(
    { __typename?: 'LiteratureReference' }
    & Pick<LiteratureReference, 'id' | 'PMID' | 'DOI' | 'title' | 'shortReference' | 'publicationYear' | 'firstPage' | 'lastPage' | 'volume' | 'abstract'>
    & { authors: Array<(
      { __typename?: 'Author' }
      & Pick<Author, 'id' | 'firstInitial' | 'surname'>
    )>, journal: (
      { __typename?: 'Journal' }
      & Pick<Journal, 'id' | 'name'>
    ) }
  )>>> }
);

export type TrialQueryVariables = {
  id?: Maybe<Scalars['ID']>;
};


export type TrialQuery = (
  { __typename?: 'QueryType' }
  & { ClinicalTrial?: Maybe<Array<Maybe<(
    { __typename?: 'ClinicalTrial' }
    & Pick<ClinicalTrial, 'id' | 'nct_id' | 'brief_title' | 'brief_summary' | 'conditions' | 'detailed_description' | 'drugs' | 'official_title' | 'phases' | 'status' | 'status_date' | 'study_type'>
  )>>> }
);

export type PublicationListQueryVariables = {
  str?: Maybe<Scalars['String']>;
};


export type PublicationListQuery = (
  { __typename?: 'QueryType' }
  & { LiteratureReference?: Maybe<Array<Maybe<(
    { __typename?: 'LiteratureReference' }
    & Pick<LiteratureReference, 'id' | 'PMID' | 'DOI' | 'title' | 'shortReference' | 'publicationYear' | 'firstPage' | 'lastPage' | 'volume' | 'abstract'>
    & { authors: Array<(
      { __typename?: 'Author' }
      & Pick<Author, 'id' | 'firstInitial' | 'surname'>
    )>, journal: (
      { __typename?: 'Journal' }
      & Pick<Journal, 'id' | 'name'>
    ), coreProjects: Array<Maybe<(
      { __typename?: 'CoreProject' }
      & Pick<CoreProject, 'id' | 'coreProjectNumber'>
    )>> }
  )>>> }
);

export type PublicationsByAuthorQueryVariables = {
  str?: Maybe<Scalars['String']>;
};


export type PublicationsByAuthorQuery = (
  { __typename?: 'QueryType' }
  & { Author?: Maybe<Array<Maybe<(
    { __typename?: 'Author' }
    & Pick<Author, 'id' | 'firstInitial' | 'surname'>
    & { references: Array<(
      { __typename?: 'LiteratureReference' }
      & Pick<LiteratureReference, 'id' | 'PMID' | 'DOI' | 'title' | 'shortReference' | 'publicationYear' | 'firstPage' | 'lastPage' | 'volume' | 'abstract'>
      & { authors: Array<(
        { __typename?: 'Author' }
        & Pick<Author, 'id' | 'firstInitial' | 'surname'>
      )>, journal: (
        { __typename?: 'Journal' }
        & Pick<Journal, 'id' | 'name'>
      ), coreProjects: Array<Maybe<(
        { __typename?: 'CoreProject' }
        & Pick<CoreProject, 'id' | 'coreProjectNumber'>
      )>> }
    )> }
  )>>> }
);

export type PublicationsByJournalQueryVariables = {
  str?: Maybe<Scalars['String']>;
};


export type PublicationsByJournalQuery = (
  { __typename?: 'QueryType' }
  & { Journal?: Maybe<Array<Maybe<(
    { __typename?: 'Journal' }
    & Pick<Journal, 'id' | 'name'>
    & { references: Array<(
      { __typename?: 'LiteratureReference' }
      & Pick<LiteratureReference, 'id' | 'PMID' | 'DOI' | 'title' | 'shortReference' | 'publicationYear' | 'firstPage' | 'lastPage' | 'volume' | 'abstract'>
      & { authors: Array<(
        { __typename?: 'Author' }
        & Pick<Author, 'id' | 'firstInitial' | 'surname'>
      )>, journal: (
        { __typename?: 'Journal' }
        & Pick<Journal, 'id' | 'name'>
      ), coreProjects: Array<Maybe<(
        { __typename?: 'CoreProject' }
        & Pick<CoreProject, 'id' | 'coreProjectNumber'>
      )>> }
    )> }
  )>>> }
);

export type TrialListQueryVariables = {
  str?: Maybe<Scalars['String']>;
  str2?: Maybe<Scalars['String']>;
};


export type TrialListQuery = (
  { __typename?: 'QueryType' }
  & { ClinicalTrial?: Maybe<Array<Maybe<(
    { __typename?: 'ClinicalTrial' }
    & Pick<ClinicalTrial, 'id' | 'nct_id' | 'brief_title' | 'brief_summary' | 'conditions' | 'detailed_description' | 'drugs' | 'official_title' | 'phases' | 'status' | 'status_date' | 'study_type'>
    & { coreProject: (
      { __typename?: 'CoreProject' }
      & Pick<CoreProject, 'id' | 'coreProjectNumber'>
    ) }
  )>>> }
);


export const CoreProjectListDocument = gql`
    query CoreProjectList($str: String, $str2: String) {
  CoreProject(first: 100, filter: {OR: [{grants: {lower_case_search_string_contains: $str}}, {coreProjectNumber_contains: $str2}]}) {
    id
    coreProjectNumber
    grants {
      id
      projectTitle
      fiscalYear
    }
    clinical_trials {
      id
      nct_id
      brief_title
    }
    publications {
      id
      title
      shortReference
    }
  }
}
    `;
export type CoreProjectListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CoreProjectListQuery, CoreProjectListQueryVariables>, 'query'>;

    export const CoreProjectListComponent = (props: CoreProjectListComponentProps) => (
      <ApolloReactComponents.Query<CoreProjectListQuery, CoreProjectListQueryVariables> query={CoreProjectListDocument} {...props} />
    );
    
export type CoreProjectListProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<CoreProjectListQuery, CoreProjectListQueryVariables>
    } & TChildProps;
export function withCoreProjectList<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CoreProjectListQuery,
  CoreProjectListQueryVariables,
  CoreProjectListProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, CoreProjectListQuery, CoreProjectListQueryVariables, CoreProjectListProps<TChildProps, TDataName>>(CoreProjectListDocument, {
      alias: 'coreProjectList',
      ...operationOptions
    });
};

/**
 * __useCoreProjectListQuery__
 *
 * To run a query within a React component, call `useCoreProjectListQuery` and pass it any options that fit your needs.
 * When your component renders, `useCoreProjectListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCoreProjectListQuery({
 *   variables: {
 *      str: // value for 'str'
 *      str2: // value for 'str2'
 *   },
 * });
 */
export function useCoreProjectListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CoreProjectListQuery, CoreProjectListQueryVariables>) {
        return ApolloReactHooks.useQuery<CoreProjectListQuery, CoreProjectListQueryVariables>(CoreProjectListDocument, baseOptions);
      }
export function useCoreProjectListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CoreProjectListQuery, CoreProjectListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CoreProjectListQuery, CoreProjectListQueryVariables>(CoreProjectListDocument, baseOptions);
        }
export type CoreProjectListQueryHookResult = ReturnType<typeof useCoreProjectListQuery>;
export type CoreProjectListLazyQueryHookResult = ReturnType<typeof useCoreProjectListLazyQuery>;
export type CoreProjectListQueryResult = ApolloReactCommon.QueryResult<CoreProjectListQuery, CoreProjectListQueryVariables>;
export const GrantDocument = gql`
    query grant($id: ID) {
  NIHGrant(id: $id) {
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
    `;
export type GrantComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GrantQuery, GrantQueryVariables>, 'query'>;

    export const GrantComponent = (props: GrantComponentProps) => (
      <ApolloReactComponents.Query<GrantQuery, GrantQueryVariables> query={GrantDocument} {...props} />
    );
    
export type GrantProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GrantQuery, GrantQueryVariables>
    } & TChildProps;
export function withGrant<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GrantQuery,
  GrantQueryVariables,
  GrantProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GrantQuery, GrantQueryVariables, GrantProps<TChildProps, TDataName>>(GrantDocument, {
      alias: 'grant',
      ...operationOptions
    });
};

/**
 * __useGrantQuery__
 *
 * To run a query within a React component, call `useGrantQuery` and pass it any options that fit your needs.
 * When your component renders, `useGrantQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGrantQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGrantQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GrantQuery, GrantQueryVariables>) {
        return ApolloReactHooks.useQuery<GrantQuery, GrantQueryVariables>(GrantDocument, baseOptions);
      }
export function useGrantLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GrantQuery, GrantQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GrantQuery, GrantQueryVariables>(GrantDocument, baseOptions);
        }
export type GrantQueryHookResult = ReturnType<typeof useGrantQuery>;
export type GrantLazyQueryHookResult = ReturnType<typeof useGrantLazyQuery>;
export type GrantQueryResult = ApolloReactCommon.QueryResult<GrantQuery, GrantQueryVariables>;
export const PublicationDocument = gql`
    query publication($id: ID) {
  LiteratureReference(id: $id) {
    id
    PMID
    DOI
    title
    shortReference
    authors {
      id
      firstInitial
      surname
    }
    journal {
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
    `;
export type PublicationComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PublicationQuery, PublicationQueryVariables>, 'query'>;

    export const PublicationComponent = (props: PublicationComponentProps) => (
      <ApolloReactComponents.Query<PublicationQuery, PublicationQueryVariables> query={PublicationDocument} {...props} />
    );
    
export type PublicationProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<PublicationQuery, PublicationQueryVariables>
    } & TChildProps;
export function withPublication<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  PublicationQuery,
  PublicationQueryVariables,
  PublicationProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, PublicationQuery, PublicationQueryVariables, PublicationProps<TChildProps, TDataName>>(PublicationDocument, {
      alias: 'publication',
      ...operationOptions
    });
};

/**
 * __usePublicationQuery__
 *
 * To run a query within a React component, call `usePublicationQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePublicationQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PublicationQuery, PublicationQueryVariables>) {
        return ApolloReactHooks.useQuery<PublicationQuery, PublicationQueryVariables>(PublicationDocument, baseOptions);
      }
export function usePublicationLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PublicationQuery, PublicationQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PublicationQuery, PublicationQueryVariables>(PublicationDocument, baseOptions);
        }
export type PublicationQueryHookResult = ReturnType<typeof usePublicationQuery>;
export type PublicationLazyQueryHookResult = ReturnType<typeof usePublicationLazyQuery>;
export type PublicationQueryResult = ApolloReactCommon.QueryResult<PublicationQuery, PublicationQueryVariables>;
export const TrialDocument = gql`
    query trial($id: ID) {
  ClinicalTrial(id: $id) {
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
    `;
export type TrialComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TrialQuery, TrialQueryVariables>, 'query'>;

    export const TrialComponent = (props: TrialComponentProps) => (
      <ApolloReactComponents.Query<TrialQuery, TrialQueryVariables> query={TrialDocument} {...props} />
    );
    
export type TrialProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<TrialQuery, TrialQueryVariables>
    } & TChildProps;
export function withTrial<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TrialQuery,
  TrialQueryVariables,
  TrialProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, TrialQuery, TrialQueryVariables, TrialProps<TChildProps, TDataName>>(TrialDocument, {
      alias: 'trial',
      ...operationOptions
    });
};

/**
 * __useTrialQuery__
 *
 * To run a query within a React component, call `useTrialQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrialQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrialQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTrialQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TrialQuery, TrialQueryVariables>) {
        return ApolloReactHooks.useQuery<TrialQuery, TrialQueryVariables>(TrialDocument, baseOptions);
      }
export function useTrialLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TrialQuery, TrialQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TrialQuery, TrialQueryVariables>(TrialDocument, baseOptions);
        }
export type TrialQueryHookResult = ReturnType<typeof useTrialQuery>;
export type TrialLazyQueryHookResult = ReturnType<typeof useTrialLazyQuery>;
export type TrialQueryResult = ApolloReactCommon.QueryResult<TrialQuery, TrialQueryVariables>;
export const PublicationListDocument = gql`
    query PublicationList($str: String) {
  LiteratureReference(first: 100, filter: {title_contains: $str}) {
    id
    PMID
    DOI
    title
    shortReference
    authors {
      id
      firstInitial
      surname
    }
    journal {
      id
      name
    }
    publicationYear
    firstPage
    lastPage
    volume
    abstract
    coreProjects {
      id
      coreProjectNumber
    }
  }
}
    `;
export type PublicationListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PublicationListQuery, PublicationListQueryVariables>, 'query'>;

    export const PublicationListComponent = (props: PublicationListComponentProps) => (
      <ApolloReactComponents.Query<PublicationListQuery, PublicationListQueryVariables> query={PublicationListDocument} {...props} />
    );
    
export type PublicationListProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<PublicationListQuery, PublicationListQueryVariables>
    } & TChildProps;
export function withPublicationList<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  PublicationListQuery,
  PublicationListQueryVariables,
  PublicationListProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, PublicationListQuery, PublicationListQueryVariables, PublicationListProps<TChildProps, TDataName>>(PublicationListDocument, {
      alias: 'publicationList',
      ...operationOptions
    });
};

/**
 * __usePublicationListQuery__
 *
 * To run a query within a React component, call `usePublicationListQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicationListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicationListQuery({
 *   variables: {
 *      str: // value for 'str'
 *   },
 * });
 */
export function usePublicationListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PublicationListQuery, PublicationListQueryVariables>) {
        return ApolloReactHooks.useQuery<PublicationListQuery, PublicationListQueryVariables>(PublicationListDocument, baseOptions);
      }
export function usePublicationListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PublicationListQuery, PublicationListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PublicationListQuery, PublicationListQueryVariables>(PublicationListDocument, baseOptions);
        }
export type PublicationListQueryHookResult = ReturnType<typeof usePublicationListQuery>;
export type PublicationListLazyQueryHookResult = ReturnType<typeof usePublicationListLazyQuery>;
export type PublicationListQueryResult = ApolloReactCommon.QueryResult<PublicationListQuery, PublicationListQueryVariables>;
export const PublicationsByAuthorDocument = gql`
    query PublicationsByAuthor($str: String) {
  Author(first: 100, filter: {lower_case_search_string_contains: $str}) {
    id
    firstInitial
    surname
    references {
      id
      PMID
      DOI
      title
      shortReference
      authors {
        id
        firstInitial
        surname
      }
      journal {
        id
        name
      }
      publicationYear
      firstPage
      lastPage
      volume
      abstract
      coreProjects {
        id
        coreProjectNumber
      }
    }
  }
}
    `;
export type PublicationsByAuthorComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PublicationsByAuthorQuery, PublicationsByAuthorQueryVariables>, 'query'>;

    export const PublicationsByAuthorComponent = (props: PublicationsByAuthorComponentProps) => (
      <ApolloReactComponents.Query<PublicationsByAuthorQuery, PublicationsByAuthorQueryVariables> query={PublicationsByAuthorDocument} {...props} />
    );
    
export type PublicationsByAuthorProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<PublicationsByAuthorQuery, PublicationsByAuthorQueryVariables>
    } & TChildProps;
export function withPublicationsByAuthor<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  PublicationsByAuthorQuery,
  PublicationsByAuthorQueryVariables,
  PublicationsByAuthorProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, PublicationsByAuthorQuery, PublicationsByAuthorQueryVariables, PublicationsByAuthorProps<TChildProps, TDataName>>(PublicationsByAuthorDocument, {
      alias: 'publicationsByAuthor',
      ...operationOptions
    });
};

/**
 * __usePublicationsByAuthorQuery__
 *
 * To run a query within a React component, call `usePublicationsByAuthorQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicationsByAuthorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicationsByAuthorQuery({
 *   variables: {
 *      str: // value for 'str'
 *   },
 * });
 */
export function usePublicationsByAuthorQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PublicationsByAuthorQuery, PublicationsByAuthorQueryVariables>) {
        return ApolloReactHooks.useQuery<PublicationsByAuthorQuery, PublicationsByAuthorQueryVariables>(PublicationsByAuthorDocument, baseOptions);
      }
export function usePublicationsByAuthorLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PublicationsByAuthorQuery, PublicationsByAuthorQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PublicationsByAuthorQuery, PublicationsByAuthorQueryVariables>(PublicationsByAuthorDocument, baseOptions);
        }
export type PublicationsByAuthorQueryHookResult = ReturnType<typeof usePublicationsByAuthorQuery>;
export type PublicationsByAuthorLazyQueryHookResult = ReturnType<typeof usePublicationsByAuthorLazyQuery>;
export type PublicationsByAuthorQueryResult = ApolloReactCommon.QueryResult<PublicationsByAuthorQuery, PublicationsByAuthorQueryVariables>;
export const PublicationsByJournalDocument = gql`
    query PublicationsByJournal($str: String) {
  Journal(first: 100, filter: {lower_case_search_string_contains: $str}) {
    id
    name
    references {
      id
      PMID
      DOI
      title
      shortReference
      authors {
        id
        firstInitial
        surname
      }
      journal {
        id
        name
      }
      publicationYear
      firstPage
      lastPage
      volume
      abstract
      coreProjects {
        id
        coreProjectNumber
      }
    }
  }
}
    `;
export type PublicationsByJournalComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PublicationsByJournalQuery, PublicationsByJournalQueryVariables>, 'query'>;

    export const PublicationsByJournalComponent = (props: PublicationsByJournalComponentProps) => (
      <ApolloReactComponents.Query<PublicationsByJournalQuery, PublicationsByJournalQueryVariables> query={PublicationsByJournalDocument} {...props} />
    );
    
export type PublicationsByJournalProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<PublicationsByJournalQuery, PublicationsByJournalQueryVariables>
    } & TChildProps;
export function withPublicationsByJournal<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  PublicationsByJournalQuery,
  PublicationsByJournalQueryVariables,
  PublicationsByJournalProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, PublicationsByJournalQuery, PublicationsByJournalQueryVariables, PublicationsByJournalProps<TChildProps, TDataName>>(PublicationsByJournalDocument, {
      alias: 'publicationsByJournal',
      ...operationOptions
    });
};

/**
 * __usePublicationsByJournalQuery__
 *
 * To run a query within a React component, call `usePublicationsByJournalQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicationsByJournalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicationsByJournalQuery({
 *   variables: {
 *      str: // value for 'str'
 *   },
 * });
 */
export function usePublicationsByJournalQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PublicationsByJournalQuery, PublicationsByJournalQueryVariables>) {
        return ApolloReactHooks.useQuery<PublicationsByJournalQuery, PublicationsByJournalQueryVariables>(PublicationsByJournalDocument, baseOptions);
      }
export function usePublicationsByJournalLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PublicationsByJournalQuery, PublicationsByJournalQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PublicationsByJournalQuery, PublicationsByJournalQueryVariables>(PublicationsByJournalDocument, baseOptions);
        }
export type PublicationsByJournalQueryHookResult = ReturnType<typeof usePublicationsByJournalQuery>;
export type PublicationsByJournalLazyQueryHookResult = ReturnType<typeof usePublicationsByJournalLazyQuery>;
export type PublicationsByJournalQueryResult = ApolloReactCommon.QueryResult<PublicationsByJournalQuery, PublicationsByJournalQueryVariables>;
export const TrialListDocument = gql`
    query trialList($str: String, $str2: String) {
  ClinicalTrial(first: 100, filter: {OR: [{lower_case_search_string_contains: $str}, {nct_id: $str2}]}) {
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
    coreProject {
      id
      coreProjectNumber
    }
  }
}
    `;
export type TrialListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TrialListQuery, TrialListQueryVariables>, 'query'>;

    export const TrialListComponent = (props: TrialListComponentProps) => (
      <ApolloReactComponents.Query<TrialListQuery, TrialListQueryVariables> query={TrialListDocument} {...props} />
    );
    
export type TrialListProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<TrialListQuery, TrialListQueryVariables>
    } & TChildProps;
export function withTrialList<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TrialListQuery,
  TrialListQueryVariables,
  TrialListProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, TrialListQuery, TrialListQueryVariables, TrialListProps<TChildProps, TDataName>>(TrialListDocument, {
      alias: 'trialList',
      ...operationOptions
    });
};

/**
 * __useTrialListQuery__
 *
 * To run a query within a React component, call `useTrialListQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrialListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrialListQuery({
 *   variables: {
 *      str: // value for 'str'
 *      str2: // value for 'str2'
 *   },
 * });
 */
export function useTrialListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TrialListQuery, TrialListQueryVariables>) {
        return ApolloReactHooks.useQuery<TrialListQuery, TrialListQueryVariables>(TrialListDocument, baseOptions);
      }
export function useTrialListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TrialListQuery, TrialListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TrialListQuery, TrialListQueryVariables>(TrialListDocument, baseOptions);
        }
export type TrialListQueryHookResult = ReturnType<typeof useTrialListQuery>;
export type TrialListLazyQueryHookResult = ReturnType<typeof useTrialListLazyQuery>;
export type TrialListQueryResult = ApolloReactCommon.QueryResult<TrialListQuery, TrialListQueryVariables>;
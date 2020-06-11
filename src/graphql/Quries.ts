import {gql} from 'apollo-boost';

export const Get_All_Jobs = gql`
  query {
    jobs {
      id
      title
      postedAt
      slug
      company {
        slug
      }
    }
  }
`;

export const Get_JOB_DETAILS = gql`
  query getJob($jobArgs: JobInput!) {
    job(input: $jobArgs) {
      id
      title
      company {
        name
      }
      description
    }
  }
`;

export const POST_JOB = gql`
  mutation postJobs($postJobArgs: PostJobInput!) {
    postJob(input: $postJobArgs) {
      id
      slug
      company {
        slug
      }
    }
  }
`;

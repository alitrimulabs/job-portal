import gql from "graphql-tag";

export const Jobs = gql`
query AllJobs{
    jobs{
        id,
        title,
        postedAt,
      }
}
`
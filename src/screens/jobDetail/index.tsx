import React from 'react';
import {Text, View, ActivityIndicator, ScrollView} from 'react-native';
import {RouteProp} from '@react-navigation/native';

import styles from './styles';
import {Get_JOB_DETAILS} from '../../graphql/Quries';
import {useQuery} from '@apollo/react-hooks';

type ParamList = {
  JobDetail: {
    job: string;
    companySlug: string;
  };
};

type JobDetailRouteProps = RouteProp<ParamList, 'JobDetail'>;

interface JobDetailProps {
  route: JobDetailRouteProps;
}

const JobDetail = (props: JobDetailProps) => {
  const {job, companySlug} = props.route.params;
  const {loading, data} = useQuery(Get_JOB_DETAILS, {
    variables: {
      jobArgs: {
        companySlug: companySlug,
        jobSlug: job,
      },
    },
  });

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.spinner}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <ScrollView>
          <View style={styles.contentContainer}>
            <Text style={styles.lable}>Title:</Text>
            <Text style={styles.text}>{data.job.title}</Text>
            <Text style={styles.lable}>Company</Text>
            <Text style={styles.text}>{data.job.company.name}</Text>
            <Text style={styles.lable}>Description:</Text>
            <Text style={styles.text}>{data.job.description}</Text>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default JobDetail;

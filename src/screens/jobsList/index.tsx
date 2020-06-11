import React from 'react';
import {View, ActivityIndicator, FlatList, Button} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import moment from 'moment';

import styles from './styles';
import {Get_All_Jobs} from '../../graphql/Quries';
import JobCard from '../../components/job-card';
import {useNavigation} from '@react-navigation/native';

function JobsList() {
  const navigation = useNavigation();
  const {loading, data} = useQuery(Get_All_Jobs);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Post" onPress={() => navigation.navigate('PostJob')} />
      ),
    });
  }, [navigation]);

  const renderItem = (item: any) => {
    const {title, postedAt, company, slug} = item;
    return (
      <JobCard
        title={title}
        date={moment(postedAt).format('L')}
        job={slug}
        companySlug={company.slug}
        onSelect={openDetail}
      />
    );
  };

  const openDetail = (job: string, companySlug: string) => {
    navigation.navigate('JobDetail', {job, companySlug});
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.spinner}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <View style={styles.contentContainer}>
          <FlatList
            data={data.jobs}
            renderItem={({item}) => renderItem(item)}
            keyExtractor={item => `${item.id}`}
          />
        </View>
      )}
    </View>
  );
}

export default JobsList;

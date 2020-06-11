import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from 'react-native';

import {client} from '../../graphql/Client';
import {Jobs} from '../../graphql/Quries';
import JobCard from '../../components/job-card';

function Home() {
const [loading, setLoading] = useState(true);
const [jobs, setJobs] = useState([]);
useEffect(() => {
    requestJobs();
}, []);

const requestJobs = () => {
    client
    .query({
        query: Jobs,
    })
    .then(resp => {
        console.log(resp);
        setLoading(false);
        setJobs(resp.data.jobs);
    })
    .catch(err => {
        console.log(err);
    });
};

return (
    <View style={styles.container}>
    <View style={styles.header}>
        <Text style={styles.headerText}>Jobs Portal</Text>
    </View>
    {loading ? (
        // eslint-disable-next-line react-native/no-inline-styles
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
        </View>
    ) : (
        <View style={styles.contentContainer}>
        <FlatList
            data={jobs}
            renderItem={({item}) => <JobCard {...item} />}
            keyExtractor={item => `${item.id}`}
        />
        </View>
    )}
    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
},
header: {
    marginTop: 50,
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
},
headerText: {
    marginBottom: 5,
    fontSize: 30,
    fontWeight: 'bold',
},
contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
},
});
  
  export default Home;
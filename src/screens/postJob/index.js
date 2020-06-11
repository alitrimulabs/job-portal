import React, {useState, useEffect} from 'react';
import {
  View,
  ActivityIndicator,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';

import styles from './styles';
import {POST_JOB} from '../../graphql/Quries';
import {useMutation} from '@apollo/react-hooks';
import {useNavigation} from '@react-navigation/native';

const PostJob = () => {
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const navigation = useNavigation();

  const [postJobQuery, {loading, data, error}] = useMutation(POST_JOB);

  console.log(error);
  console.log(loading);

  useEffect(() => {
    if (data && !loading) {
      navigation.navigate('JobsList');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.spinner}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <ScrollView>
          <View style={styles.contentContainer}>
            <TextInput
              style={styles.input}
              onChangeText={titleText => setTitle(titleText)}
              placeholder={'Title'}
            />
            <TextInput
              style={styles.input}
              onChangeText={companyText => setEmail(companyText)}
              placeholder={'Email'}
            />
            <TextInput
              style={styles.input}
              onChangeText={locationText => setLocation(locationText)}
              placeholder={'Location'}
            />
            <TextInput
              style={styles.input}
              onChangeText={descriptionText => setDescription(descriptionText)}
              placeholder={'Description'}
            />
            <Button
              title={'Post Job'}
              style={styles.submitButton}
              onPress={() => {
                postJobQuery({
                  variables: {
                    postJobArgs: {
                      title: title,
                      commitmentId: 'cjtu8esth000z0824x00wtp1i',
                      companyName: 'Verbling',
                      locationNames: location,
                      userEmail: email,
                      description: description,
                      applyUrl: 'www.google.com',
                    },
                  },
                });
                console.log('press');
              }}
            />
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default PostJob;

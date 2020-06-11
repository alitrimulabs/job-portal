import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

interface JobCardProps {
  title: string;
  date: string;
  job: string;
  companySlug: string;
  onSelect: Function;
}

const JobCard = ({title, date, job, companySlug, onSelect}: JobCardProps) => (
  <View style={styles.content}>
    <TouchableOpacity onPress={() => onSelect(job, companySlug)}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.source}>posted at: {date}</Text>
    </TouchableOpacity>
  </View>
);

export default JobCard;

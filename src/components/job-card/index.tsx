import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { graphql } from 'graphql';

interface JobCardProps{
    title: string;
    postedAt: string;
}

const JobCard = ({ title, postedAt }: JobCardProps) => (
  <View style={styles.content}>
    <TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.source}>posted at: {postedAt}</Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  content: {
    margin: 10,
    flex: 1
  },
  source: {
    color: '#3d3c41',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 3
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  }
})

export default JobCard;

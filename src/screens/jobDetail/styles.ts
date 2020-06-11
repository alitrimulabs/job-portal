import {StyleSheet} from 'react-native';

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
  spinner: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  headerText: {
    marginBottom: 5,
    fontSize: 30,
    fontWeight: 'bold',
  },
  contentContainer: {
    padding: 20,
  },
  lable: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'red',
    padding: 10,
  },
  text: {
    fontSize: 20,
    padding: 10,
  },
});

export default styles;

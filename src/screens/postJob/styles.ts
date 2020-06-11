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
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  input: {
    margin: 20,
    padding: 20,
    borderWidth: 2,
  },
  submitButton: {
    padding: 30,
  },
});

export default styles;

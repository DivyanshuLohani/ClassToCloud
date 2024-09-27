import Spinner from '@components/ui/Spinner';
import {RootStackParamList} from '@constants/types';
import useFetch from '@hooks/useFetch';
import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import Pdf from 'react-native-pdf';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Notes'>;

const NotesScreen = ({route}: Props) => {
  const {data: note, loading} = useFetch(
    `/documents/notes/${route.params.uid}`,
  );

  if (loading || !note) {
    return <Spinner />;
  }

  return (
    <View style={styles.container}>
      <Pdf
        trustAllCerts={false}
        source={{uri: note.file, cache: true}}
        style={styles.pdf}
      />
    </View>
  );
};

export default NotesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

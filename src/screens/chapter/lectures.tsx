import {ScrollView} from 'react-native';
import React from 'react';
import useFetch from '@hooks/useFetch';
import Spinner from '@components/ui/Spinner';
import Lecture from '@components/Chapter/Lecture';
import {ILecture} from '@constants/api';
import NoContent from '@components/ui/NoContent';

const LecturesTab = ({uid, navigation}: {uid: string; navigation: any}) => {
  const {
    data: lectures,
    loading,
    error,
  } = useFetch(`batches/chapters/${uid}/lectures/`);
  if (loading) {
    return <Spinner />;
  }

  if (!error && lectures?.results?.length === 0 && !loading) {
    return <NoContent />;
  }

  return (
    <ScrollView className="p-5 flex space-y-2 flex-col h-full">
      {lectures?.results?.map((l: ILecture) => (
        <Lecture lecture={l} key={l.uid} navigation={navigation} />
      ))}
    </ScrollView>
  );
};

export default LecturesTab;

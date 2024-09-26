import {ScrollView} from 'react-native';
import React from 'react';
import useFetch from '@hooks/useFetch';
import Spinner from '@components/ui/Spinner';
import NoContent from '@components/ui/NoContent';
import Note from '@components/Chapter/Note';
import {INotes} from '@constants/api';

const NotesTab = ({uid}: {uid: string}) => {
  const {
    data: notes,
    loading,
    error,
  } = useFetch(`batches/chapters/${uid}/notes/`);
  if (loading) {
    return <Spinner />;
  }

  if (!error && notes?.results?.length === 0 && !loading) {
    return <NoContent />;
  }

  return (
    <ScrollView className="p-5 flex flex-col h-full">
      {notes?.results?.map((l: INotes) => (
        <Note note={l} key={l.uid} />
      ))}
    </ScrollView>
  );
};

export default NotesTab;

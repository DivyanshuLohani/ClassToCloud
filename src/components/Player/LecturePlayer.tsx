import {useOrientation} from '@hooks/useOrientation';
import React, {useEffect, useRef, useState} from 'react';
import Video, {VideoRef} from 'react-native-video';
import Orientation from 'react-native-orientation-locker';

interface LecturePlayerProps {
  uri: string;
}

export default function LecturePlayer({uri}: LecturePlayerProps) {
  const orientation = useOrientation();
  const playerRef = useRef<VideoRef>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    if (!playerRef || !playerRef.current) {
      return;
    }
    if (orientation === 'PORTRAIT') {
      playerRef.current.setFullScreen(false);
    } else {
      playerRef.current.setFullScreen(true);
    }
  }, [orientation]);

  // Handle Fullscreen Changes
  const onFullscreenPlayerWillPresent = () => {
    setIsFullScreen(true);
    Orientation.lockToLandscape(); // Lock to landscape when fullscreen is enabled
  };

  const onFullscreenPlayerWillDismiss = () => {
    setIsFullScreen(false);
    Orientation.lockToPortrait(); // Lock back to portrait when fullscreen is dismissed
  };

  return (
    <Video
      ref={playerRef}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{width: '100%', height: isFullScreen ? '100%' : 200}}
      source={{uri}}
      controls
      resizeMode="contain"
      onFullscreenPlayerWillPresent={onFullscreenPlayerWillPresent} // Entering fullscreen
      onFullscreenPlayerWillDismiss={onFullscreenPlayerWillDismiss} // Exiting fullscreen
    />
  );
}

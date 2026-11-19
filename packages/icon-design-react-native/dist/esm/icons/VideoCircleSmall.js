import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const VideoCircleSmall = forwardRef(function VideoCircleSmall(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, ...props },
  ref
) {
  return createElement(
    Svg,
    {
      ref,
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props
    },
    createElement(Path, {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"0"}),
    createElement(Path, {"d":"M12 15L8 15C7.449 15 7 14.551 7 14L7 10C7 9.449 7.449 9 8 9L12 9C12.551 9 13 9.449 13 10L13 14C13 14.551 12.551 15 12 15Z","key":"1"}),
    createElement(Path, {"d":"M13 11L16 9L17 9L17 15L16 15L13 13","key":"2"})
  );
});

VideoCircleSmall.displayName = 'VideoCircleSmall';

export default VideoCircleSmall;
export { VideoCircleSmall };

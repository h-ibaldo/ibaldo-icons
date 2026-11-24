import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const VideoOff = forwardRef(function VideoOff(
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
    createElement(Path, {"d":"M16 11L20.445 8.035C21.109 7.594 22 8.07 22 8.867L22 16.133C22 16.93 21.109 17.406 20.445 16.965L16 14","key":"0"}),
    createElement(Path, {"d":"M5 2L17 22","key":"1"}),
    createElement(Path, {"d":"M4 7C2.895 7 2 7.895 2 9L2 16C2 17.105 2.895 18 4 18L10.602 18","key":"2"}),
    createElement(Path, {"d":"M14.547 17.914C15.383 17.676 16 16.914 16 16L16 9C16 7.895 15.105 7 14 7L8 7","key":"3"})
  );
});

VideoOff.displayName = 'VideoOff';

export default VideoOff;
export { VideoOff };

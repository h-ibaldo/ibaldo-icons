import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const MicrophonePlayCircleBare = forwardRef(function MicrophonePlayCircleBare(
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
    createElement(Path, {"d":"M9 19L9 22","key":"0"}),
    createElement(Path, {"d":"M16 12.5L16 15.5L18.5 14Z","key":"1"}),
    createElement(Path, {"d":"M22 14C22 11.238 19.762 9 17 9C14.238 9 12 11.238 12 14C12 16.762 14.238 19 17 19C19.762 19 22 16.762 22 14Z","key":"2"}),
    createElement(Path, {"d":"M13 7L13 6C13 3.789 11.211 2 9 2C6.789 2 5 3.789 5 6L5 11C5 13.211 6.789 15 9 15","key":"3"}),
    createElement(Path, {"d":"M2 15C3.383 17.387 5.949 19 8.906 19C9.277 19 9.645 18.977 10 18.926","key":"4"})
  );
});

MicrophonePlayCircleBare.displayName = 'MicrophonePlayCircleBare';

export default MicrophonePlayCircleBare;
export { MicrophonePlayCircleBare };

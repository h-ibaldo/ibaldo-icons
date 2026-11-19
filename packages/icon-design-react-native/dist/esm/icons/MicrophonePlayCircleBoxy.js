import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const MicrophonePlayCircleBoxy = forwardRef(function MicrophonePlayCircleBoxy(
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
    createElement(Path, {"d":"M6 22L14 22","key":"0"}),
    createElement(Path, {"d":"M10 22L10 18","key":"1"}),
    createElement(Path, {"d":"M16 11.5L16 14.5L18.5 13Z","key":"2"}),
    createElement(Path, {"d":"M22 13C22 10.238 19.762 8 17 8C14.238 8 12 10.238 12 13C12 15.762 14.238 18 17 18C19.762 18 22 15.762 22 13Z","key":"3"}),
    createElement(Path, {"d":"M14 5L14 4C14 2.895 13.105 2 12 2L8 2C6.895 2 6 2.895 6 4L6 12C6 13.105 6.895 14 8 14","key":"4"}),
    createElement(Path, {"d":"M2 11L2 12C2 15.313 4.688 18 8 18L10 18","key":"5"})
  );
});

MicrophonePlayCircleBoxy.displayName = 'MicrophonePlayCircleBoxy';

export default MicrophonePlayCircleBoxy;
export { MicrophonePlayCircleBoxy };

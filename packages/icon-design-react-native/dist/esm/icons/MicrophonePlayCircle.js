import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const MicrophonePlayCircle = forwardRef(function MicrophonePlayCircle(
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
    createElement(Path, {"d":"M8 18L8 22","key":"0"}),
    createElement(Path, {"d":"M12 22L4 22","key":"1"}),
    createElement(Path, {"d":"M16 12.5L16 15.5L18.5 14Z","key":"2"}),
    createElement(Path, {"d":"M22 14C22 11.238 19.762 9 17 9C14.238 9 12 11.238 12 14C12 16.762 14.238 19 17 19C19.762 19 22 16.762 22 14Z","key":"3"}),
    createElement(Path, {"d":"M2 15C3.461 16.828 5.703 18 8.227 18C8.84 18 9.43 17.93 10 17.801","key":"4"}),
    createElement(Path, {"d":"M12 7L12 6C12 3.789 10.211 2 8 2C5.789 2 4 3.789 4 6L4 10C4 12.211 5.789 14 8 14","key":"5"})
  );
});

MicrophonePlayCircle.displayName = 'MicrophonePlayCircle';

export default MicrophonePlayCircle;
export { MicrophonePlayCircle };

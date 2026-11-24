import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ScanVideo = forwardRef(function ScanVideo(
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
    createElement(Path, {"d":"M2 7L2 5C2 3.344 3.344 2 5 2L7 2","key":"0"}),
    createElement(Path, {"d":"M22 7L22 5C22 3.344 20.656 2 19 2L17 2","key":"1"}),
    createElement(Path, {"d":"M2 17L2 19C2 20.656 3.344 22 5 22L7 22","key":"2"}),
    createElement(Path, {"d":"M22 17L22 19C22 20.656 20.656 22 19 22L17 22","key":"3"}),
    createElement(Path, {"d":"M12.844 16L7.156 16C6.516 16 6 15.484 6 14.844L6 9.156C6 8.516 6.516 8 7.156 8L12.844 8C13.484 8 14 8.516 14 9.156L14 14.844C14 15.484 13.484 16 12.844 16Z","key":"4"}),
    createElement(Path, {"d":"M14 11L17.199 8.602C17.531 8.352 18 8.59 18 9L18 15C18 15.41 17.531 15.648 17.199 15.398L14 13","key":"5"})
  );
});

ScanVideo.displayName = 'ScanVideo';

export default ScanVideo;
export { ScanVideo };

import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const CameraDetailed = forwardRef(function CameraDetailed(
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
    createElement(Path, {"d":"M4 7L10 7L12 4L16 4L18 7L20 7C21.105 7 22 7.895 22 9L22 19C22 20.105 21.105 21 20 21L4 21C2.895 21 2 20.105 2 19L2 9C2 7.895 2.895 7 4 7Z","key":"0"}),
    createElement(Path, {"d":"M9.5 13.5C9.5 11.016 11.516 9 14 9C16.484 9 18.5 11.016 18.5 13.5C18.5 15.984 16.484 18 14 18C11.516 18 9.5 15.984 9.5 13.5Z","key":"1"}),
    createElement(Path, {"d":"M6 7L6 5L5 5L5 7","key":"2"}),
    createElement(Path, {"d":"M6 11L6 12","key":"3"}),
    createElement(Path, {"d":"M2 17L7 17","key":"4"}),
    createElement(Path, {"d":"M21 17L22 17","key":"5"})
  );
});

CameraDetailed.displayName = 'CameraDetailed';

export default CameraDetailed;
export { CameraDetailed };

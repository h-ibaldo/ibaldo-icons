import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const Video = forwardRef(function Video(
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
    createElement(Path, {"d":"M14 18L4 18C2.895 18 2 17.105 2 16L2 9C2 7.895 2.895 7 4 7L14 7C15.105 7 16 7.895 16 9L16 16C16 17.105 15.105 18 14 18Z","key":"0"}),
    createElement(Path, {"d":"M16 11L20.445 8.035C21.109 7.594 22 8.07 22 8.867L22 16.133C22 16.93 21.109 17.406 20.445 16.965L16 14","key":"1"})
  );
});

Video.displayName = 'Video';

export default Video;
export { Video };

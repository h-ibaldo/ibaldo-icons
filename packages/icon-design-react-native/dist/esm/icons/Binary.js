import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const Binary = forwardRef(function Binary(
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
    createElement(Path, {"d":"M4 3L7 3L7 10","key":"0"}),
    createElement(Path, {"d":"M14 14L17 14L17 21","key":"1"}),
    createElement(Path, {"d":"M4 10L10 10","key":"2"}),
    createElement(Path, {"d":"M14 21L20 21","key":"3"}),
    createElement(Path, {"d":"M15 3L19 3C19.551 3 20 3.449 20 4L20 9C20 9.551 19.551 10 19 10L15 10C14.449 10 14 9.551 14 9L14 4C14 3.449 14.449 3 15 3Z","key":"4"}),
    createElement(Path, {"d":"M9 14L5 14C4.449 14 4 14.449 4 15L4 20C4 20.551 4.449 21 5 21L9 21C9.551 21 10 20.551 10 20L10 15C10 14.449 9.551 14 9 14Z","key":"5"})
  );
});

Binary.displayName = 'Binary';

export default Binary;
export { Binary };

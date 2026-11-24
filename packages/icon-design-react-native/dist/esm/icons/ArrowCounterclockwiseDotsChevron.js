import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowCounterclockwiseDotsChevron = forwardRef(function ArrowCounterclockwiseDotsChevron(
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
    createElement(Path, {"d":"M7 2L4 5L7 8","key":"0"}),
    createElement(Path, {"d":"M12 5C16.418 5 20 8.582 20 13C20 17.418 16.418 21 12 21C7.582 21 4 17.418 4 13","key":"1"}),
    createElement(Path, {"d":"M4 5L12 5","key":"2"}),
    createElement(Path, {"d":"M12 13L12 13","key":"3"}),
    createElement(Path, {"d":"M8 13L8 13","key":"4"}),
    createElement(Path, {"d":"M16 13L16 13","key":"5"})
  );
});

ArrowCounterclockwiseDotsChevron.displayName = 'ArrowCounterclockwiseDotsChevron';

export default ArrowCounterclockwiseDotsChevron;
export { ArrowCounterclockwiseDotsChevron };

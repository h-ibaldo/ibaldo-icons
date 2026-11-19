import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowClockwiseFiveChevron = forwardRef(function ArrowClockwiseFiveChevron(
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
    createElement(Path, {"d":"M18 2L20 4L18 6","key":"0"}),
    createElement(Path, {"d":"M12 4C7.027 4 3 8.027 3 13C3 17.973 7.027 22 12 22C16.973 22 21 17.973 21 13C21 11.945 20.809 10.938 20.477 10","key":"1"}),
    createElement(Path, {"d":"M12 4L20 4","key":"2"}),
    createElement(Path, {"d":"M14 9L10 9L10 12.5L11.75 12.5C12.992 12.5 14 13.508 14 14.75C14 15.992 12.992 17 11.75 17L10 17","key":"3"})
  );
});

ArrowClockwiseFiveChevron.displayName = 'ArrowClockwiseFiveChevron';

export default ArrowClockwiseFiveChevron;
export { ArrowClockwiseFiveChevron };

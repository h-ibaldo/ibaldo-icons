import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowClockwiseFifteenDoubleChevron = forwardRef(function ArrowClockwiseFifteenDoubleChevron(
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
    createElement(Path, {"d":"M13 2L15 4L13 6","key":"1"}),
    createElement(Path, {"d":"M12 4C7.027 4 3 8.027 3 13C3 17.973 7.027 22 12 22C16.973 22 21 17.973 21 13C21 11.945 20.809 10.938 20.477 10","key":"2"}),
    createElement(Path, {"d":"M12 4L15 4","key":"3"}),
    createElement(Path, {"d":"M8 10L9 10L9 17","key":"4"}),
    createElement(Path, {"d":"M16 10L13 10L13 13L14 13C15.105 13 16 13.895 16 15C16 16.105 15.105 17 14 17L13 17","key":"5"})
  );
});

ArrowClockwiseFifteenDoubleChevron.displayName = 'ArrowClockwiseFifteenDoubleChevron';

export default ArrowClockwiseFifteenDoubleChevron;
export { ArrowClockwiseFifteenDoubleChevron };

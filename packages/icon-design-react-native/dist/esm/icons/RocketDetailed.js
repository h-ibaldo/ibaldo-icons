import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const RocketDetailed = forwardRef(function RocketDetailed(
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
    createElement(Path, {"d":"M22 2L16.961 2.629C15.051 2.867 13.293 3.785 12.004 5.215L5 13L11 19L18.785 11.996C20.215 10.707 21.133 8.949 21.371 7.039Z","key":"0"}),
    createElement(Path, {"d":"M6 14L3 17L7 21L10 18","key":"1"}),
    createElement(Path, {"d":"M11 19L13 22L18 18L17 14","key":"2"}),
    createElement(Path, {"d":"M5 13L2 11L6 6L10 7","key":"3"}),
    createElement(Path, {"d":"M3 21L2 22","key":"4"}),
    createElement(Path, {"d":"M12 10C12 8.895 12.895 8 14 8C15.105 8 16 8.895 16 10C16 11.105 15.105 12 14 12C12.895 12 12 11.105 12 10Z","key":"5"}),
    createElement(Path, {"d":"M20.848 9.043L14.555 3.324","key":"6"})
  );
});

RocketDetailed.displayName = 'RocketDetailed';

export default RocketDetailed;
export { RocketDetailed };

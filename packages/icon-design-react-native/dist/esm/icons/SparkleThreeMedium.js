import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const SparkleThreeMedium = forwardRef(function SparkleThreeMedium(
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
    createElement(Path, {"d":"M2 7C4.762 7 7 9.238 7 12","key":"0"}),
    createElement(Path, {"d":"M12 7C9.238 7 7 9.238 7 12","key":"1"}),
    createElement(Path, {"d":"M12 7C9.238 7 7 4.762 7 2","key":"2"}),
    createElement(Path, {"d":"M2 7C4.762 7 7 4.762 7 2","key":"3"}),
    createElement(Path, {"d":"M15 10.5C16.934 10.5 18.5 12.066 18.5 14","key":"4"}),
    createElement(Path, {"d":"M22 10.5C20.066 10.5 18.5 12.066 18.5 14","key":"5"}),
    createElement(Path, {"d":"M22 10.5C20.066 10.5 18.5 8.934 18.5 7","key":"6"}),
    createElement(Path, {"d":"M15 10.5C16.934 10.5 18.5 8.934 18.5 7","key":"7"}),
    createElement(Path, {"d":"M6 18C8.211 18 10 19.789 10 22","key":"8"}),
    createElement(Path, {"d":"M14 18C11.789 18 10 19.789 10 22","key":"9"}),
    createElement(Path, {"d":"M14 18C11.789 18 10 16.211 10 14","key":"10"}),
    createElement(Path, {"d":"M6 18C8.211 18 10 16.211 10 14","key":"11"})
  );
});

SparkleThreeMedium.displayName = 'SparkleThreeMedium';

export default SparkleThreeMedium;
export { SparkleThreeMedium };

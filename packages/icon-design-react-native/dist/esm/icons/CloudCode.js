import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const CloudCode = forwardRef(function CloudCode(
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
    createElement(Path, {"d":"M13 15L11 21","key":"0"}),
    createElement(Path, {"d":"M16 16L18 18L16 20","key":"1"}),
    createElement(Path, {"d":"M8 16L6 18L8 20","key":"2"}),
    createElement(Path, {"d":"M20.977 16C21.609 15.16 22 14.133 22 13C22 10.555 20.242 8.527 17.922 8.094C17.488 5.211 15.004 3 12 3C8.996 3 6.512 5.211 6.078 8.094C3.758 8.527 2 10.555 2 13C2 14.133 2.391 15.16 3.023 16","key":"3"})
  );
});

CloudCode.displayName = 'CloudCode';

export default CloudCode;
export { CloudCode };

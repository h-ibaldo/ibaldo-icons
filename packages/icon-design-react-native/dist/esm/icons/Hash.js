import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const Hash = forwardRef(function Hash(
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
    createElement(Path, {"d":"M11 3L5 21","key":"0"}),
    createElement(Path, {"d":"M19 3L13 21","key":"1"}),
    createElement(Path, {"d":"M21 8L5 8","key":"2"}),
    createElement(Path, {"d":"M19 16L3 16","key":"3"})
  );
});

Hash.displayName = 'Hash';

export default Hash;
export { Hash };

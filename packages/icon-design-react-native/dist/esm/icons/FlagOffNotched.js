import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FlagOffNotched = forwardRef(function FlagOffNotched(
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
    createElement(Path, {"d":"M19 22L6 2","key":"0"}),
    createElement(Path, {"d":"M17 14L20 14L14.883 9.086L20 3.969L11 4","key":"1"}),
    createElement(Path, {"d":"M13.797 14L4 14L4 4L7.301 4","key":"2"}),
    createElement(Path, {"d":"M4 14L4 21.898","key":"3"})
  );
});

FlagOffNotched.displayName = 'FlagOffNotched';

export default FlagOffNotched;
export { FlagOffNotched };

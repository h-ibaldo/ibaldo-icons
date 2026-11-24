import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const Equals = forwardRef(function Equals(
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
    createElement(Path, {"d":"M6 9L18 9","key":"0"}),
    createElement(Path, {"d":"M6 15L18 15","key":"1"})
  );
});

Equals.displayName = 'Equals';

export default Equals;
export { Equals };

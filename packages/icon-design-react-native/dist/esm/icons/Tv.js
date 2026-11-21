import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const Tv = forwardRef(function Tv(
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
    createElement(Path, {"d":"M2 5L22 5L22 17L2 17Z","key":"0"}),
    createElement(Path, {"d":"M17 19L19 17L21 20","key":"1"}),
    createElement(Path, {"d":"M7 19L5 17L3 20","key":"2"})
  );
});

Tv.displayName = 'Tv';

export default Tv;
export { Tv };

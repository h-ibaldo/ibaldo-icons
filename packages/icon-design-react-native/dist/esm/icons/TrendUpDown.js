import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TrendUpDown = forwardRef(function TrendUpDown(
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
    createElement(Path, {"d":"M2 14L9 8L13 12L22 3","key":"0"}),
    createElement(Path, {"d":"M16 15L22 21","key":"1"}),
    createElement(Path, {"d":"M16 3L22 3L22 9","key":"2"}),
    createElement(Path, {"d":"M16 21L22 21L22 15","key":"3"})
  );
});

TrendUpDown.displayName = 'TrendUpDown';

export default TrendUpDown;
export { TrendUpDown };

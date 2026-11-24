import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const Monitor = forwardRef(function Monitor(
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
    createElement(Path, {"d":"M2 5L22 5L22 16L2 16Z","key":"0"}),
    createElement(Path, {"d":"M12 20L12 16","key":"1"}),
    createElement(Path, {"d":"M18 20L6 20","key":"2"})
  );
});

Monitor.displayName = 'Monitor';

export default Monitor;
export { Monitor };

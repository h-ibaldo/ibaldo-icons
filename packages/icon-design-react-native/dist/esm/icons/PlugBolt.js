import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const PlugBolt = forwardRef(function PlugBolt(
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
    createElement(Path, {"d":"M3 9L15 9L15 13C15 15.762 12.762 18 10 18L8 18C5.238 18 3 15.762 3 13Z","key":"0"}),
    createElement(Path, {"d":"M9 18L9 22","key":"1"}),
    createElement(Path, {"d":"M12 4L12 9","key":"2"}),
    createElement(Path, {"d":"M6 4L6 9","key":"3"}),
    createElement(Path, {"d":"M22 2L18 6L22 6L18 11","key":"4"})
  );
});

PlugBolt.displayName = 'PlugBolt';

export default PlugBolt;
export { PlugBolt };

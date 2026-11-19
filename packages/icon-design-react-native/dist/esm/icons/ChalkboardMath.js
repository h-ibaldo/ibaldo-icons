import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChalkboardMath = forwardRef(function ChalkboardMath(
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
    createElement(Path, {"d":"M3 19L3 5L21 5L21 19","key":"0"}),
    createElement(Path, {"d":"M22 19L2 19","key":"1"}),
    createElement(Path, {"d":"M10 12L14 12","key":"2"}),
    createElement(Path, {"d":"M12 10L12 14","key":"3"}),
    createElement(Path, {"d":"M17 14L17 10","key":"4"}),
    createElement(Path, {"d":"M7 14L7 10","key":"5"})
  );
});

ChalkboardMath.displayName = 'ChalkboardMath';

export default ChalkboardMath;
export { ChalkboardMath };

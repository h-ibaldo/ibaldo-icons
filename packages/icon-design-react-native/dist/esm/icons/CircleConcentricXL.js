import { createElement, forwardRef } from 'react';
import Svg, { Circle } from 'react-native-svg';

const CircleConcentricXL = forwardRef(function CircleConcentricXL(
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
    createElement(Circle, {"cx":"11.999999976489562","cy":"11.998779299956368","r":"10","key":"0"}),
    createElement(Circle, {"cx":"11.999999976489562","cy":"11.998779299956368","r":"6","key":"1"})
  );
});

CircleConcentricXL.displayName = 'CircleConcentricXL';

export default CircleConcentricXL;
export { CircleConcentricXL };

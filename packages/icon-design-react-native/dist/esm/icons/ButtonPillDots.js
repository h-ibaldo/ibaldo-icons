import { createElement, forwardRef } from 'react';
import Svg, { Line, Rect } from 'react-native-svg';

const ButtonPillDots = forwardRef(function ButtonPillDots(
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
    createElement(Rect, {"x":"1.99999999518667","y":"6.999999997010121","width":"20","height":"10.000000007293295","rx":"4.999995000386497","ry":"4.999995000386497","key":"0"}),
    createElement(Line, {"x1":"7.999999990799552","y1":"12.010000000450418","x2":"7.999999990799552","y2":"12.0000000004502","key":"1"}),
    createElement(Line, {"x1":"11.999999990799552","y1":"12.010000000450418","x2":"11.999999990799552","y2":"12.0000000004502","key":"2"}),
    createElement(Line, {"x1":"15.999999990799552","y1":"12.010000000450418","x2":"15.999999990799552","y2":"12.0000000004502","key":"3"})
  );
});

ButtonPillDots.displayName = 'ButtonPillDots';

export default ButtonPillDots;
export { ButtonPillDots };

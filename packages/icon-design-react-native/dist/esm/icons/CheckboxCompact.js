import { createElement, forwardRef } from 'react';
import Svg, { Rect } from 'react-native-svg';

const CheckboxCompact = forwardRef(function CheckboxCompact(
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
    createElement(Rect, {"x":"3.949462885140747","y":"4.000000000480213","width":"16","height":"16","rx":"3","ry":"3","key":"0"})
  );
});

CheckboxCompact.displayName = 'CheckboxCompact';

export default CheckboxCompact;
export { CheckboxCompact };

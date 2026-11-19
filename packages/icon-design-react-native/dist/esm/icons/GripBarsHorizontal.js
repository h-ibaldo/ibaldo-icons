import { createElement, forwardRef } from 'react';
import Svg, { Line } from 'react-native-svg';

const GripBarsHorizontal = forwardRef(function GripBarsHorizontal(
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
    createElement(Line, {"x1":"2.025268558149946","y1":"6.998782736171052","x2":"22.025268558149946","y2":"6.998782736171052","key":"0"}),
    createElement(Line, {"x1":"2.025268558149946","y1":"11.998782736171052","x2":"22.025268558149946","y2":"11.998782736171052","key":"1"}),
    createElement(Line, {"x1":"2.025268558149946","y1":"16.998782736171052","x2":"22.025268558149946","y2":"16.998782736171052","key":"2"})
  );
});

GripBarsHorizontal.displayName = 'GripBarsHorizontal';

export default GripBarsHorizontal;
export { GripBarsHorizontal };

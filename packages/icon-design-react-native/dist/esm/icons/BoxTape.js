import { createElement, forwardRef } from 'react';
import Svg, { Polyline, Rect } from 'react-native-svg';

const BoxTape = forwardRef(function BoxTape(
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
    createElement(Rect, {"x":"2","y":"1.999999999998181","width":"20","height":"20","rx":"1","ry":"1","key":"0"}),
    createElement(Polyline, {"points":"15 1.999999999998181 15 7.999999999998181 9 7.999999999998181 9 1.999999999998181","key":"1"})
  );
});

BoxTape.displayName = 'BoxTape';

export default BoxTape;
export { BoxTape };

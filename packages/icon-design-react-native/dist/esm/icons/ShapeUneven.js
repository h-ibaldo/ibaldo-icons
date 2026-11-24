import { createElement, forwardRef } from 'react';
import Svg, { Rect } from 'react-native-svg';

const ShapeUneven = forwardRef(function ShapeUneven(
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
    createElement(Rect, {"x":"1.974731445219732","y":"2.000000000448381","width":"6","height":"20","key":"0"}),
    createElement(Rect, {"x":"12.974731445219732","y":"6.000000000448381","width":"9","height":"12","key":"1"})
  );
});

ShapeUneven.displayName = 'ShapeUneven';

export default ShapeUneven;
export { ShapeUneven };

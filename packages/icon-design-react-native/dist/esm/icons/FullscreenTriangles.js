import { createElement, forwardRef } from 'react';
import Svg, { Polygon } from 'react-native-svg';

const FullscreenTriangles = forwardRef(function FullscreenTriangles(
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
    createElement(Polygon, {"points":"9.974731417511066 1.998779298535737 1.974731417511066 1.998779298535737 1.974731417511066 9.998779298535737 9.974731417511066 1.998779298535737","key":"0"}),
    createElement(Polygon, {"points":"13.97473488191099 21.998778259117898 21.974731417813018 21.998778259117898 21.974731417813018 13.998781723219508 13.97473488191099 21.998778259117898","key":"1"})
  );
});

FullscreenTriangles.displayName = 'FullscreenTriangles';

export default FullscreenTriangles;
export { FullscreenTriangles };

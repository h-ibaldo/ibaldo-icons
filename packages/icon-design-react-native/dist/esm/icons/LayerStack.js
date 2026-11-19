import { createElement, forwardRef } from 'react';
import Svg, { Polygon, Polyline } from 'react-native-svg';

const LayerStack = forwardRef(function LayerStack(
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
    createElement(Polygon, {"points":"11.999999990796823 12.000000000448381 1.999999990796823 7.000000000448381 11.999999990796823 2.000000000448381 21.999999990796823 7.000000000448381 11.999999990796823 12.000000000448381","key":"0"}),
    createElement(Polyline, {"points":"6.999999990796823 9.500000000448381 1.999999990796823 12.000000000448381 11.999999990796823 17.000000000448381 21.999999990796823 12.000000000448381 16.999999990796823 9.500000000448381","key":"1"}),
    createElement(Polyline, {"points":"6.999999990796823 14.500000000448381 1.999999990796823 17.000000000448381 11.999999990796823 22.000000000448381 21.999999990796823 17.000000000448381 16.999999990796823 14.500000000448381","key":"2"})
  );
});

LayerStack.displayName = 'LayerStack';

export default LayerStack;
export { LayerStack };

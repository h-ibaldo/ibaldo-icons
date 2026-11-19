import { createElement, forwardRef } from 'react';
import Svg, { Line, Polygon, Polyline } from 'react-native-svg';

const TabMinusCenterSharp = forwardRef(function TabMinusCenterSharp(
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
    createElement(Line, {"x1":"15.025268532079281","y1":"13.99877930112325","x2":"9.025268532079281","y2":"13.99877930112325","key":"0"}),
    createElement(Polygon, {"points":"22.025268532079281 21.99877930112325 2.025268532079281 21.99877930112325 2.025268532079281 1.99877930112325 10.025268532079281 1.99877930112325 13.025268532079281 5.99877930112325 22.025268532079281 5.99877930112325 22.025268532079281 21.99877930112325","key":"1"}),
    createElement(Polyline, {"points":"15.025268532079281 1.99877930112325 22.025268532079281 1.99877930112325 22.025268532079281 5.99877930112325","key":"2"})
  );
});

TabMinusCenterSharp.displayName = 'TabMinusCenterSharp';

export default TabMinusCenterSharp;
export { TabMinusCenterSharp };

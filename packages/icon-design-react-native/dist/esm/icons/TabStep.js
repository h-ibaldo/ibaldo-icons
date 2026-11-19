import { createElement, forwardRef } from 'react';
import Svg, { Line, Polygon } from 'react-native-svg';

const TabStep = forwardRef(function TabStep(
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
    createElement(Polygon, {"points":"22.025268532079281 21.99877930112325 2.025268532079281 21.99877930112325 2.025268532079281 1.99877930112325 11.025268532079281 1.99877930112325 11.025268532079281 5.99877930112325 22.025268532079281 5.99877930112325 22.025268532079281 21.99877930112325","key":"0"}),
    createElement(Line, {"x1":"22.025268532079281","y1":"1.99877930112325","x2":"15.025268532079281","y2":"1.99877930112325","key":"1"})
  );
});

TabStep.displayName = 'TabStep';

export default TabStep;
export { TabStep };

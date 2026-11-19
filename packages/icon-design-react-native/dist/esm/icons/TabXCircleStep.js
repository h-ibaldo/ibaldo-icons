import { createElement, forwardRef } from 'react';
import Svg, { Circle, G, Line, Polyline } from 'react-native-svg';

const TabXCircleStep = forwardRef(function TabXCircleStep(
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
    createElement(Polyline, {"points":"9.0252685320811 21.99877930112325 2.0252685320811 21.99877930112325 2.0252685320811 1.99877930112325 11.0252685320811 1.99877930112325 11.0252685320811 5.99877930112325 22.0252685320811 5.99877930112325 22.0252685320811 8.998779301119612","key":"0"}),
    createElement(Line, {"x1":"22.0252685320811","y1":"1.99877930112325","x2":"15.0252685320811","y2":"1.99877930112325","key":"1"}),
    createElement(G, {"key":"2"},
      createElement(Circle, {"cx":"16.525268529728237","cy":"16.498779303550691","r":"5.499999997577106","key":"0"}),
      createElement(Line, {"x1":"18.025268532150221","y1":"14.99877930112325","x2":"15.025268532150221","y2":"17.99877930112325","key":"1"}),
      createElement(Line, {"x1":"15.025268532219343","y1":"14.998779301057766","x2":"18.0252685320811","y2":"17.998779301192371","key":"2"}))
  );
});

TabXCircleStep.displayName = 'TabXCircleStep';

export default TabXCircleStep;
export { TabXCircleStep };

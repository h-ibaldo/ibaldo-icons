import { createElement, forwardRef } from 'react';
import Svg, { Circle, G, Line, Polyline } from 'react-native-svg';

const TabCheckCircleStep = forwardRef(function TabCheckCircleStep(
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
    createElement(G, {"key":"0"},
      createElement(Circle, {"cx":"17.025268532090195","cy":"16.99877930112325","r":"5","key":"0"}),
      createElement(Polyline, {"points":"15.525268532090195 16.998779298696718 16.525268532090195 17.998779303549782 18.525268532090195 15.998779298696718","key":"1"})),
    createElement(Polyline, {"points":"10.025268532090195 21.99877930112325 2.025268532090195 21.99877930112325 2.025268532090195 1.99877930112325 11.025268532090195 1.99877930112325 11.025268532090195 5.99877930112325 22.025268532090195 5.99877930112325 22.025268532090195 9.99877930112325","key":"1"}),
    createElement(Line, {"x1":"22.025268532090195","y1":"1.99877930112325","x2":"15.025268532090195","y2":"1.99877930112325","key":"2"})
  );
});

TabCheckCircleStep.displayName = 'TabCheckCircleStep';

export default TabCheckCircleStep;
export { TabCheckCircleStep };

import { createElement, forwardRef } from 'react';
import Svg, { Circle, G, Line, Polyline } from 'react-native-svg';

const TabXCircleSharp = forwardRef(function TabXCircleSharp(
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
    createElement(Polyline, {"points":"9.025268532090195 21.99877930112325 2.025268532090195 21.99877930112325 2.025268532090195 1.99877930112325 10.025268532090195 1.99877930112325 13.025268532090195 5.99877930112325 22.025268532090195 5.99877930112325 22.025268532090195 8.99877930112325","key":"0"}),
    createElement(Polyline, {"points":"15.025268532090195 1.99877930112325 22.025268532090195 1.99877930112325 22.025268532090195 5.99877930112325","key":"1"}),
    createElement(G, {"key":"2"},
      createElement(Circle, {"cx":"16.525268529728237","cy":"16.498779303550691","r":"5.499999997577106","key":"0"}),
      createElement(Line, {"x1":"18.025268532150221","y1":"14.99877930112325","x2":"15.025268532150221","y2":"17.99877930112325","key":"1"}),
      createElement(Line, {"x1":"15.025268532219343","y1":"14.998779301057766","x2":"18.025268532090195","y2":"17.998779301192371","key":"2"}))
  );
});

TabXCircleSharp.displayName = 'TabXCircleSharp';

export default TabXCircleSharp;
export { TabXCircleSharp };

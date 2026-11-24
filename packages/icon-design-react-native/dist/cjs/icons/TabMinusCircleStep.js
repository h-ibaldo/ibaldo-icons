'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, G, Line, Polyline } = RNSvg;

const TabMinusCircleStep = forwardRef(function TabMinusCircleStep(
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
    createElement(Polyline, {"points":"10.0252685320811 21.99877930112325 2.0252685320811 21.99877930112325 2.0252685320811 1.99877930112325 11.0252685320811 1.99877930112325 11.0252685320811 5.99877930112325 22.0252685320811 5.99877930112325 22.0252685320811 9.99877930112325","key":"0"}),
    createElement(Line, {"x1":"22.0252685320811","y1":"1.99877930112325","x2":"15.0252685320811","y2":"1.99877930112325","key":"1"}),
    createElement(G, {"key":"2"},
      createElement(Circle, {"cx":"17.025268532090195","cy":"16.998779306063625","r":"5","key":"0"}),
      createElement(Line, {"x1":"19.0252685320811","y1":"16.99877930112325","x2":"15.0252685320811","y2":"16.998779301301511","key":"1"}))
  );
});

TabMinusCircleStep.displayName = 'TabMinusCircleStep';

module.exports = TabMinusCircleStep;
module.exports.TabMinusCircleStep = TabMinusCircleStep;
module.exports.default = TabMinusCircleStep;

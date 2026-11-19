'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, G, Line, Polyline } = RNSvg;

const TabPlusCircleStep = forwardRef(function TabPlusCircleStep(
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
    createElement(Polyline, {"points":"10.025268532079281 21.99877930112325 2.025268532079281 21.99877930112325 2.025268532079281 1.99877930112325 11.025268532079281 1.99877930112325 11.025268532079281 5.99877930112325 22.025268532079281 5.99877930112325 22.025268532079281 9.99877930112325","key":"0"}),
    createElement(Line, {"x1":"22.025268532079281","y1":"1.99877930112325","x2":"15.025268532079281","y2":"1.99877930112325","key":"1"}),
    createElement(G, {"key":"2"},
      createElement(Circle, {"cx":"17.025268532090195","cy":"16.998779306063625","r":"5","key":"0"}),
      createElement(G, {"key":"1"},
        createElement(Line, {"x1":"17.025268532090195","y1":"14.998779301214199","x2":"17.025268532090195","y2":"18.998779301211471","key":"0"}),
        createElement(Line, {"x1":"19.025268532079281","y1":"16.99877930112325","x2":"15.025268532079281","y2":"16.998779301301511","key":"1"})))
  );
});

TabPlusCircleStep.displayName = 'TabPlusCircleStep';

module.exports = TabPlusCircleStep;
module.exports.TabPlusCircleStep = TabPlusCircleStep;
module.exports.default = TabPlusCircleStep;

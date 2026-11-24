'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polygon, Polyline } = RNSvg;

const TabCheckCenterStep = forwardRef(function TabCheckCenterStep(
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
    createElement(Polygon, {"points":"22.025268532079281 21.998779305074095 2.025268532079281 21.998779305074095 2.025268532079281 1.998779305074095 11.025268532079281 1.998779305074095 11.025268532079281 5.998779305074095 22.025268532079281 5.998779305074095 22.025268532079281 21.998779305074095","key":"0"}),
    createElement(Line, {"x1":"22.025268532079281","y1":"1.998779305074095","x2":"15.025268532079281","y2":"1.998779305074095","key":"1"}),
    createElement(Polyline, {"points":"8.025268532079281 13.99877930112325 11.025268532079281 16.99877930112325 16.025268532079281 11.99877930112325","key":"2"})
  );
});

TabCheckCenterStep.displayName = 'TabCheckCenterStep';

module.exports = TabCheckCenterStep;
module.exports.TabCheckCenterStep = TabCheckCenterStep;
module.exports.default = TabCheckCenterStep;

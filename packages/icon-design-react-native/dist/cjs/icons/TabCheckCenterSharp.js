'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Polygon, Polyline } = RNSvg;

const TabCheckCenterSharp = forwardRef(function TabCheckCenterSharp(
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
    createElement(Polygon, {"points":"22.025268532079281 21.998779305074095 2.025268532079281 21.998779305074095 2.025268532079281 1.998779305074095 10.025268532079281 1.998779305074095 13.025268532079281 5.998779305074095 22.025268532079281 5.998779305074095 22.025268532079281 21.998779305074095","key":"0"}),
    createElement(Polyline, {"points":"15.025268532079281 1.998779305074095 22.025268532079281 1.998779305074095 22.025268532079281 5.998779305074095","key":"1"}),
    createElement(Polyline, {"points":"8.025268532079281 13.99877930112325 11.025268532079281 16.99877930112325 16.025268532079281 11.99877930112325","key":"2"})
  );
});

TabCheckCenterSharp.displayName = 'TabCheckCenterSharp';

module.exports = TabCheckCenterSharp;
module.exports.TabCheckCenterSharp = TabCheckCenterSharp;
module.exports.default = TabCheckCenterSharp;

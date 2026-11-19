'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Polygon, Polyline } = RNSvg;

const TabSharp = forwardRef(function TabSharp(
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
    createElement(Polygon, {"points":"22.025268532079281 21.99877930112325 2.025268532079281 21.99877930112325 2.025268532079281 1.99877930112325 10.025268532079281 1.99877930112325 13.025268532079281 5.99877930112325 22.025268532079281 5.99877930112325 22.025268532079281 21.99877930112325","key":"0"}),
    createElement(Polyline, {"points":"15.025268532079281 1.99877930112325 22.025268532079281 1.99877930112325 22.025268532079281 5.99877930112325","key":"1"})
  );
});

TabSharp.displayName = 'TabSharp';

module.exports = TabSharp;
module.exports.TabSharp = TabSharp;
module.exports.default = TabSharp;

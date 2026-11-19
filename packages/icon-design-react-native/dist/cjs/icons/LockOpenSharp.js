'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path, Rect } = RNSvg;

const LockOpenSharp = forwardRef(function LockOpenSharp(
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
    createElement(Rect, {"x":"8.974731450040053","y":"13.000000000447471","width":"12","height":"9","key":"0"}),
    createElement(Path, {"d":"M2.974731450040053,12.000000000447471v-6.000003997516615c0-2.209136791556375,1.790859210928829-3.999996002483385,3.999996002479747-3.999996002483385h.000008000009984c2.209136796709572,0,3.999996009779352,1.790859218992409,3.999996002479747,3.999996015711076l-.000000019850631,7.000003984288924","key":"1"})
  );
});

LockOpenSharp.displayName = 'LockOpenSharp';

module.exports = LockOpenSharp;
module.exports.LockOpenSharp = LockOpenSharp;
module.exports.default = LockOpenSharp;

'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path, Rect } = RNSvg;

const LockSharp = forwardRef(function LockSharp(
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
    createElement(Rect, {"x":"5.974731450040053","y":"13.000000000447471","width":"12","height":"9","key":"0"}),
    createElement(Path, {"d":"M7.974731445079669,13.000000000447471v-7.000003997516615c0-2.209136791556375,1.790859210919734-3.999996002483385,3.999996002479747-3.999996002483385h.000008000000889c2.209136796720486,0,3.999996009799361,1.790859218992409,3.999996002479747,3.999996015711076l-.000000019850631,7.000003984288924","key":"1"})
  );
});

LockSharp.displayName = 'LockSharp';

module.exports = LockSharp;
module.exports.LockSharp = LockSharp;
module.exports.default = LockSharp;

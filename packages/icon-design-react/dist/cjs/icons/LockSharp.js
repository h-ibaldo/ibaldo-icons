'use strict';

const { createElement, forwardRef } = require('react');

const LockSharp = forwardRef(function LockSharp(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, className = '', ...props },
  ref
) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: ('icon-design ' + className).trim(),
      ...props
    },
    createElement('rect', {"x":"5.974731450040053","y":"13.000000000447471","width":"12","height":"9","key":"0"}),
    createElement('path', {"d":"M7.974731445079669,13.000000000447471v-7.000003997516615c0-2.209136791556375,1.790859210919734-3.999996002483385,3.999996002479747-3.999996002483385h.000008000000889c2.209136796720486,0,3.999996009799361,1.790859218992409,3.999996002479747,3.999996015711076l-.000000019850631,7.000003984288924","key":"1"})
  );
});

LockSharp.displayName = 'LockSharp';

module.exports = LockSharp;
module.exports.LockSharp = LockSharp;
module.exports.default = LockSharp;

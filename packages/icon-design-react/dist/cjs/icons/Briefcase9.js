'use strict';

const { createElement, forwardRef } = require('react');

const Briefcase9 = forwardRef(function Briefcase9(
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
    createElement('rect', {"x":"2","y":"6.999999999998181","width":"20","height":"14","rx":"2","ry":"2","key":"0"}),
    createElement('path', {"d":"M8,6.999999999998181v-2c0-1.104569499659192.895430500340808-2,2-2h4c1.104569499659192,0,2,.895430500340808,2,2v2","key":"1"}),
    createElement('path', {"d":"M2,11.999999999998181l1.055728090001139.52786404499966c5.630549813338803,2.815274906670311,12.257994006668014,2.815274906670311,17.888543820008636,0l1.055728089990225-.52786404499966","key":"2"})
  );
});

Briefcase9.displayName = 'Briefcase9';

module.exports = Briefcase9;
module.exports.Briefcase9 = Briefcase9;
module.exports.default = Briefcase9;

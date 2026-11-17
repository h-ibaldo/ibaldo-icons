'use strict';

const { createElement, forwardRef } = require('react');

const Selfie1 = forwardRef(function Selfie1(
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
    createElement('rect', {"x":"1.999509295545067","y":"4.999505878618947","width":"20","height":"14.000981371271337","rx":"2.160322612580785","ry":"2.160322612580785","transform":"translate(23.999505859799683 .000487268709549) rotate(90)","key":"0"}),
    createElement('circle', {"cx":"11.999999981180736","cy":"9.499996564258254","r":"2.5","key":"1"}),
    createElement('path', {"d":"M14.999999981180736,16.999996564258254v-2.000003000001016c0-1.656852592637733-1.343144407361251-2.999996999998984-2.999996999991708-2.999996999998984h-.000005999998393c-1.656852592641371,0-2.999997000009898,1.343144407361251-2.999997000009898,2.999996999998984v2.000003000001016","key":"2"})
  );
});

Selfie1.displayName = 'Selfie1';

module.exports = Selfie1;
module.exports.Selfie1 = Selfie1;
module.exports.default = Selfie1;

'use strict';

const { createElement, forwardRef } = require('react');

const DotsDiamond = forwardRef(function DotsDiamond(
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
    createElement('rect', {"x":"4.221825375546285","y":"4.219387443182239","width":"15.556349186088632","height":"15.556349186088632","rx":"2.499999999998875","ry":"2.499999999998875","transform":"translate(-4.96883885696025 11.999285914731155) rotate(-44.999999999992944)","key":"0"}),
    createElement('line', {"x1":"11.999999968586053","y1":"11.987562036226336","x2":"11.999999968586053","y2":"11.997562036226554","key":"1"}),
    createElement('line', {"x1":"7.999999968586053","y1":"11.987562036226336","x2":"7.999999968586053","y2":"11.997562036226554","key":"2"}),
    createElement('line', {"x1":"15.999999968586053","y1":"11.987562036226336","x2":"15.999999968586053","y2":"11.997562036226554","key":"3"})
  );
});

DotsDiamond.displayName = 'DotsDiamond';

module.exports = DotsDiamond;
module.exports.DotsDiamond = DotsDiamond;
module.exports.default = DotsDiamond;

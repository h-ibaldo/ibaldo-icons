'use strict';

const { createElement, forwardRef } = require('react');

const SelfieSquare = forwardRef(function SelfieSquare(
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
    createElement('rect', {"x":"1.999999981180736","y":"1.999996564258254","width":"20","height":"20","key":"0"}),
    createElement('circle', {"cx":"11.999999981189831","cy":"10.499996564258254","r":"3.5","key":"1"}),
    createElement('path', {"d":"M18.111111092299325,21.999996564258254v-1.888895000000048c0-3.375070096113632-2.736034903889959-6.111104999999952-6.111104999999952-6.111104999999952h-.000012222229998c-3.375070096109994,0-6.111104999989038,2.736034903886321-6.111104999989038,6.111104999999952v1.888895000000048","key":"2"})
  );
});

SelfieSquare.displayName = 'SelfieSquare';

module.exports = SelfieSquare;
module.exports.SelfieSquare = SelfieSquare;
module.exports.default = SelfieSquare;

'use strict';

const { createElement, forwardRef } = require('react');

const Lock2CheckOpen = forwardRef(function Lock2CheckOpen(
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
    createElement('polyline', {"points":"8.949462885139837 16.000000006628397 10.949462885139837 18.000000000298314 14.949462885139837 14.000000000480213","key":"0"}),
    createElement('rect', {"x":"3.949462885139837","y":"10.000000000480213","width":"16","height":"12","rx":"1","ry":"1","key":"1"}),
    createElement('path', {"d":"M16.527343744520294,5.000000000480213c-.772216796880457-1.764404296875-2.528686523440228-3-4.577880859380457-3-2.761474609369543,0-5,2.23858642578125-5,5v3","key":"2"})
  );
});

Lock2CheckOpen.displayName = 'Lock2CheckOpen';

module.exports = Lock2CheckOpen;
module.exports.Lock2CheckOpen = Lock2CheckOpen;
module.exports.default = Lock2CheckOpen;

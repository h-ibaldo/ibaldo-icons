'use strict';

const { createElement, forwardRef } = require('react');

const TrashArrowUpRestore6 = forwardRef(function TrashArrowUpRestore6(
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
    createElement('path', {"d":"M4.97473145010008,6.000000000550244l.000000000620275,13.999999999998181c.000000000060027,1.104569499660101.895430500429939,1.999999999959982,2.000000000100044,1.99999999991087l10-.0000000004502c1.104569499659192-.000000000049113,1.999999999959982-.89543050042812,1.999999999899956-2.00000000008913l-.000000000620275-13.999999999998181","key":"0"}),
    createElement('line', {"x1":"20.97473145010008","y1":"5.999999999831743","x2":"2.97473145010008","y2":"6.000000000639375","key":"1"}),
    createElement('path', {"d":"M8.97473145010008,6.000000000370164l-.000000000110049-2.35392100772151c-.000000000040018-.909104324450709.736974667760478-1.646078992311232,1.646078992210278-1.646078992351249l2.707842015439383-.000000000123691c.9091043244498-.000000000040927,1.646078992310322.736974667754112,1.64607899235034,1.646078992204821l.000000000110049,2.353921007724239","key":"2"}),
    createElement('polyline', {"points":"9.974731450080071 13.000000000459295 11.974731450080071 11.000000000459295 13.974731450080071 13.000000000459295","key":"3"}),
    createElement('line', {"x1":"11.974731450080071","y1":"17.000000000459295","x2":"11.974731450080071","y2":"11.000000000459295","key":"4"})
  );
});

TrashArrowUpRestore6.displayName = 'TrashArrowUpRestore6';

module.exports = TrashArrowUpRestore6;
module.exports.TrashArrowUpRestore6 = TrashArrowUpRestore6;
module.exports.default = TrashArrowUpRestore6;

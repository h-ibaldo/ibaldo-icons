'use strict';

const { createElement, forwardRef } = require('react');

const InformationSquare2 = forwardRef(function InformationSquare2(
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
    createElement('rect', {"x":"3.949462878465056","y":"3.997562035597184","width":"16","height":"16","rx":"3","ry":"3","key":"0"}),
    createElement('line', {"x1":"11.949462878465056","y1":"8.987562035596966","x2":"11.949462878465056","y2":"8.997562035597184","key":"1"}),
    createElement('line', {"x1":"11.949462878465056","y1":"14.997562035597184","x2":"11.949462878465056","y2":"11.997562035597184","key":"2"})
  );
});

InformationSquare2.displayName = 'InformationSquare2';

module.exports = InformationSquare2;
module.exports.InformationSquare2 = InformationSquare2;
module.exports.default = InformationSquare2;

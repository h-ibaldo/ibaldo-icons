'use strict';

const { createElement, forwardRef } = require('react');

const LayoutList = forwardRef(function LayoutList(
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
    createElement('rect', {"x":"1.999999994000973","y":"1.998779299956368","width":"8","height":"8","rx":"1","ry":"1","key":"0"}),
    createElement('line', {"x1":"13.999999994000973","y1":"5.998779299956368","x2":"21.999999994000973","y2":"5.998779299956368","key":"1"}),
    createElement('line', {"x1":"13.999999994000973","y1":"17.998779299956368","x2":"21.999999994000973","y2":"17.998779299956368","key":"2"}),
    createElement('rect', {"x":"4.999999994000973","y":"4.998779299956368","width":"2","height":"2","key":"3"}),
    createElement('rect', {"x":"1.999999994000973","y":"13.998779299956368","width":"8","height":"8","rx":"1","ry":"1","key":"4"}),
    createElement('rect', {"x":"4.999999994000973","y":"16.998779299956368","width":"2","height":"2","key":"5"})
  );
});

LayoutList.displayName = 'LayoutList';

module.exports = LayoutList;
module.exports.LayoutList = LayoutList;
module.exports.default = LayoutList;

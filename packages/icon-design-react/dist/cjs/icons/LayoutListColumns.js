'use strict';

const { createElement, forwardRef } = require('react');

const LayoutListColumns = forwardRef(function LayoutListColumns(
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
    createElement('rect', {"x":"1.999999994000973","y":"1.998779299956368","width":"4","height":"4","rx":"1","ry":"1","key":"0"}),
    createElement('line', {"x1":"8.999999994000973","y1":"3.998779299956368","x2":"9.999999994000973","y2":"3.998779299956368","key":"1"}),
    createElement('rect', {"x":"13.999999994000973","y":"1.998779299956368","width":"4","height":"4","rx":"1","ry":"1","key":"2"}),
    createElement('line', {"x1":"20.999999994000973","y1":"3.998779299956368","x2":"21.999999994000973","y2":"3.998779299956368","key":"3"}),
    createElement('rect', {"x":"1.999999994000973","y":"9.998779299956368","width":"4","height":"4","rx":"1","ry":"1","key":"4"}),
    createElement('line', {"x1":"8.999999994000973","y1":"11.998779299956368","x2":"9.999999994000973","y2":"11.998779299956368","key":"5"}),
    createElement('rect', {"x":"13.999999994000973","y":"9.998779299956368","width":"4","height":"4","rx":"1","ry":"1","key":"6"}),
    createElement('line', {"x1":"20.999999994000973","y1":"11.998779299956368","x2":"21.999999994000973","y2":"11.998779299956368","key":"7"}),
    createElement('rect', {"x":"1.999999994000973","y":"17.998779299956368","width":"4","height":"4","rx":"1","ry":"1","key":"8"}),
    createElement('line', {"x1":"8.999999994000973","y1":"19.998779299956368","x2":"9.999999994000973","y2":"19.998779299956368","key":"9"}),
    createElement('rect', {"x":"13.999999994000973","y":"17.998779299956368","width":"4","height":"4","rx":"1","ry":"1","key":"10"}),
    createElement('line', {"x1":"20.999999994000973","y1":"19.998779299956368","x2":"21.999999994000973","y2":"19.998779299956368","key":"11"})
  );
});

LayoutListColumns.displayName = 'LayoutListColumns';

module.exports = LayoutListColumns;
module.exports.LayoutListColumns = LayoutListColumns;
module.exports.default = LayoutListColumns;

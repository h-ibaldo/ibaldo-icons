'use strict';

const { createElement, forwardRef } = require('react');

const LayoutGridImage = forwardRef(function LayoutGridImage(
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
    createElement('path', {"d":"M9.999999994000973,5.998779299956368c-2.209138999201969,0-4,1.790861000798031-4,4","key":"1"}),
    createElement('line', {"x1":"4.999999994000973","y1":"5.008779299956586","x2":"4.999999994000973","y2":"4.998779299956368","key":"2"}),
    createElement('rect', {"x":"13.999999994000973","y":"1.998779299956368","width":"8","height":"8","rx":"1","ry":"1","key":"3"}),
    createElement('path', {"d":"M21.999999994000973,5.998779299956368c-2.209138999201969,0-4,1.790861000798031-4,4","key":"4"}),
    createElement('line', {"x1":"16.999999994000973","y1":"5.008779299956586","x2":"16.999999994000973","y2":"4.998779299956368","key":"5"}),
    createElement('rect', {"x":"1.999999994000973","y":"13.998779299956368","width":"8","height":"8","rx":"1","ry":"1","key":"6"}),
    createElement('path', {"d":"M9.999999994000973,17.998779299956368c-2.209138999201969,0-4,1.790861000798031-4,4","key":"7"}),
    createElement('line', {"x1":"4.999999994000973","y1":"17.008779299956586","x2":"4.999999994000973","y2":"16.998779299956368","key":"8"}),
    createElement('rect', {"x":"13.999999994000973","y":"13.998779299956368","width":"8","height":"8","rx":"1","ry":"1","key":"9"}),
    createElement('path', {"d":"M21.999999994000973,17.998779299956368c-2.209138999201969,0-4,1.790861000798031-4,4","key":"10"}),
    createElement('line', {"x1":"16.999999994000973","y1":"17.008779299956586","x2":"16.999999994000973","y2":"16.998779299956368","key":"11"})
  );
});

LayoutGridImage.displayName = 'LayoutGridImage';

module.exports = LayoutGridImage;
module.exports.LayoutGridImage = LayoutGridImage;
module.exports.default = LayoutGridImage;

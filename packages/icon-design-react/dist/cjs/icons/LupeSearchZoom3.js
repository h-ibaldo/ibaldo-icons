'use strict';

const { createElement, forwardRef } = require('react');

const LupeSearchZoom3 = forwardRef(function LupeSearchZoom3(
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
    createElement('circle', {"cx":"9.000000014042598","cy":"8.998779305395146","r":"7.000000000000001","key":"0"}),
    createElement('line', {"x1":"22.000000014042598","y1":"21.998779305395146","x2":"14.000000014042598","y2":"13.998779305395146","key":"1"})
  );
});

LupeSearchZoom3.displayName = 'LupeSearchZoom3';

module.exports = LupeSearchZoom3;
module.exports.LupeSearchZoom3 = LupeSearchZoom3;
module.exports.default = LupeSearchZoom3;

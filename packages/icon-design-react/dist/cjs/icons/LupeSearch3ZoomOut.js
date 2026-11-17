'use strict';

const { createElement, forwardRef } = require('react');

const LupeSearch3ZoomOut = forwardRef(function LupeSearch3ZoomOut(
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
    createElement('circle', {"cx":"8.999999993642632","cy":"8.998779299956368","r":"7.000000000000001","key":"0"}),
    createElement('line', {"x1":"21.999999993642632","y1":"21.998779299956368","x2":"13.999999993642632","y2":"13.998779299956368","key":"1"}),
    createElement('line', {"x1":"11.999999993642632","y1":"8.998779299956368","x2":"5.999999993642632","y2":"8.998779299956368","key":"2"})
  );
});

LupeSearch3ZoomOut.displayName = 'LupeSearch3ZoomOut';

module.exports = LupeSearch3ZoomOut;
module.exports.LupeSearch3ZoomOut = LupeSearch3ZoomOut;
module.exports.default = LupeSearch3ZoomOut;

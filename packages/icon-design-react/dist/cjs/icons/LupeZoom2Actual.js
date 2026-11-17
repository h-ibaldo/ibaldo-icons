'use strict';

const { createElement, forwardRef } = require('react');

const LupeZoom2Actual = forwardRef(function LupeZoom2Actual(
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
    createElement('circle', {"cx":"9.999999981002475","cy":"9.997562035418014","r":"8","key":"0"}),
    createElement('line', {"x1":"15.656860332561337","y1":"15.654422386980514","x2":"21.999999981002475","y2":"21.997562035418014","key":"1"}),
    createElement('line', {"x1":"6.999999980991561","y1":"7.997562035418014","x2":"6.999999980991561","y2":"11.997562035418014","key":"2"}),
    createElement('line', {"x1":"12.999999980991561","y1":"7.997562035418014","x2":"12.999999980991561","y2":"11.997562035418014","key":"3"}),
    createElement('line', {"x1":"9.999999980991561","y1":"8.007562035418232","x2":"9.999999980991561","y2":"7.997562035418014","key":"4"}),
    createElement('line', {"x1":"9.999999980991561","y1":"12.007562035418232","x2":"9.999999980991561","y2":"11.997562035418014","key":"5"})
  );
});

LupeZoom2Actual.displayName = 'LupeZoom2Actual';

module.exports = LupeZoom2Actual;
module.exports.LupeZoom2Actual = LupeZoom2Actual;
module.exports.default = LupeZoom2Actual;

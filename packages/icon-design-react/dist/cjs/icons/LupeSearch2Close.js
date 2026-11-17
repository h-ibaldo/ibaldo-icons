'use strict';

const { createElement, forwardRef } = require('react');

const LupeSearch2Close = forwardRef(function LupeSearch2Close(
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
    createElement('circle', {"cx":"10.000000018382707","cy":"9.99877930438015","r":"8","key":"0"}),
    createElement('line', {"x1":"15.656860369943388","y1":"15.65563965594265","x2":"22.000000018382707","y2":"21.99877930438015","key":"1"}),
    createElement('line', {"x1":"12.000000018382707","y1":"7.99877930438015","x2":"8.000000018382707","y2":"11.99877930438015","key":"2"}),
    createElement('line', {"x1":"8.000000018382707","y1":"7.99877930438015","x2":"12.000000018382707","y2":"11.99877930438015","key":"3"})
  );
});

LupeSearch2Close.displayName = 'LupeSearch2Close';

module.exports = LupeSearch2Close;
module.exports.LupeSearch2Close = LupeSearch2Close;
module.exports.default = LupeSearch2Close;

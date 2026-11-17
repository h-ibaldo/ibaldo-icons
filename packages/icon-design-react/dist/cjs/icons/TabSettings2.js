'use strict';

const { createElement, forwardRef } = require('react');

const TabSettings2 = forwardRef(function TabSettings2(
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
    createElement('polygon', {"points":"22 21.999999999999091 2 21.999999999999091 2 1.999999999999091 11 1.999999999999091 11 5.999999999999091 22 5.999999999999091 22 21.999999999999091","key":"0"}),
    createElement('line', {"x1":"22","y1":"1.999999999999091","x2":"15","y2":"1.999999999999091","key":"1"}),
    createElement('line', {"x1":"8","y1":"14.009999999999309","x2":"8","y2":"13.999999999999091","key":"2"}),
    createElement('line', {"x1":"12","y1":"14.009999999999309","x2":"12","y2":"13.999999999999091","key":"3"}),
    createElement('line', {"x1":"16","y1":"14.009999999999309","x2":"16","y2":"13.999999999999091","key":"4"})
  );
});

TabSettings2.displayName = 'TabSettings2';

module.exports = TabSettings2;
module.exports.TabSettings2 = TabSettings2;
module.exports.default = TabSettings2;

'use strict';

const { createElement, forwardRef } = require('react');

const ShareConnect1 = forwardRef(function ShareConnect1(
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
    createElement('circle', {"cx":"4","cy":"11.999999999998181","r":"2","key":"0"}),
    createElement('circle', {"cx":"20","cy":"3.999999999998181","r":"2","key":"1"}),
    createElement('circle', {"cx":"20","cy":"19.999999999998181","r":"2","key":"2"}),
    createElement('line', {"x1":"5.78173828125","y1":"12.890869140617724","x2":"18.21826171875","y2":"19.109130859367724","key":"3"}),
    createElement('line', {"x1":"18.21826171875","y1":"4.890869140617724","x2":"5.78173828125","y2":"11.109130859367724","key":"4"})
  );
});

ShareConnect1.displayName = 'ShareConnect1';

module.exports = ShareConnect1;
module.exports.ShareConnect1 = ShareConnect1;
module.exports.default = ShareConnect1;

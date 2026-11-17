'use strict';

const { createElement, forwardRef } = require('react');

const TouchScreenSwipeRight22 = forwardRef(function TouchScreenSwipeRight22(
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
    createElement('polyline', {"points":"19.000000000129148 2.999999999865395 22 6 18.999999999869033 8.999999999865395","key":"0"}),
    createElement('line', {"x1":"14","y1":"5.99999999963984","x2":"22","y2":"6","key":"1"}),
    createElement('circle', {"cx":"5.999999999997272","cy":"5.99999999928059","r":"4.000000000001819","key":"2"}),
    createElement('polyline', {"points":"19.000000000129148 14.999999999865395 22 18 18.999999999869033 20.999999999865395","key":"3"}),
    createElement('line', {"x1":"14","y1":"17.99999999963984","x2":"22","y2":"18","key":"4"}),
    createElement('circle', {"cx":"5.999999999997272","cy":"17.99999999928059","r":"4.000000000001819","key":"5"})
  );
});

TouchScreenSwipeRight22.displayName = 'TouchScreenSwipeRight22';

module.exports = TouchScreenSwipeRight22;
module.exports.TouchScreenSwipeRight22 = TouchScreenSwipeRight22;
module.exports.default = TouchScreenSwipeRight22;

'use strict';

const { createElement, forwardRef } = require('react');

const AccessibilityPersonCircle = forwardRef(function AccessibilityPersonCircle(
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
    createElement('rect', {"x":"1.999999998827207","y":"1.99878272941784","width":"19.999999999685315","height":"19.999999999286359","rx":"9.999989972466002","ry":"9.999989972466002","key":"0"}),
    createElement('circle', {"cx":"11.999999998670319","cy":"7.499391368103716","r":"1.500608631892192","key":"1"}),
    createElement('polyline', {"points":"6.999999998670319 9.998782736161957 9.999999998670319 10.998782736161957 13.999999998670319 10.998782736161957 16.999999998670319 9.998782736161957","key":"2"}),
    createElement('polyline', {"points":"9.999999998670319 10.998782736161957 9.999999998670319 14.998782736161957 7.999999998670319 17.99878273620925","key":"3"}),
    createElement('polyline', {"points":"13.999999998310159 10.99878273620925 13.999999998490239 14.99878273620925 15.999999998670319 17.998782736161957","key":"4"}),
    createElement('line', {"x1":"9.999999998670319","y1":"14.998782736161957","x2":"13.999999998670319","y2":"14.998782736161957","key":"5"})
  );
});

AccessibilityPersonCircle.displayName = 'AccessibilityPersonCircle';

module.exports = AccessibilityPersonCircle;
module.exports.AccessibilityPersonCircle = AccessibilityPersonCircle;
module.exports.default = AccessibilityPersonCircle;

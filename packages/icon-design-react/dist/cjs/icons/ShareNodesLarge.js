'use strict';

const { createElement, forwardRef } = require('react');

const ShareNodesLarge = forwardRef(function ShareNodesLarge(
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
    createElement('circle', {"cx":"5","cy":"11.999999999998181","r":"3","key":"0"}),
    createElement('circle', {"cx":"19","cy":"4.999999999998181","r":"3","key":"1"}),
    createElement('circle', {"cx":"19","cy":"18.999999999998181","r":"3","key":"2"}),
    createElement('line', {"x1":"7.6728515625","y1":"13.336425781248181","x2":"16.3271484375","y2":"17.663574218748181","key":"3"}),
    createElement('line', {"x1":"16.3271484375","y1":"6.336425781248181","x2":"7.6728515625","y2":"10.663574218748181","key":"4"})
  );
});

ShareNodesLarge.displayName = 'ShareNodesLarge';

module.exports = ShareNodesLarge;
module.exports.ShareNodesLarge = ShareNodesLarge;
module.exports.default = ShareNodesLarge;

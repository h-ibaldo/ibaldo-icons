'use strict';

const { createElement, forwardRef } = require('react');

const TouchSwipeRight = forwardRef(function TouchSwipeRight(
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
    createElement('polyline', {"points":"17.075805664055224 8.998782737457077 20.075805663656865 11.998782737860893 17.075805663256688 14.998782737457077","key":"0"}),
    createElement('line', {"x1":"12.075805663656865","y1":"11.998782736780413","x2":"20.075805663656865","y2":"11.998782737860893","key":"1"}),
    createElement('circle', {"cx":"8.075805663656411","cy":"11.998782736241992","r":"4.000000000000227","key":"2"})
  );
});

TouchSwipeRight.displayName = 'TouchSwipeRight';

module.exports = TouchSwipeRight;
module.exports.TouchSwipeRight = TouchSwipeRight;
module.exports.default = TouchSwipeRight;

'use strict';

const { createElement, forwardRef } = require('react');

const TouchScreenSwipeLeft2 = forwardRef(function TouchScreenSwipeLeft2(
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
    createElement('polyline', {"points":"5.025268549024986 14.99878273928698 2.025268549155953 11.998782739152375 5.02526854928692 8.99878273928698","key":"0"}),
    createElement('line', {"x1":"10.025268549155953","y1":"11.998782739512535","x2":"2.025268549155953","y2":"11.998782739152375","key":"1"}),
    createElement('circle', {"cx":"18.025268549153679","cy":"11.998782739871785","r":"3.999999999999318","key":"2"})
  );
});

TouchScreenSwipeLeft2.displayName = 'TouchScreenSwipeLeft2';

module.exports = TouchScreenSwipeLeft2;
module.exports.TouchScreenSwipeLeft2 = TouchScreenSwipeLeft2;
module.exports.default = TouchScreenSwipeLeft2;

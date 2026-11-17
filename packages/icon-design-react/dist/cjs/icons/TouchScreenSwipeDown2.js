'use strict';

const { createElement, forwardRef } = require('react');

const TouchScreenSwipeDown2 = forwardRef(function TouchScreenSwipeDown2(
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
    createElement('polyline', {"points":"9.025268549155953 18.998782739599847 12.025268549155953 21.998782739599847 15.025268549155953 18.998782739599847","key":"0"}),
    createElement('line', {"x1":"12.025268549155953","y1":"13.998782739599847","x2":"12.025268549155953","y2":"21.998782739599847","key":"1"}),
    createElement('circle', {"cx":"12.025268549155953","cy":"5.998782739599847","r":"4","key":"2"})
  );
});

TouchScreenSwipeDown2.displayName = 'TouchScreenSwipeDown2';

module.exports = TouchScreenSwipeDown2;
module.exports.TouchScreenSwipeDown2 = TouchScreenSwipeDown2;
module.exports.default = TouchScreenSwipeDown2;

'use strict';

const { createElement, forwardRef } = require('react');

const SwitchDialRight = forwardRef(function SwitchDialRight(
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
    createElement('circle', {"cx":"11.999999977098014","cy":"15.99999656343698","r":"5.999999999998181","key":"0"}),
    createElement('line', {"x1":"9.999999977100742","y1":"17.999996563434252","x2":"13.999999977100742","y2":"13.999996563434252","key":"1"}),
    createElement('circle', {"cx":"11.999999977100742","cy":"3.99999656343789","r":"2","key":"2"}),
    createElement('circle', {"cx":"19.999999977100742","cy":"3.99999656343789","r":"2","key":"3"}),
    createElement('circle', {"cx":"3.999999977100742","cy":"3.99999656343789","r":"2","key":"4"}),
    createElement('line', {"x1":"19.999999977100742","y1":"3.99999656343789","x2":"19.999999977100742","y2":"3.99999656343789","key":"5"})
  );
});

SwitchDialRight.displayName = 'SwitchDialRight';

module.exports = SwitchDialRight;
module.exports.SwitchDialRight = SwitchDialRight;
module.exports.default = SwitchDialRight;

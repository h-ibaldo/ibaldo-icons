'use strict';

const { createElement, forwardRef } = require('react');

const HouseDoorChimney = forwardRef(function HouseDoorChimney(
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
    createElement('polygon', {"points":"12.00000000018008 3.000000000842192 2.00000000018008 12.000000000842192 5.00000000018008 12.000000000842192 5.00000000018008 21.000000000842192 10.00000000018008 21.000000000842192 10.00000000018008 16.000000000842192 14.00000000018008 16.000000000842192 14.00000000018008 21.000000000842192 19.00000000018008 21.000000000842192 19.00000000018008 12.000000000842192 22.00000000018008 12.000000000842192 12.00000000018008 3.000000000842192","key":"0"}),
    createElement('line', {"x1":"18.00000000018008","y1":"4.000000000842192","x2":"18.00000000018008","y2":"8.280625818604676","key":"1"})
  );
});

HouseDoorChimney.displayName = 'HouseDoorChimney';

module.exports = HouseDoorChimney;
module.exports.HouseDoorChimney = HouseDoorChimney;
module.exports.default = HouseDoorChimney;

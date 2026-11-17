'use strict';

const { createElement, forwardRef } = require('react');

const BatteryBoltLargeSlanted = forwardRef(function BatteryBoltLargeSlanted(
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
    createElement('path', {"d":"M15 6L17 6C18.105 6 19 6.895 19 8L19 16C19 17.105 18.105 18 17 18L15 18","key":"0"}),
    createElement('path', {"d":"M6 18L4 18C2.895 18 2 17.105 2 16L2 8C2 6.895 2.895 6 4 6L6 6","key":"1"}),
    createElement('path', {"d":"M19 15L21.316 14.227C21.727 14.094 22 13.711 22 13.277L22 10.723C22 10.289 21.727 9.906 21.316 9.773L19 9","key":"2"}),
    createElement('path', {"d":"M9 20L10 14L5 12L12 4L11 10L16 12Z","key":"3"})
  );
});

BatteryBoltLargeSlanted.displayName = 'BatteryBoltLargeSlanted';

module.exports = BatteryBoltLargeSlanted;
module.exports.BatteryBoltLargeSlanted = BatteryBoltLargeSlanted;
module.exports.default = BatteryBoltLargeSlanted;

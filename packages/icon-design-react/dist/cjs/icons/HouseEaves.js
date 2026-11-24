'use strict';

const { createElement, forwardRef } = require('react');

const HouseEaves = forwardRef(function HouseEaves(
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
    createElement('path', {"d":"M5.007265261379871,10.000000000842192v10c0,.552284749828686.447715250169495,1,1,1h12c.552284749830505,0,1-.447715250171314,1-1v-10","key":"0"}),
    createElement('path', {"d":"M21.787135120239327,13.000000000842192L13.553536993700618,4.017901874094605c-.831365098711103-.906942843332217-2.261178365921296-.906942843332217-3.09254346463058,0L2.227395402520415,13.000000000842192","key":"1"})
  );
});

HouseEaves.displayName = 'HouseEaves';

module.exports = HouseEaves;
module.exports.HouseEaves = HouseEaves;
module.exports.default = HouseEaves;

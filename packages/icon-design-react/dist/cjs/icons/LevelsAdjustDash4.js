'use strict';

const { createElement, forwardRef } = require('react');

const LevelsAdjustDash4 = forwardRef(function LevelsAdjustDash4(
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
    createElement('circle', {"cx":"8.00000001495664","cy":"12.000000015211299","r":"3","key":"0"}),
    createElement('line', {"x1":"11.00000001495664","y1":"12.000000015211299","x2":"21.999999995498911","y2":"12.000000015211299","key":"1"}),
    createElement('line', {"x1":"1.99999999550073","y1":"12.000000015211299","x2":"5.00000001495664","y2":"12.000000015211299","key":"2"}),
    createElement('circle', {"cx":"16.000000014954821","cy":"5.000000024597284","r":"3","key":"3"}),
    createElement('line', {"x1":"13.000000014954821","y1":"5.000000024597284","x2":"1.999999995501639","y2":"5.000000024597284","key":"4"}),
    createElement('line', {"x1":"21.99999999550073","y1":"5.000000024597284","x2":"19.00000001495664","y2":"5.000000024597284","key":"5"}),
    createElement('circle', {"cx":"16.000000014954821","cy":"19.000000015211299","r":"3","key":"6"}),
    createElement('line', {"x1":"13.000000014954821","y1":"19.000000015211299","x2":"1.999999995501639","y2":"19.000000015211299","key":"7"}),
    createElement('line', {"x1":"21.99999999550073","y1":"19.000000015211299","x2":"19.00000001495664","y2":"19.000000015211299","key":"8"})
  );
});

LevelsAdjustDash4.displayName = 'LevelsAdjustDash4';

module.exports = LevelsAdjustDash4;
module.exports.LevelsAdjustDash4 = LevelsAdjustDash4;
module.exports.default = LevelsAdjustDash4;

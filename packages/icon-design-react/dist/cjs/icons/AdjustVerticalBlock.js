'use strict';

const { createElement, forwardRef } = require('react');

const AdjustVerticalBlock = forwardRef(function AdjustVerticalBlock(
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
    createElement('line', {"x1":"18.999999990796823","y1":"9.99999999973079","x2":"18.999999990083779","y2":"21.99999999973079","key":"0"}),
    createElement('line', {"x1":"18.99999999035208","y1":"1.99999999973079","x2":"18.999999990218384","y2":"4.99999999973079","key":"1"}),
    createElement('rect', {"x":"16.499999990796823","y":"4.49999999973079","width":"5","height":"6","rx":"1","ry":"1","transform":"translate(26.499999990527613 -11.499999991066034) rotate(90)","key":"2"}),
    createElement('rect', {"x":"9.499999990796823","y":"13.49999999973079","width":"5","height":"6","rx":"1","ry":"1","transform":"translate(28.499999990527613 4.500000008933965) rotate(90)","key":"3"}),
    createElement('line', {"x1":"4.999999990796823","y1":"9.99999999973079","x2":"4.999999990083779","y2":"21.99999999973079","key":"4"}),
    createElement('line', {"x1":"4.99999999035208","y1":"1.99999999973079","x2":"4.999999990218384","y2":"4.99999999973079","key":"5"}),
    createElement('rect', {"x":"2.499999990796823","y":"4.49999999973079","width":"5","height":"6","rx":"1","ry":"1","transform":"translate(12.499999990527613 2.500000008933966) rotate(90)","key":"6"}),
    createElement('line', {"x1":"11.99999998990188","y1":"13.999999999547981","x2":"11.999999991691766","y2":"1.99999999973079","key":"7"}),
    createElement('line', {"x1":"11.999999990594915","y1":"21.99999999973079","x2":"11.999999990998731","y2":"18.999999999547981","key":"8"})
  );
});

AdjustVerticalBlock.displayName = 'AdjustVerticalBlock';

module.exports = AdjustVerticalBlock;
module.exports.AdjustVerticalBlock = AdjustVerticalBlock;
module.exports.default = AdjustVerticalBlock;

'use strict';

const { createElement, forwardRef } = require('react');

const RatioOneToOne = forwardRef(function RatioOneToOne(
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
    createElement('line', {"x1":"11.999999993611709","y1":"10.008779299956586","x2":"11.999999993611709","y2":"9.998779299956368","key":"0"}),
    createElement('line', {"x1":"11.999999993611709","y1":"14.008779299956586","x2":"11.999999993611709","y2":"13.998779299956368","key":"1"}),
    createElement('polyline', {"points":"6.999999993611709 14.998779299956368 6.999999993611709 8.998779299956368 5.999999993611709 8.998779299956368","key":"2"}),
    createElement('polyline', {"points":"16.999999993611709 14.998779299956368 16.999999993611709 8.998779299956368 15.999999993611709 8.998779299956368","key":"3"}),
    createElement('rect', {"x":"1.999999993611709","y":"3.998779299956368","width":"20","height":"16","rx":"1","ry":"1","key":"4"})
  );
});

RatioOneToOne.displayName = 'RatioOneToOne';

module.exports = RatioOneToOne;
module.exports.RatioOneToOne = RatioOneToOne;
module.exports.default = RatioOneToOne;

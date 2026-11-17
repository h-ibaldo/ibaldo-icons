'use strict';

const { createElement, forwardRef } = require('react');

const SunStarStriped = forwardRef(function SunStarStriped(
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
    createElement('polygon', {"points":"18.999999990796823 15.000000000448381 21.999999990796823 12.000000000448381 18.999999990796823 9.000000000448381 18.999999990796823 5.000000000448381 14.999999990796823 5.000000000448381 11.999999990796823 2.000000000448381 8.999999990796823 5.000000000448381 4.999999990796823 5.000000000448381 4.999999990796823 9.000000000448381 1.999999990796823 12.000000000448381 4.999999990796823 15.000000000448381 4.999999990796823 19.000000000448381 8.999999990796823 19.000000000448381 11.999999990796823 22.000000000448381 14.999999990796823 19.000000000448381 18.999999990796823 19.000000000448381 18.999999990796823 15.000000000448381","key":"0"}),
    createElement('line', {"x1":"11.999999990796823","y1":"20.000000000448381","x2":"10.999999990796823","y2":"21.000000000448381","key":"1"}),
    createElement('line', {"x1":"11.999999990796823","y1":"16.000000000448381","x2":"8.999999990796823","y2":"19.000000000448381","key":"2"}),
    createElement('line', {"x1":"11.999999990796823","y1":"12.000000000448381","x2":"4.999999990796823","y2":"19.000000000448381","key":"3"}),
    createElement('line', {"x1":"6.999999990796823","y1":"5.000000000448381","x2":"4.999999990796823","y2":"7.000000000448381","key":"4"}),
    createElement('line', {"x1":"11.999999990796823","y1":"4.000000000448381","x2":"2.999999990796823","y2":"13.000000000448381","key":"5"}),
    createElement('line', {"x1":"11.999999990796823","y1":"8.000000000448381","x2":"4.999999990796823","y2":"15.000000000448381","key":"6"})
  );
});

SunStarStriped.displayName = 'SunStarStriped';

module.exports = SunStarStriped;
module.exports.SunStarStriped = SunStarStriped;
module.exports.default = SunStarStriped;

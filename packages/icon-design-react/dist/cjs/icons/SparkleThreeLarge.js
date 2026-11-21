'use strict';

const { createElement, forwardRef } = require('react');

const SparkleThreeLarge = forwardRef(function SparkleThreeLarge(
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
    createElement('path', {"d":"M2 8.5C5.59 8.5 8.5 11.41 8.5 15","key":"0"}),
    createElement('path', {"d":"M15 8.5C11.41 8.5 8.5 11.41 8.5 15","key":"1"}),
    createElement('path', {"d":"M15 8.5C11.41 8.5 8.5 5.59 8.5 2","key":"2"}),
    createElement('path', {"d":"M2 8.5C5.59 8.5 8.5 5.59 8.5 2","key":"3"}),
    createElement('path', {"d":"M9 19C10.656 19 12 20.344 12 22","key":"4"}),
    createElement('path', {"d":"M15 19C13.344 19 12 20.344 12 22","key":"5"}),
    createElement('path', {"d":"M15 19C13.344 19 12 17.656 12 16","key":"6"}),
    createElement('path', {"d":"M9 19C10.656 19 12 17.656 12 16","key":"7"}),
    createElement('path', {"d":"M14 13.5C15.934 13.5 17.5 15.066 17.5 17","key":"8"}),
    createElement('path', {"d":"M21 13.5C19.066 13.5 17.5 15.066 17.5 17","key":"9"}),
    createElement('path', {"d":"M21 13.5C19.066 13.5 17.5 11.934 17.5 10","key":"10"}),
    createElement('path', {"d":"M14 13.5C15.934 13.5 17.5 11.934 17.5 10","key":"11"})
  );
});

SparkleThreeLarge.displayName = 'SparkleThreeLarge';

module.exports = SparkleThreeLarge;
module.exports.SparkleThreeLarge = SparkleThreeLarge;
module.exports.default = SparkleThreeLarge;

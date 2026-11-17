'use strict';

const { createElement, forwardRef } = require('react');

const HourglassCurved = forwardRef(function HourglassCurved(
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
    createElement('path', {"d":"M9.148 10.512L6.66 6.152C6.227 5.398 6 4.543 6 3.672L6 2L18 2L18 3.672C18 4.543 17.773 5.398 17.34 6.152L14.852 10.512C14.324 11.434 14.324 12.566 14.852 13.488L17.34 17.848C17.773 18.602 18 19.457 18 20.328L18 22L6 22L6 20.328C6 19.457 6.227 18.602 6.66 17.848L9.148 13.488C9.676 12.566 9.676 11.434 9.148 10.512Z","key":"0"})
  );
});

HourglassCurved.displayName = 'HourglassCurved';

module.exports = HourglassCurved;
module.exports.HourglassCurved = HourglassCurved;
module.exports.default = HourglassCurved;

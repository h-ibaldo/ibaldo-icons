'use strict';

const { createElement, forwardRef } = require('react');

const DatabaseBolt = forwardRef(function DatabaseBolt(
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
    createElement('path', {"d":"M2 7C2 4.789 5.582 3 10 3C14.418 3 18 4.789 18 7C18 9.211 14.418 11 10 11C5.582 11 2 9.211 2 7Z","key":"0"}),
    createElement('path', {"d":"M18 7L18 12","key":"1"}),
    createElement('path', {"d":"M2 17L2 7","key":"2"}),
    createElement('path', {"d":"M14 15.465C12.824 15.805 11.457 16 10 16C5.582 16 2 14.211 2 12","key":"3"}),
    createElement('path', {"d":"M14 20.465C12.824 20.805 11.457 21 10 21C5.582 21 2 19.211 2 17","key":"4"}),
    createElement('path', {"d":"M22 13L18 17.5L22 17.5L18 22","key":"5"})
  );
});

DatabaseBolt.displayName = 'DatabaseBolt';

module.exports = DatabaseBolt;
module.exports.DatabaseBolt = DatabaseBolt;
module.exports.default = DatabaseBolt;

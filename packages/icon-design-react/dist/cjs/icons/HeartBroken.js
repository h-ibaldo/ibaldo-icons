'use strict';

const { createElement, forwardRef } = require('react');

const HeartBroken = forwardRef(function HeartBroken(
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
    createElement('path', {"d":"M20.727 5.848C18.723 3.508 15.152 3.371 12.977 5.547L12.012 6.512L12.012 6.539L11.988 6.512L11.023 5.547C8.848 3.371 5.277 3.508 3.273 5.848C1.887 7.461 1.605 9.75 2.559 11.652C4.512 15.414 11.988 20.512 11.988 20.512L12.012 20.473L12.012 20.512C12.012 20.512 19.488 15.414 21.441 11.652C22.395 9.75 22.113 7.461 20.727 5.848Z","key":"0"}),
    createElement('path', {"d":"M12.012 6.539L10 10L15 11L12 15","key":"1"})
  );
});

HeartBroken.displayName = 'HeartBroken';

module.exports = HeartBroken;
module.exports.HeartBroken = HeartBroken;
module.exports.default = HeartBroken;

'use strict';

const { createElement, forwardRef } = require('react');

const UpvoteArrowDown2 = forwardRef(function UpvoteArrowDown2(
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
    createElement('polygon', {"points":"17.016630450972116 7.000000000480213 12.016630450972116 2.000000000480213 7.016630450972116 7.000000000480213 10.016630450972116 7.000000000480213 10.016630450972116 10.000000000480213 14.016630450972116 10.000000000480213 14.016630450972116 7.000000000480213 17.016630450972116 7.000000000480213","key":"0"}),
    createElement('polygon', {"points":"7.016630450972116 17.000000000480213 12.016630450972116 22.000000000480213 17.016630450972116 17.000000000480213 14.016630450972116 17.000000000480213 14.016630450972116 14.000000000480213 10.016630450972116 14.000000000480213 10.016630450972116 17.000000000480213 7.016630450972116 17.000000000480213","key":"1"})
  );
});

UpvoteArrowDown2.displayName = 'UpvoteArrowDown2';

module.exports = UpvoteArrowDown2;
module.exports.UpvoteArrowDown2 = UpvoteArrowDown2;
module.exports.default = UpvoteArrowDown2;

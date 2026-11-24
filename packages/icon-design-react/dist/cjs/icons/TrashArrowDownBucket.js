'use strict';

const { createElement, forwardRef } = require('react');

const TrashArrowDownBucket = forwardRef(function TrashArrowDownBucket(
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
    createElement('path', {"d":"M21 8L3 8C2.449 8 2 7.551 2 7L2 4C2 3.449 2.449 3 3 3L21 3C21.551 3 22 3.449 22 4L22 7C22 7.551 21.551 8 21 8Z","key":"0"}),
    createElement('path', {"d":"M20 8L18.262 19.305C18.109 20.281 17.27 21 16.285 21L7.715 21C6.73 21 5.891 20.281 5.738 19.305L4 8","key":"1"}),
    createElement('path', {"d":"M12 17L12 12","key":"2"}),
    createElement('path', {"d":"M10 15L12 17L14 15","key":"3"})
  );
});

TrashArrowDownBucket.displayName = 'TrashArrowDownBucket';

module.exports = TrashArrowDownBucket;
module.exports.TrashArrowDownBucket = TrashArrowDownBucket;
module.exports.default = TrashArrowDownBucket;

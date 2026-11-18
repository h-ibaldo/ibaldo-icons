'use strict';

const { createElement, forwardRef } = require('react');

const BorderInner = forwardRef(function BorderInner(
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
    createElement('path', {"d":"M2 2L2 2","key":"0"}),
    createElement('path', {"d":"M2 7L2 7","key":"1"}),
    createElement('path', {"d":"M22 12L2 12","key":"2"}),
    createElement('path', {"d":"M12 22L12 2","key":"3"}),
    createElement('path', {"d":"M2 17L2 17","key":"4"}),
    createElement('path', {"d":"M22 2L22 2","key":"5"}),
    createElement('path', {"d":"M17 2L17 2","key":"6"}),
    createElement('path', {"d":"M7 2L7 2","key":"7"}),
    createElement('path', {"d":"M2 22L2 22","key":"8"}),
    createElement('path', {"d":"M22 22L22 22","key":"9"}),
    createElement('path', {"d":"M17 22L17 22","key":"10"}),
    createElement('path', {"d":"M7 22L7 22","key":"11"}),
    createElement('path', {"d":"M22 7L22 7","key":"12"}),
    createElement('path', {"d":"M22 17L22 17","key":"13"})
  );
});

BorderInner.displayName = 'BorderInner';

module.exports = BorderInner;
module.exports.BorderInner = BorderInner;
module.exports.default = BorderInner;

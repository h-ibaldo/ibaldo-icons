'use strict';

const { createElement, forwardRef } = require('react');

const BroomSparkles = forwardRef(function BroomSparkles(
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
    createElement('path', {"d":"M9 22L2 15L7.977 11.266C9.16 10.523 10.699 10.699 11.688 11.688L12.313 12.313C13.301 13.301 13.477 14.84 12.734 16.023Z","key":"0"}),
    createElement('path', {"d":"M11.93 17.313L6.688 12.07","key":"1"}),
    createElement('path', {"d":"M12 12L22 2","key":"2"}),
    createElement('path', {"d":"M5.5 3L5.5 8","key":"3"}),
    createElement('path', {"d":"M8 5.5L3 5.5","key":"4"}),
    createElement('path', {"d":"M20.5 13L20.5 16","key":"5"}),
    createElement('path', {"d":"M22 14.5L19 14.5","key":"6"}),
    createElement('path', {"d":"M16.5 19L16.5 22","key":"7"}),
    createElement('path', {"d":"M18 20.5L15 20.5","key":"8"})
  );
});

BroomSparkles.displayName = 'BroomSparkles';

module.exports = BroomSparkles;
module.exports.BroomSparkles = BroomSparkles;
module.exports.default = BroomSparkles;

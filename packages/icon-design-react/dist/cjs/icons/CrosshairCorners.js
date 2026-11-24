'use strict';

const { createElement, forwardRef } = require('react');

const CrosshairCorners = forwardRef(function CrosshairCorners(
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
    createElement('path', {"d":"M12 2L12 9","key":"0"}),
    createElement('path', {"d":"M12 15L12 22","key":"1"}),
    createElement('path', {"d":"M22 12L15 12","key":"2"}),
    createElement('path', {"d":"M9 12L2 12","key":"3"}),
    createElement('path', {"d":"M12 9L15 12L12 15L9 12Z","key":"4"}),
    createElement('path', {"d":"M16 5L19 5L19 8","key":"5"}),
    createElement('path', {"d":"M8 19L5 19L5 16","key":"6"}),
    createElement('path', {"d":"M5 8L5 5L8 5","key":"7"}),
    createElement('path', {"d":"M19 16L19 19L16 19","key":"8"})
  );
});

CrosshairCorners.displayName = 'CrosshairCorners';

module.exports = CrosshairCorners;
module.exports.CrosshairCorners = CrosshairCorners;
module.exports.default = CrosshairCorners;

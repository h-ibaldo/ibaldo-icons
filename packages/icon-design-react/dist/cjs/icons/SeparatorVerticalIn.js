'use strict';

const { createElement, forwardRef } = require('react');

const SeparatorVerticalIn = forwardRef(function SeparatorVerticalIn(
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
    createElement('path', {"d":"M12 2L12 22","key":"0"}),
    createElement('path', {"d":"M2 17.637L7 12.316L2 7","key":"1"}),
    createElement('path', {"d":"M22 7L17.141 12.316L22 17.637","key":"2"})
  );
});

SeparatorVerticalIn.displayName = 'SeparatorVerticalIn';

module.exports = SeparatorVerticalIn;
module.exports.SeparatorVerticalIn = SeparatorVerticalIn;
module.exports.default = SeparatorVerticalIn;

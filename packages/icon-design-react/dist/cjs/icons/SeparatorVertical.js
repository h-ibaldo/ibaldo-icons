'use strict';

const { createElement, forwardRef } = require('react');

const SeparatorVertical = forwardRef(function SeparatorVertical(
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
    createElement('path', {"d":"M12 22L12 2","key":"0"}),
    createElement('path', {"d":"M17 17L22 11.684L17 6.363","key":"1"}),
    createElement('path', {"d":"M6.859 6.363L2 11.684L6.859 17","key":"2"})
  );
});

SeparatorVertical.displayName = 'SeparatorVertical';

module.exports = SeparatorVertical;
module.exports.SeparatorVertical = SeparatorVertical;
module.exports.default = SeparatorVertical;

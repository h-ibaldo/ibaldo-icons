'use strict';

const { createElement, forwardRef } = require('react');

const Signature = forwardRef(function Signature(
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
    createElement('path', {"d":"M4 14C9 11 10 8 10 6C10 2.91 6 0 6 4C6 8 9 10 9 13C9 15 9 18 6 21","key":"0"}),
    createElement('path', {"d":"M12 13C12.699 11.664 13.797 11.043 16 13C18.203 14.957 20.313 13.648 21 11","key":"1"}),
    createElement('path', {"d":"M2 18L22.023 18","key":"2"})
  );
});

Signature.displayName = 'Signature';

module.exports = Signature;
module.exports.Signature = Signature;
module.exports.default = Signature;

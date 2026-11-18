'use strict';

const { createElement, forwardRef } = require('react');

const Text3DHexagon = forwardRef(function Text3DHexagon(
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
    createElement('path', {"d":"M2 16.645L2 7.355C2 6.535 2.496 5.801 3.258 5.496L11.258 2.297C11.734 2.105 12.266 2.105 12.742 2.297L20.742 5.496C21.504 5.801 22 6.535 22 7.355L22 16.645C22 17.465 21.504 18.199 20.742 18.504L12.742 21.703C12.266 21.895 11.734 21.895 11.258 21.703L3.258 18.504C2.496 18.199 2 17.465 2 16.645Z","key":"0"}),
    createElement('path', {"d":"M6 9C6 9 7 8 8 8C9.105 8 10 8.895 10 10C10 11.105 9.105 12 8 12","key":"1"}),
    createElement('path', {"d":"M6 15C6 15 6.895 16 8 16C9.105 16 10 15.105 10 14C10 12.895 9.105 12 8 12","key":"2"}),
    createElement('path', {"d":"M15 16L14 16L14 8L15 8C16.656 8 18 9.344 18 11L18 13C18 14.656 16.656 16 15 16Z","key":"3"})
  );
});

Text3DHexagon.displayName = 'Text3DHexagon';

module.exports = Text3DHexagon;
module.exports.Text3DHexagon = Text3DHexagon;
module.exports.default = Text3DHexagon;

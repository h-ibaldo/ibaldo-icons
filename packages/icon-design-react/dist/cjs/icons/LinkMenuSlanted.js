'use strict';

const { createElement, forwardRef } = require('react');

const LinkMenuSlanted = forwardRef(function LinkMenuSlanted(
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
    createElement('path', {"d":"M11 19.004L9.242 20.762C7.586 22.414 4.902 22.414 3.246 20.762L3.242 20.758C1.586 19.102 1.586 16.414 3.242 14.762L8.004 10C9.656 8.344 12.344 8.344 13.996 10L14.004 10.004","key":"0"}),
    createElement('path', {"d":"M13 5.004L14.758 3.242C16.414 1.59 19.098 1.59 20.754 3.242L20.758 3.246C22.414 4.902 22.414 7.59 20.758 9.242L15.996 14.004C14.344 15.66 11.656 15.66 10.004 14.004L9.996 14","key":"1"}),
    createElement('path', {"d":"M2 2L8 2","key":"2"}),
    createElement('path', {"d":"M2 5L8 5","key":"3"}),
    createElement('path', {"d":"M2 8L5 8","key":"4"})
  );
});

LinkMenuSlanted.displayName = 'LinkMenuSlanted';

module.exports = LinkMenuSlanted;
module.exports.LinkMenuSlanted = LinkMenuSlanted;
module.exports.default = LinkMenuSlanted;

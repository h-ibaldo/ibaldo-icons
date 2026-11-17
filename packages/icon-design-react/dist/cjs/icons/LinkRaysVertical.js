'use strict';

const { createElement, forwardRef } = require('react');

const LinkRaysVertical = forwardRef(function LinkRaysVertical(
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
    createElement('path', {"d":"M12 14C10.344 14 9 12.656 9 11L9 6C9 4.344 10.344 3 12 3C13.656 3 15 4.344 15 6L15 8","key":"0"}),
    createElement('path', {"d":"M12 10C13.656 10 15 12.344 15 14L15 18C15 19.656 13.656 21 12 21C10.344 21 9 19.656 9 18L9 16","key":"1"}),
    createElement('path', {"d":"M5 10L2 9","key":"2"}),
    createElement('path', {"d":"M5 14L2 15","key":"3"}),
    createElement('path', {"d":"M19 10L22 9","key":"4"}),
    createElement('path', {"d":"M19 14L22 15","key":"5"})
  );
});

LinkRaysVertical.displayName = 'LinkRaysVertical';

module.exports = LinkRaysVertical;
module.exports.LinkRaysVertical = LinkRaysVertical;
module.exports.default = LinkRaysVertical;

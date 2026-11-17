'use strict';

const { createElement, forwardRef } = require('react');

const LinkBrokenDoubleSlanted = forwardRef(function LinkBrokenDoubleSlanted(
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
    createElement('path', {"d":"M12 6L14.762 3.242C16.414 1.59 19.102 1.59 20.758 3.242L20.762 3.246C22.414 4.902 22.414 7.59 20.762 9.242L18 12","key":"0"}),
    createElement('path', {"d":"M12 18L9.242 20.762C7.59 22.414 4.902 22.414 3.246 20.762L3.242 20.758C1.59 19.102 1.59 16.414 3.242 14.762L6 12","key":"1"}),
    createElement('path', {"d":"M5 8L2 7","key":"2"}),
    createElement('path', {"d":"M8 5L7 2","key":"3"}),
    createElement('path', {"d":"M19 16L22 17","key":"4"}),
    createElement('path', {"d":"M16 19L17 22","key":"5"})
  );
});

LinkBrokenDoubleSlanted.displayName = 'LinkBrokenDoubleSlanted';

module.exports = LinkBrokenDoubleSlanted;
module.exports.LinkBrokenDoubleSlanted = LinkBrokenDoubleSlanted;
module.exports.default = LinkBrokenDoubleSlanted;

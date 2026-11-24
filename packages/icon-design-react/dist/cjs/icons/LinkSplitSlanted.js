'use strict';

const { createElement, forwardRef } = require('react');

const LinkSplitSlanted = forwardRef(function LinkSplitSlanted(
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
    createElement('path', {"d":"M12 5L13.5 3.5C15.434 1.566 18.566 1.566 20.5 3.5C22.434 5.434 22.434 8.566 20.5 10.5L19 12","key":"0"}),
    createElement('path', {"d":"M12 19L10.5 20.5C8.566 22.434 5.434 22.434 3.5 20.5C1.566 18.566 1.566 15.434 3.5 13.5L5 12","key":"1"}),
    createElement('path', {"d":"M5 5L9 9","key":"2"}),
    createElement('path', {"d":"M15 15L19 19","key":"3"})
  );
});

LinkSplitSlanted.displayName = 'LinkSplitSlanted';

module.exports = LinkSplitSlanted;
module.exports.LinkSplitSlanted = LinkSplitSlanted;
module.exports.default = LinkSplitSlanted;

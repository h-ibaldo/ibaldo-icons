'use strict';

const { createElement, forwardRef } = require('react');

const LinkPlusCircleSlanted = forwardRef(function LinkPlusCircleSlanted(
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
    createElement('path', {"d":"M12 17C12 14.238 14.238 12 17 12C19.762 12 22 14.238 22 17C22 19.762 19.762 22 17 22C14.238 22 12 19.762 12 17Z","key":"0"}),
    createElement('path', {"d":"M17 15L17 19","key":"1"}),
    createElement('path', {"d":"M19 17L15 17","key":"2"}),
    createElement('path', {"d":"M8.199 10.27C9.176 11.246 10.758 11.246 11.734 10.27L15.27 6.734C16.242 5.758 16.242 4.172 15.27 3.199L14.801 2.73C13.824 1.754 12.242 1.754 11.266 2.734L9.5 4.5","key":"3"}),
    createElement('path', {"d":"M9.766 7.73C8.789 6.754 7.207 6.754 6.23 7.73L2.695 11.266C1.723 12.242 1.723 13.828 2.695 14.801L3.164 15.27C4.141 16.246 5.723 16.246 6.699 15.266L8.465 13.5","key":"4"})
  );
});

LinkPlusCircleSlanted.displayName = 'LinkPlusCircleSlanted';

module.exports = LinkPlusCircleSlanted;
module.exports.LinkPlusCircleSlanted = LinkPlusCircleSlanted;
module.exports.default = LinkPlusCircleSlanted;

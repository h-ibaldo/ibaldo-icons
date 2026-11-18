'use strict';

const { createElement, forwardRef } = require('react');

const LinkXCircleBar = forwardRef(function LinkXCircleBar(
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
    createElement('path', {"d":"M13.828 8.172L15.172 6.828C16.277 5.723 16.277 3.934 15.172 2.828C14.066 1.723 12.277 1.723 11.172 2.828L9.828 4.172C8.723 5.277 8.723 7.066 9.828 8.172C10.934 9.277 12.723 9.277 13.828 8.172Z","key":"0"}),
    createElement('path', {"d":"M6.828 15.172L8.172 13.828C9.277 12.723 9.277 10.934 8.172 9.828C7.066 8.723 5.277 8.723 4.172 9.828L2.828 11.172C1.723 12.277 1.723 14.066 2.828 15.172C3.934 16.277 5.723 16.277 6.828 15.172Z","key":"1"}),
    createElement('path', {"d":"M6 12L12 6","key":"2"}),
    createElement('path', {"d":"M22 16.5C22 19.535 19.539 22 16.5 22C13.461 22 11 19.535 11 16.5C11 13.465 13.461 11 16.5 11C19.539 11 22 13.465 22 16.5Z","key":"3"}),
    createElement('path', {"d":"M18 15L15 18","key":"4"}),
    createElement('path', {"d":"M15 15L18 18","key":"5"})
  );
});

LinkXCircleBar.displayName = 'LinkXCircleBar';

module.exports = LinkXCircleBar;
module.exports.LinkXCircleBar = LinkXCircleBar;
module.exports.default = LinkXCircleBar;

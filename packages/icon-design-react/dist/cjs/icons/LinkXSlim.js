'use strict';

const { createElement, forwardRef } = require('react');

const LinkXSlim = forwardRef(function LinkXSlim(
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
    createElement('path', {"d":"M11.027 8.977L10.027 9.977C8.66 11.344 8.66 13.559 10.027 14.926L10.074 14.977C11.441 16.344 13.66 16.344 15.027 14.977L21 9C22.367 7.633 22.367 5.418 21 4.051L20.949 4C19.762 2.812 17.938 2.66 16.586 3.535","key":"0"}),
    createElement('path', {"d":"M13 12.004L14 11.004C15.367 9.637 15.367 7.418 14 6.051L13.949 6.004C12.582 4.637 10.367 4.637 9 6.004L3.023 11.977C1.656 13.344 1.656 15.559 3.023 16.926L3.074 16.977C4.262 18.164 6.086 18.316 7.441 17.441","key":"1"}),
    createElement('path', {"d":"M18 22L22 18","key":"2"}),
    createElement('path', {"d":"M18 18L22 22","key":"3"})
  );
});

LinkXSlim.displayName = 'LinkXSlim';

module.exports = LinkXSlim;
module.exports.LinkXSlim = LinkXSlim;
module.exports.default = LinkXSlim;

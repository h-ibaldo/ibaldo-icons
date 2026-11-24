'use strict';

const { createElement, forwardRef } = require('react');

const LinkSlim = forwardRef(function LinkSlim(
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
    createElement('path', {"d":"M11.027 9.996L10.027 10.996C8.66 12.363 8.66 14.582 10.027 15.949L10.074 15.996C11.441 17.363 13.66 17.363 15.027 15.996L21 10.023C22.367 8.656 22.367 6.441 21 5.074L20.949 5.023C19.762 3.836 17.938 3.684 16.586 4.559","key":"0"}),
    createElement('path', {"d":"M13 13.023L14 12.023C15.367 10.656 15.367 8.441 14 7.074L13.949 7.023C12.582 5.656 10.367 5.656 9 7.023L3.023 13C1.656 14.367 1.656 16.582 3.023 17.949L3.074 18C4.262 19.188 6.086 19.34 7.441 18.465","key":"1"})
  );
});

LinkSlim.displayName = 'LinkSlim';

module.exports = LinkSlim;
module.exports.LinkSlim = LinkSlim;
module.exports.default = LinkSlim;

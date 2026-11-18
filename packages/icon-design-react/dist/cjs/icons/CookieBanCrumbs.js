'use strict';

const { createElement, forwardRef } = require('react');

const CookieBanCrumbs = forwardRef(function CookieBanCrumbs(
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
    createElement('path', {"d":"M10 18C10 15.789 8.211 14 6 14C3.789 14 2 15.789 2 18C2 20.211 3.789 22 6 22C8.211 22 10 20.211 10 18Z","key":"0"}),
    createElement('path', {"d":"M8.828 15.172L3.172 20.828","key":"1"}),
    createElement('path', {"d":"M13 21.949C17.754 21.477 21.527 17.672 21.953 12.902C21.645 12.965 21.328 13 21 13C18.238 13 16 10.762 16 8C13.238 8 11 5.762 11 3C11 2.672 11.035 2.355 11.098 2.047C6.328 2.473 2.523 6.246 2.051 11","key":"2"}),
    createElement('path', {"d":"M8 9C8 9.551 7.555 10 7 10C6.445 10 6 9.551 6 9C6 8.449 6.445 8 7 8C7.555 8 8 8.449 8 9Z","key":"3"}),
    createElement('path', {"d":"M22 6C22 6.551 21.555 7 21 7C20.445 7 20 6.551 20 6C20 5.449 20.445 5 21 5C21.555 5 22 5.449 22 6Z","key":"4"}),
    createElement('path', {"d":"M11 12L11 12","key":"5"}),
    createElement('path', {"d":"M16 15L16 15","key":"6"}),
    createElement('path', {"d":"M14 18L14 18","key":"7"}),
    createElement('path', {"d":"M17 2L17 2","key":"8"})
  );
});

CookieBanCrumbs.displayName = 'CookieBanCrumbs';

module.exports = CookieBanCrumbs;
module.exports.CookieBanCrumbs = CookieBanCrumbs;
module.exports.default = CookieBanCrumbs;

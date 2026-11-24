'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CookieCrumbs = forwardRef(function CookieCrumbs(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, ...props },
  ref
) {
  return createElement(
    Svg,
    {
      ref,
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props
    },
    createElement(Path, {"d":"M20.5 14C18.719 14 17.266 12.664 17.047 10.945C16.867 10.973 16.688 11 16.5 11C14.566 11 13 9.434 13 7.5C13 7.313 13.027 7.133 13.055 6.953C11.336 6.734 10 5.281 10 3.5C10 3.023 10.098 2.574 10.27 2.16C5.57 2.98 2 7.07 2 12C2 17.523 6.477 22 12 22C16.93 22 21.02 18.43 21.84 13.73C21.426 13.902 20.977 14 20.5 14Z","key":"0"}),
    createElement(Path, {"d":"M8 9C8 9.551 7.555 10 7 10C6.445 10 6 9.551 6 9C6 8.449 6.445 8 7 8C7.555 8 8 8.449 8 9Z","key":"1"}),
    createElement(Path, {"d":"M12 17C12 17.551 11.555 18 11 18C10.445 18 10 17.551 10 17C10 16.449 10.445 16 11 16C11.555 16 12 16.449 12 17Z","key":"2"}),
    createElement(Path, {"d":"M21 4C21 4.551 20.555 5 20 5C19.445 5 19 4.551 19 4C19 3.449 19.445 3 20 3C20.555 3 21 3.449 21 4Z","key":"3"}),
    createElement(Path, {"d":"M11 12L11 12","key":"4"}),
    createElement(Path, {"d":"M20 9L20 9","key":"5"}),
    createElement(Path, {"d":"M7 14L7 14","key":"6"}),
    createElement(Path, {"d":"M16 16L16 16","key":"7"}),
    createElement(Path, {"d":"M15 2L15 2","key":"8"})
  );
});

CookieCrumbs.displayName = 'CookieCrumbs';

module.exports = CookieCrumbs;
module.exports.CookieCrumbs = CookieCrumbs;
module.exports.default = CookieCrumbs;

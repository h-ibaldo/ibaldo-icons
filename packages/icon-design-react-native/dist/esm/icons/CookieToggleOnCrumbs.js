import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const CookieToggleOnCrumbs = forwardRef(function CookieToggleOnCrumbs(
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
    createElement(Path, {"d":"M3 22L9 22C10.656 22 12 20.656 12 19C12 17.344 10.656 16 9 16L3 16C1.344 16 0 17.344 0 19C0 20.656 1.344 22 3 22Z","key":"0"}),
    createElement(Path, {"d":"M9 16C7.344 16 6 17.344 6 19C6 20.656 7.344 22 9 22","key":"1"}),
    createElement(Path, {"d":"M16 21.148C19.266 19.719 21.621 16.609 21.953 12.902C21.645 12.965 21.328 13 21 13C18.238 13 16 10.762 16 8C13.238 8 11 5.762 11 3C11 2.672 11.035 2.355 11.098 2.047C5.996 2.504 2 6.781 2 12","key":"2"}),
    createElement(Path, {"d":"M8 9C8 9.551 7.555 10 7 10C6.445 10 6 9.551 6 9C6 8.449 6.445 8 7 8C7.555 8 8 8.449 8 9Z","key":"3"}),
    createElement(Path, {"d":"M22 6C22 6.551 21.555 7 21 7C20.445 7 20 6.551 20 6C20 5.449 20.445 5 21 5C21.555 5 22 5.449 22 6Z","key":"4"}),
    createElement(Path, {"d":"M11 12L11 12","key":"5"}),
    createElement(Path, {"d":"M16 15L16 15","key":"6"}),
    createElement(Path, {"d":"M17 2L17 2","key":"7"})
  );
});

CookieToggleOnCrumbs.displayName = 'CookieToggleOnCrumbs';

export default CookieToggleOnCrumbs;
export { CookieToggleOnCrumbs };

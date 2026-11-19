import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const CookieSettingsCrumbs = forwardRef(function CookieSettingsCrumbs(
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
    createElement(Path, {"d":"M10.25 17C10.25 18.797 8.797 20.25 7 20.25C5.203 20.25 3.75 18.797 3.75 17C3.75 15.203 5.203 13.75 7 13.75C8.797 13.75 10.25 15.203 10.25 17Z","key":"0"}),
    createElement(Path, {"d":"M7 22L7 21","key":"1"}),
    createElement(Path, {"d":"M7 13.5L7 12","key":"2"}),
    createElement(Path, {"d":"M11.332 19.5L10.031 18.75","key":"3"}),
    createElement(Path, {"d":"M3.969 15.25L2.668 14.5","key":"4"}),
    createElement(Path, {"d":"M11.332 14.5L10.031 15.25","key":"5"}),
    createElement(Path, {"d":"M3.969 18.75L2.668 19.5","key":"6"}),
    createElement(Path, {"d":"M9 8C9 8.551 8.551 9 8 9C7.449 9 7 8.551 7 8C7 7.449 7.449 7 8 7C8.551 7 9 7.449 9 8Z","key":"7"}),
    createElement(Path, {"d":"M22 6C22 6.551 21.551 7 21 7C20.449 7 20 6.551 20 6C20 5.449 20.449 5 21 5C21.551 5 22 5.449 22 6Z","key":"8"}),
    createElement(Path, {"d":"M12 11L12 11","key":"9"}),
    createElement(Path, {"d":"M16 16L16 16","key":"10"}),
    createElement(Path, {"d":"M17 2L17 2","key":"11"}),
    createElement(Path, {"d":"M16 21.148C19.266 19.719 21.621 16.609 21.953 12.902C21.645 12.965 21.328 13 21 13C18.238 13 16 10.762 16 8C13.238 8 11 5.762 11 3C11 2.672 11.035 2.355 11.098 2.047C6.328 2.473 2.523 6.246 2.051 11","key":"12"})
  );
});

CookieSettingsCrumbs.displayName = 'CookieSettingsCrumbs';

export default CookieSettingsCrumbs;
export { CookieSettingsCrumbs };

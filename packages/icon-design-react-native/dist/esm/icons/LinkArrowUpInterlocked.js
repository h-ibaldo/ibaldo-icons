import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const LinkArrowUpInterlocked = forwardRef(function LinkArrowUpInterlocked(
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
    createElement(Path, {"d":"M13 12.898L13.414 13.313C14.977 14.875 14.977 17.41 13.414 18.969L13.07 19.313C11.508 20.875 8.977 20.875 7.414 19.313L3.07 14.969C1.508 13.41 1.508 10.875 3.07 9.313L3.414 8.969C4.781 7.605 6.891 7.434 8.441 8.457","key":"0"}),
    createElement(Path, {"d":"M11 16.898L10.586 16.484C9.023 14.922 9.023 12.391 10.586 10.828L10.93 10.484C12.492 8.922 15.023 8.922 16.586 10.484L20.93 14.828C22.492 16.391 22.492 18.922 20.93 20.484L20.586 20.828C19.219 22.195 17.109 22.367 15.559 21.34","key":"1"}),
    createElement(Path, {"d":"M22.004 4L20.004 2L18.004 4","key":"2"}),
    createElement(Path, {"d":"M20.004 8L20.004 2","key":"3"})
  );
});

LinkArrowUpInterlocked.displayName = 'LinkArrowUpInterlocked';

export default LinkArrowUpInterlocked;
export { LinkArrowUpInterlocked };

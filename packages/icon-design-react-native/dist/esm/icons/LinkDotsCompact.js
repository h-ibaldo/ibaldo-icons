import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const LinkDotsCompact = forwardRef(function LinkDotsCompact(
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
    createElement(Path, {"d":"M9 17L17 9","key":"0"}),
    createElement(Path, {"d":"M11.051 7.949L13.551 5.449C15.484 3.516 18.617 3.516 20.551 5.449C22.484 7.383 22.484 10.516 20.551 12.449L18.051 14.949","key":"1"}),
    createElement(Path, {"d":"M14.949 18.051L12.449 20.551C10.516 22.484 7.383 22.484 5.449 20.551C3.516 18.617 3.516 15.484 5.449 13.551L7.949 11.051","key":"2"}),
    createElement(Path, {"d":"M3 4L3 4","key":"3"}),
    createElement(Path, {"d":"M7 4L7 4","key":"4"})
  );
});

LinkDotsCompact.displayName = 'LinkDotsCompact';

export default LinkDotsCompact;
export { LinkDotsCompact };

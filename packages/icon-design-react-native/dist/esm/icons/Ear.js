import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const Ear = forwardRef(function Ear(
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
    createElement(Path, {"d":"M6 8.5C6 4.91 8.91 2 12.5 2L12.5 2C16.09 2 19 4.91 19 8.5L19 8.5C19 10.101 18.364 11.636 17.232 12.768L15.414 14.586C14.509 15.491 14 16.719 14 18L14 18C14 20.209 12.209 22 10 22L10 22C7.791 22 6 20.209 6 18","key":"0"}),
    createElement(Path, {"d":"M15 9L15 8.5C15 7.119 13.881 6 12.5 6L12.5 6C11.119 6 10 7.119 10 8.5L10 12","key":"1"}),
    createElement(Path, {"d":"M9 12L9.5 12C10.328 12 11 12.672 11 13.5L11 13.5C11 13.825 10.895 14.14 10.7 14.4L9.5 16","key":"2"})
  );
});

Ear.displayName = 'Ear';

export default Ear;
export { Ear };

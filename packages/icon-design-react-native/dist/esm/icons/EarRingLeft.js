import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const EarRingLeft = forwardRef(function EarRingLeft(
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
    createElement(Path, {"d":"M18 9L18 8.5C18 7.119 16.881 6 15.5 6L15.5 6C14.119 6 13 7.119 13 8.5L13 12","key":"0"}),
    createElement(Path, {"d":"M9.141 19C9.588 20.722 11.138 22 13 22C15.209 22 17 20.209 17 18C17 16.719 17.509 15.491 18.414 14.586L20.232 12.768C21.364 11.636 22 10.101 22 8.5C22 4.91 19.09 2 15.5 2C12.427 2 9.859 4.135 9.181 7","key":"1"}),
    createElement(Path, {"d":"M12 12L12.5 12C13.328 12 14 12.672 14 13.5L14 13.5C14 13.825 13.895 14.14 13.7 14.4L12.5 16","key":"2"}),
    createElement(Path, {"d":"M2 15.221C2.61 14.672 3 13.885 3 13C3 12.115 2.61 11.328 2 10.779","key":"3"}),
    createElement(Path, {"d":"M4 18.725C5.809 17.461 7 15.375 7 13C7 10.625 5.809 8.539 4 7.275","key":"4"})
  );
});

EarRingLeft.displayName = 'EarRingLeft';

export default EarRingLeft;
export { EarRingLeft };

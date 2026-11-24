import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TargetArrow = forwardRef(function TargetArrow(
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
    createElement(Path, {"d":"M9 12C9 10.344 10.344 9 12 9C13.656 9 15 10.344 15 12C15 13.656 13.656 15 12 15C10.344 15 9 13.656 9 12Z","key":"0"}),
    createElement(Path, {"d":"M12 12L18 6L18 4L20 2L20 4L22 4L20 6L18 6","key":"1"}),
    createElement(Path, {"d":"M17.793 10.43C17.93 10.93 18 11.457 18 12C18 15.313 15.313 18 12 18C8.688 18 6 15.313 6 12C6 8.688 8.688 6 12 6C13.656 6 15.156 6.672 16.242 7.758","key":"2"}),
    createElement(Path, {"d":"M20.52 9.086C20.832 10 21 10.98 21 12C21 16.969 16.969 21 12 21C7.031 21 3 16.969 3 12C3 7.031 7.031 3 12 3C14.305 3 16.406 3.867 18 5.293","key":"3"})
  );
});

TargetArrow.displayName = 'TargetArrow';

export default TargetArrow;
export { TargetArrow };

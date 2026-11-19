import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const PointerUpRightCircle = forwardRef(function PointerUpRightCircle(
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
    createElement(Path, {"d":"M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12Z","key":"0"}),
    createElement(Path, {"d":"M15.969 8.789L13.367 16.59C13.207 17.074 12.547 17.148 12.285 16.711L10.41 13.59L7.289 11.715C6.852 11.449 6.922 10.793 7.41 10.633L15.211 8.031C15.68 7.875 16.125 8.32 15.969 8.789Z","key":"1"})
  );
});

PointerUpRightCircle.displayName = 'PointerUpRightCircle';

export default PointerUpRightCircle;
export { PointerUpRightCircle };

import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowDownRightCircleSegmented = forwardRef(function ArrowDownRightCircleSegmented(
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
    createElement(Path, {"d":"M15 10L15 15L10 15","key":"0"}),
    createElement(Path, {"d":"M9 9L15 15","key":"1"}),
    createElement(Path, {"d":"M2.004 11.906C2.004 11.938 2 11.969 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C11.969 2 11.938 2.004 11.902 2.004","key":"2"}),
    createElement(Path, {"d":"M8.352 2.695C5.766 3.711 3.711 5.766 2.695 8.352","key":"3"})
  );
});

ArrowDownRightCircleSegmented.displayName = 'ArrowDownRightCircleSegmented';

export default ArrowDownRightCircleSegmented;
export { ArrowDownRightCircleSegmented };

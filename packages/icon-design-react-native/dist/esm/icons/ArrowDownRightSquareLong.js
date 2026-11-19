import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowDownRightSquareLong = forwardRef(function ArrowDownRightSquareLong(
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
    createElement(Path, {"d":"M20 2L4 2C2.895 2 2 2.895 2 4L2 20C2 21.105 2.895 22 4 22L20 22C21.105 22 22 21.105 22 20L22 4C22 2.895 21.105 2 20 2Z","key":"0"}),
    createElement(Path, {"d":"M10 17L17 17L17 10","key":"1"}),
    createElement(Path, {"d":"M7 7L17 17","key":"2"})
  );
});

ArrowDownRightSquareLong.displayName = 'ArrowDownRightSquareLong';

export default ArrowDownRightSquareLong;
export { ArrowDownRightSquareLong };

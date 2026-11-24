import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TriangleDownRightCircle = forwardRef(function TriangleDownRightCircle(
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
    createElement(Path, {"d":"M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z","key":"0"}),
    createElement(Path, {"d":"M15.711 11.289L11.289 15.711C10.73 16.27 9.777 15.992 9.605 15.223L8.34 9.535C8.184 8.82 8.82 8.184 9.535 8.34L15.223 9.605C15.992 9.777 16.27 10.73 15.711 11.289Z","key":"1"})
  );
});

TriangleDownRightCircle.displayName = 'TriangleDownRightCircle';

export default TriangleDownRightCircle;
export { TriangleDownRightCircle };

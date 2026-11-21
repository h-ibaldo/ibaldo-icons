import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const Camera = forwardRef(function Camera(
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
    createElement(Path, {"d":"M4 7L7 7L9 3L15 3L17 7L20 7C21.105 7 22 7.895 22 9L22 19C22 20.105 21.105 21 20 21L4 21C2.895 21 2 20.105 2 19L2 9C2 7.895 2.895 7 4 7Z","key":"0"}),
    createElement(Path, {"d":"M7.5 13.5C7.5 11.016 9.516 9 12 9C14.484 9 16.5 11.016 16.5 13.5C16.5 15.984 14.484 18 12 18C9.516 18 7.5 15.984 7.5 13.5Z","key":"1"})
  );
});

Camera.displayName = 'Camera';

export default Camera;
export { Camera };

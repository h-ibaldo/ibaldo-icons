import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const CameraRetro = forwardRef(function CameraRetro(
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
    createElement(Path, {"d":"M20 2C21.105 2 22 3.195 22 4.668L22 19.332C22 20.805 21.105 22 20 22L4 22C2.895 22 2 20.805 2 19.332L2 4.668C2 3.195 2.895 2 4 2Z","key":"0"}),
    createElement(Path, {"d":"M7 12C7 9.238 9.238 7 12 7C14.762 7 17 9.238 17 12C17 14.762 14.762 17 12 17C9.238 17 7 14.762 7 12Z","key":"1"}),
    createElement(Path, {"d":"M2 8L9 8","key":"2"}),
    createElement(Path, {"d":"M15 8L22 8","key":"3"}),
    createElement(Path, {"d":"M18 5L19 5","key":"4"}),
    createElement(Path, {"d":"M6 8L6 2","key":"5"}),
    createElement(Path, {"d":"M9 8L9 2","key":"6"})
  );
});

CameraRetro.displayName = 'CameraRetro';

export default CameraRetro;
export { CameraRetro };

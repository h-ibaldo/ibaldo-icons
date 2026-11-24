import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FileMinusWide = forwardRef(function FileMinusWide(
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
    createElement(Path, {"d":"M22 7L22 20C22 21.105 21.105 22 20 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L16.918 2Z","key":"0"}),
    createElement(Path, {"d":"M22 8L18 8C16.895 8 16 7.105 16 6L16 2","key":"1"}),
    createElement(Path, {"d":"M15 12L9 12","key":"2"})
  );
});

FileMinusWide.displayName = 'FileMinusWide';

export default FileMinusWide;
export { FileMinusWide };

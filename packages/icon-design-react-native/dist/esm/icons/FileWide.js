import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FileWide = forwardRef(function FileWide(
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
    createElement(Path, {"d":"M22 9L22 20C22 21.105 21.105 22 20 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L14.918 2Z","key":"0"}),
    createElement(Path, {"d":"M22 10L16 10C14.895 10 14 9.105 14 8L14 2","key":"1"})
  );
});

FileWide.displayName = 'FileWide';

export default FileWide;
export { FileWide };

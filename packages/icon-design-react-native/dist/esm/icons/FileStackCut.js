import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FileStackCut = forwardRef(function FileStackCut(
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
    createElement(Path, {"d":"M3 7L3 20C3 21.105 3.895 22 5 22L16 22","key":"0"}),
    createElement(Path, {"d":"M9 18L19 18C20.105 18 21 17.105 21 16L21 7.243C21 6.447 20.684 5.684 20.121 5.121L17.879 2.879C17.316 2.316 16.553 2 15.757 2L9 2C7.895 2 7 2.895 7 4L7 16C7 17.105 7.895 18 9 18Z","key":"1"})
  );
});

FileStackCut.displayName = 'FileStackCut';

export default FileStackCut;
export { FileStackCut };

import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FileEditDetailedCut = forwardRef(function FileEditDetailedCut(
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
    createElement(Path, {"d":"M21.707 7.879L19.121 5.293C18.731 4.902 18.098 4.902 17.707 5.293L9 14L9 18L13 18L21.707 9.293C22.098 8.902 22.098 8.269 21.707 7.879Z","key":"0"}),
    createElement(Path, {"d":"M16 2L7.828 2C7.298 2 6.789 2.211 6.414 2.586L2.586 6.414C2.211 6.789 2 7.298 2 7.828L2 20C2 21.105 2.895 22 4 22L16 22C17.105 22 18 21.105 18 20L18 18","key":"1"}),
    createElement(Path, {"d":"M15.5 7.5L19.5 11.5","key":"2"})
  );
});

FileEditDetailedCut.displayName = 'FileEditDetailedCut';

export default FileEditDetailedCut;
export { FileEditDetailedCut };

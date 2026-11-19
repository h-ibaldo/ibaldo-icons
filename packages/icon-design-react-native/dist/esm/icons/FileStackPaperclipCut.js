import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FileStackPaperclipCut = forwardRef(function FileStackPaperclipCut(
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
    createElement(Path, {"d":"M9 22L7 22C6.448 22 6 21.552 6 21L6 10.414C6 10.149 6.105 9.895 6.293 9.707L9.707 6.293C9.895 6.105 10.149 6 10.414 6L18 6C18.552 6 19 6.448 19 7L19 8","key":"0"}),
    createElement(Path, {"d":"M14 2L7.414 2C7.149 2 6.895 2.105 6.707 2.293L2.293 6.707C2.105 6.895 2 7.149 2 7.414L2 18","key":"1"}),
    createElement(Path, {"d":"M22 17L17.828 21.172C16.724 22.276 14.933 22.276 13.828 21.172L13.828 21.172C12.724 20.067 12.724 18.276 13.828 17.172L19.586 11.414C20.138 10.862 21.034 10.862 21.586 11.414L21.586 11.414C22.138 11.966 22.138 12.862 21.586 13.414L17 18","key":"2"})
  );
});

FileStackPaperclipCut.displayName = 'FileStackPaperclipCut';

export default FileStackPaperclipCut;
export { FileStackPaperclipCut };

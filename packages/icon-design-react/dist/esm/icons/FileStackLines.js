import { createElement, forwardRef } from 'react';

const FileStackLines = forwardRef(function FileStackLines(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, className = '', ...props },
  ref
) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: ('icon-design ' + className).trim(),
      ...props
    },
    createElement('path', {"d":"M3 7L3 20C3 21.105 3.895 22 5 22L16 22","key":"0"}),
    createElement('path', {"d":"M21 16L21 7.828C21 7.298 20.789 6.789 20.414 6.414L16.586 2.586C16.211 2.211 15.702 2 15.172 2L9 2C7.895 2 7 2.895 7 4L7 16C7 17.105 7.895 18 9 18L19 18C20.105 18 21 17.105 21 16Z","key":"1"}),
    createElement('path', {"d":"M15 2L15 7C15 7.552 15.448 8 16 8L21 8","key":"2"}),
    createElement('path', {"d":"M11 14L17 14","key":"3"}),
    createElement('path', {"d":"M11 10L13 10","key":"4"})
  );
});

FileStackLines.displayName = 'FileStackLines';

export default FileStackLines;
export { FileStackLines };

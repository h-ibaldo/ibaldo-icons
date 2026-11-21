import { createElement, forwardRef } from 'react';

const FileCheckCornerWide = forwardRef(function FileCheckCornerWide(
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
    createElement('path', {"d":"M2 16L2 4C2 2.895 2.895 2 4 2L14.918 2L22 9L22 20C22 21.105 21.105 22 20 22L11 22","key":"0"}),
    createElement('path', {"d":"M22 10L16 10C14.895 10 14 9.105 14 8L14 2","key":"1"}),
    createElement('path', {"d":"M2 20L4 22L8 18","key":"2"})
  );
});

FileCheckCornerWide.displayName = 'FileCheckCornerWide';

export default FileCheckCornerWide;
export { FileCheckCornerWide };

import { createElement, forwardRef } from 'react';

const FileMinusCornerWide = forwardRef(function FileMinusCornerWide(
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
    createElement('path', {"d":"M2 14L2 4C2 2.895 2.895 2 4 2L14.918 2L22 9L22 20C22 21.105 21.105 22 20 22L12 22","key":"0"}),
    createElement('path', {"d":"M22 10L16 10C14.895 10 14 9.105 14 8L14 2","key":"1"}),
    createElement('path', {"d":"M8 19L2 19","key":"2"})
  );
});

FileMinusCornerWide.displayName = 'FileMinusCornerWide';

export default FileMinusCornerWide;
export { FileMinusCornerWide };

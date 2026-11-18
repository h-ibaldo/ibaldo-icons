import { createElement, forwardRef } from 'react';

const FileLinesEditCut = forwardRef(function FileLinesEditCut(
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
    createElement('path', {"d":"M18 20C18 21.105 17.105 22 16 22L4 22C2.895 22 2 21.105 2 20L2 7.828C2 7.298 2.211 6.789 2.586 6.414L6.414 2.586C6.789 2.211 7.298 2 7.828 2L16 2C17.105 2 18 2.895 18 4L18 4.5","key":"0"}),
    createElement('path', {"d":"M21.707 9.879L20.121 8.293C19.731 7.902 19.098 7.902 18.707 8.293L12 15L12 18L15 18L21.707 11.293C22.098 10.902 22.098 10.269 21.707 9.879Z","key":"1"}),
    createElement('path', {"d":"M7 8L13 8","key":"2"}),
    createElement('path', {"d":"M7 12L9 12","key":"3"}),
    createElement('path', {"d":"M7 16L8 16","key":"4"})
  );
});

FileLinesEditCut.displayName = 'FileLinesEditCut';

export default FileLinesEditCut;
export { FileLinesEditCut };

import { createElement, forwardRef } from 'react';

const FileArrowDownCornerCut = forwardRef(function FileArrowDownCornerCut(
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
    createElement('path', {"d":"M16 19L19 22L22 19","key":"0"}),
    createElement('path', {"d":"M19 16L19 22","key":"1"}),
    createElement('path', {"d":"M19 12L19 7.828C19 7.298 18.789 6.789 18.414 6.414L14.586 2.586C14.211 2.211 13.702 2 13.172 2L5 2C3.895 2 3 2.895 3 4L3 20C3 21.105 3.895 22 5 22L13 22","key":"2"})
  );
});

FileArrowDownCornerCut.displayName = 'FileArrowDownCornerCut';

export default FileArrowDownCornerCut;
export { FileArrowDownCornerCut };

import { createElement, forwardRef } from 'react';

const FileSearchCut = forwardRef(function FileSearchCut(
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
    createElement('path', {"d":"M18 21","key":"0"}),
    createElement('path', {"d":"M20 10L20 7.828C20 7.298 19.789 6.789 19.414 6.414L15.586 2.586C15.211 2.211 14.702 2 14.172 2L6 2C4.895 2 4 2.895 4 4L4 20C4 21.105 4.895 22 6 22L10 22","key":"1"}),
    createElement('path', {"d":"M19 16C19 18.209 17.209 20 15 20C12.791 20 11 18.209 11 16C11 13.791 12.791 12 15 12C17.209 12 19 13.791 19 16Z","key":"2"}),
    createElement('path', {"d":"M18 19L21 22","key":"3"})
  );
});

FileSearchCut.displayName = 'FileSearchCut';

export default FileSearchCut;
export { FileSearchCut };

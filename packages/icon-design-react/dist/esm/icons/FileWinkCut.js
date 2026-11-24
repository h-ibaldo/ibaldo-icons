import { createElement, forwardRef } from 'react';

const FileWinkCut = forwardRef(function FileWinkCut(
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
    createElement('path', {"d":"M9 15C9.776 15.614 10.827 16 12 16C13.173 16 14.224 15.614 15 15","key":"0"}),
    createElement('path', {"d":"M15 11L15 11","key":"1"}),
    createElement('path', {"d":"M10 11L8 11","key":"2"}),
    createElement('path', {"d":"M20 20L20 7.828C20 7.298 19.789 6.789 19.414 6.414L15.586 2.586C15.211 2.211 14.702 2 14.172 2L6 2C4.895 2 4 2.895 4 4L4 20C4 21.105 4.895 22 6 22L18 22C19.105 22 20 21.105 20 20Z","key":"3"})
  );
});

FileWinkCut.displayName = 'FileWinkCut';

export default FileWinkCut;
export { FileWinkCut };

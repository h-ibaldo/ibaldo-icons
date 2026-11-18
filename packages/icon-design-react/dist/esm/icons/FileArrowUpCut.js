import { createElement, forwardRef } from 'react';

const FileArrowUpCut = forwardRef(function FileArrowUpCut(
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
    createElement('path', {"d":"M15 18L12 15L9 18","key":"0"}),
    createElement('path', {"d":"M12 22L12 15","key":"1"}),
    createElement('path', {"d":"M6 22C4.895 22 4 21.105 4 20L4 4C4 2.895 4.895 2 6 2L14.172 2C14.702 2 15.211 2.211 15.586 2.586L19.414 6.414C19.789 6.789 20 7.298 20 7.828L20 20C20 21.105 19.105 22 18 22","key":"2"})
  );
});

FileArrowUpCut.displayName = 'FileArrowUpCut';

export default FileArrowUpCut;
export { FileArrowUpCut };

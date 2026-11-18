import { createElement, forwardRef } from 'react';

const FileCodeRight = forwardRef(function FileCodeRight(
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
    createElement('path', {"d":"M19 12L19 8.828C19 8.297 18.789 7.789 18.414 7.414L13.586 2.586C13.211 2.211 12.703 2 12.172 2L3 2C2.449 2 2 2.449 2 3L2 21C2 21.551 2.449 22 3 22L5 22","key":"0"}),
    createElement('path', {"d":"M12 2L12 8C12 8.551 12.449 9 13 9L19 9","key":"1"}),
    createElement('path', {"d":"M11 16L8 19L11 22","key":"2"}),
    createElement('path', {"d":"M19 16L22 19L19 22","key":"3"}),
    createElement('path', {"d":"M14 22L16 16","key":"4"})
  );
});

FileCodeRight.displayName = 'FileCodeRight';

export default FileCodeRight;
export { FileCodeRight };

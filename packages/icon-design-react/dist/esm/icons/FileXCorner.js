import { createElement, forwardRef } from 'react';

const FileXCorner = forwardRef(function FileXCorner(
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
    createElement('path', {"d":"M21 17L16 22","key":"0"}),
    createElement('path', {"d":"M21 22L16 17","key":"1"}),
    createElement('path', {"d":"M12 22L5 22C3.895 22 3 21.105 3 20L3 4C3 2.895 3.895 2 5 2L13.016 2C13.646 2 14.25 2.25 14.696 2.696L18.304 6.304C18.75 6.75 19 7.354 19 7.984L19 13","key":"2"}),
    createElement('path', {"d":"M13 2L13 7C13 7.552 13.448 8 14 8L19 8","key":"3"})
  );
});

FileXCorner.displayName = 'FileXCorner';

export default FileXCorner;
export { FileXCorner };

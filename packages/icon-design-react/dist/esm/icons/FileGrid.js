import { createElement, forwardRef } from 'react';

const FileGrid = forwardRef(function FileGrid(
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
    createElement('path', {"d":"M19 9L19 7.984C19 7.355 18.75 6.75 18.305 6.305L14.695 2.695C14.25 2.25 13.645 2 13.016 2L5 2C3.895 2 3 2.895 3 4L3 20C3 21.105 3.895 22 5 22L6 22","key":"0"}),
    createElement('path', {"d":"M13 2L13 7C13 7.551 13.449 8 14 8L19 8","key":"1"}),
    createElement('path', {"d":"M9 12L21 12L21 22L9 22Z","key":"2"}),
    createElement('path', {"d":"M9 17L21 17","key":"3"}),
    createElement('path', {"d":"M17 12L17 21.5","key":"4"}),
    createElement('path', {"d":"M13 12L13 21.5","key":"5"})
  );
});

FileGrid.displayName = 'FileGrid';

export default FileGrid;
export { FileGrid };

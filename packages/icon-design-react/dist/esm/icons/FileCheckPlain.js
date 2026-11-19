import { createElement, forwardRef } from 'react';

const FileCheckPlain = forwardRef(function FileCheckPlain(
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
    createElement('path', {"d":"M9.327 11.621L11.327 13.621L15.327 9.621","key":"0"}),
    createElement('path', {"d":"M18 22L6 22C4.895 22 4 21.105 4 20L4 4C4 2.895 4.895 2 6 2L18 2C19.105 2 20 2.895 20 4L20 20C20 21.105 19.105 22 18 22Z","key":"1"})
  );
});

FileCheckPlain.displayName = 'FileCheckPlain';

export default FileCheckPlain;
export { FileCheckPlain };

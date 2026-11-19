import { createElement, forwardRef } from 'react';

const FileCheckCircle = forwardRef(function FileCheckCircle(
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
    createElement('path', {"d":"M14.5 17L15.5 18L17.5 16","key":"0"}),
    createElement('path', {"d":"M11 17C11 14.239 13.239 12 16 12C18.761 12 21 14.239 21 17C21 19.761 18.761 22 16 22C13.239 22 11 19.761 11 17Z","key":"1"}),
    createElement('path', {"d":"M19 9L19 4C19 2.895 18.105 2 17 2L8.984 2C8.354 2 7.75 2.25 7.304 2.696L3.696 6.304C3.25 6.75 3 7.354 3 7.984L3 20C3 21.105 3.895 22 5 22L9 22","key":"2"}),
    createElement('path', {"d":"M9 2L9 7C9 7.552 8.552 8 8 8L3 8","key":"3"})
  );
});

FileCheckCircle.displayName = 'FileCheckCircle';

export default FileCheckCircle;
export { FileCheckCircle };

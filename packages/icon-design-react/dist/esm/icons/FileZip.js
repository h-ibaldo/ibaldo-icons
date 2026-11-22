import { createElement, forwardRef } from 'react';

const FileZip = forwardRef(function FileZip(
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
    createElement('path', {"d":"M20 20L20 7.828C20 7.297 19.789 6.789 19.414 6.414L15.586 2.586C15.211 2.211 14.703 2 14.172 2L6 2C4.895 2 4 2.895 4 4L4 20C4 21.105 4.895 22 6 22L18 22C19.105 22 20 21.105 20 20Z","key":"0"}),
    createElement('path', {"d":"M14 2L14 7C14 7.551 14.449 8 15 8L20 8","key":"1"}),
    createElement('path', {"d":"M10 4L10 2","key":"2"}),
    createElement('path', {"d":"M10 8L10 7","key":"3"}),
    createElement('path', {"d":"M10 12L10 11","key":"4"}),
    createElement('path', {"d":"M8 14L12 14","key":"5"}),
    createElement('path', {"d":"M10 15L8.859 16.711C8.402 17.395 8.652 18.324 9.387 18.695C9.773 18.887 10.227 18.887 10.613 18.695C11.348 18.324 11.598 17.395 11.141 16.711Z","key":"6"})
  );
});

FileZip.displayName = 'FileZip';

export default FileZip;
export { FileZip };

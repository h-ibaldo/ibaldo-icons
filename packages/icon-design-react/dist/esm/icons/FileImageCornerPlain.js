import { createElement, forwardRef } from 'react';

const FileImageCornerPlain = forwardRef(function FileImageCornerPlain(
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
    createElement('path', {"d":"M15 11C15 12.105 14.105 13 13 13C11.895 13 11 12.105 11 11C11 9.895 11.895 9 13 9C14.105 9 15 9.895 15 11Z","key":"0"}),
    createElement('path', {"d":"M21 21.723C21.595 21.376 22 20.738 22 20L22 4C22 2.895 21.105 2 20 2L8 2C6.895 2 6 2.895 6 4L6 10","key":"1"}),
    createElement('path', {"d":"M2 22L12 22L7 14L2 22Z","key":"2"}),
    createElement('path', {"d":"M12 22L17 22L13.5 17L11.057 20.491","key":"3"})
  );
});

FileImageCornerPlain.displayName = 'FileImageCornerPlain';

export default FileImageCornerPlain;
export { FileImageCornerPlain };

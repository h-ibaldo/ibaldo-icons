import { createElement, forwardRef } from 'react';

const FileJoinedDots = forwardRef(function FileJoinedDots(
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
    createElement('path', {"d":"M15 16L20 16C21.105 16 22 15.105 22 14L22 7.828C22 7.298 21.789 6.789 21.414 6.414L17.586 2.586C17.211 2.211 16.702 2 16.172 2L11 2C9.895 2 9 2.895 9 4L9 8","key":"0"}),
    createElement('path', {"d":"M9 8L4 8C2.895 8 2 8.895 2 10L2 20C2 21.105 2.895 22 4 22L13 22C14.105 22 15 21.105 15 20L15 16","key":"1"}),
    createElement('path', {"d":"M16 2L16 7C16 7.552 16.448 8 17 8L22 8","key":"2"}),
    createElement('path', {"d":"M11 11L11 11","key":"3"}),
    createElement('path', {"d":"M13 13L13 13","key":"4"})
  );
});

FileJoinedDots.displayName = 'FileJoinedDots';

export default FileJoinedDots;
export { FileJoinedDots };

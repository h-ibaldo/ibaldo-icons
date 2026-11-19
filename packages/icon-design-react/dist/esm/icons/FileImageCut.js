import { createElement, forwardRef } from 'react';

const FileImageCut = forwardRef(function FileImageCut(
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
    createElement('path', {"d":"M5 21L10 16L12 18L16 14L20 18","key":"0"}),
    createElement('path', {"d":"M20 20L20 7.828C20 7.298 19.789 6.789 19.414 6.414L15.586 2.586C15.211 2.211 14.702 2 14.172 2L6 2C4.895 2 4 2.895 4 4L4 20C4 21.105 4.895 22 6 22L18 22C19.105 22 20 21.105 20 20Z","key":"1"}),
    createElement('path', {"d":"M12 10C12 11.105 11.105 12 10 12C8.895 12 8 11.105 8 10C8 8.895 8.895 8 10 8C11.105 8 12 8.895 12 10Z","key":"2"})
  );
});

FileImageCut.displayName = 'FileImageCut';

export default FileImageCut;
export { FileImageCut };

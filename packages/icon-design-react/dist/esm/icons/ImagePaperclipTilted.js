import { createElement, forwardRef } from 'react';

const ImagePaperclipTilted = forwardRef(function ImagePaperclipTilted(
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
    createElement('path', {"d":"M22 19.949C22 21.082 21.082 22 19.949 22","key":"0"}),
    createElement('path', {"d":"M19.789 22L13.211 22C11.988 22 11 21.012 11 19.789L11 13.211C11 11.988 11.988 11 13.211 11L19.789 11C21.012 11 22 11.988 22 13.211L22 19.789C22 21.012 21.012 22 19.789 22Z","key":"1"}),
    createElement('path', {"d":"M16 22C16 18.688 18.688 16 22 16","key":"2"}),
    createElement('path', {"d":"M15 15L15 15","key":"3"}),
    createElement('path', {"d":"M7.5 2.5L3.328 6.672C2.223 7.777 2.223 9.566 3.328 10.672C4.434 11.777 6.223 11.777 7.328 10.672L13.086 4.914C13.637 4.363 13.637 3.465 13.086 2.914C12.531 2.363 11.637 2.363 11.086 2.914L6.5 7.5","key":"4"})
  );
});

ImagePaperclipTilted.displayName = 'ImagePaperclipTilted';

export default ImagePaperclipTilted;
export { ImagePaperclipTilted };

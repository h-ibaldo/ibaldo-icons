import { createElement, forwardRef } from 'react';

const ImagePaperclipCurl = forwardRef(function ImagePaperclipCurl(
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
    createElement('path', {"d":"M7 11L6 11C3.789 11 2 9.211 2 7C2 4.789 3.789 3 6 3L14 3C15.105 3 16 3.895 16 5C16 6.105 15.105 7 14 7L8 7","key":"0"}),
    createElement('path', {"d":"M22 19.949C22 21.082 21.082 22 19.949 22","key":"1"}),
    createElement('path', {"d":"M19.789 22L13.211 22C11.988 22 11 21.012 11 19.789L11 13.211C11 11.988 11.988 11 13.211 11L19.789 11C21.012 11 22 11.988 22 13.211L22 19.789C22 21.012 21.012 22 19.789 22Z","key":"2"}),
    createElement('path', {"d":"M16 22C16 18.688 18.688 16 22 16","key":"3"}),
    createElement('path', {"d":"M15 15L15 15","key":"4"})
  );
});

ImagePaperclipCurl.displayName = 'ImagePaperclipCurl';

export default ImagePaperclipCurl;
export { ImagePaperclipCurl };

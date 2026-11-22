import { createElement, forwardRef } from 'react';

const FileVideo = forwardRef(function FileVideo(
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
    createElement('path', {"d":"M6 22L5 22C3.895 22 3 21.105 3 20L3 4C3 2.895 3.895 2 5 2L13.016 2C13.645 2 14.25 2.25 14.695 2.695L18.305 6.305C18.75 6.75 19 7.355 19 7.984L19 10","key":"0"}),
    createElement('path', {"d":"M13 2L13 7C13 7.551 13.449 8 14 8L19 8","key":"1"}),
    createElement('path', {"d":"M17 15L17 14.152C17 13.516 16.484 13 15.844 13L10.156 13C9.516 13 9 13.516 9 14.152L9 19.848C9 20.484 9.516 21 10.156 21L15.844 21C16.484 21 17 20.484 17 19.848L17 19L20.277 20.641C20.609 20.805 21 20.563 21 20.191L21 13.809C21 13.438 20.609 13.195 20.277 13.359Z","key":"2"})
  );
});

FileVideo.displayName = 'FileVideo';

export default FileVideo;
export { FileVideo };

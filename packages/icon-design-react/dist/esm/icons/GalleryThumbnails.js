import { createElement, forwardRef } from 'react';

const GalleryThumbnails = forwardRef(function GalleryThumbnails(
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
    createElement('path', {"d":"M2 22L3.973 22","key":"0"}),
    createElement('path', {"d":"M8 22L9.973 22","key":"1"}),
    createElement('path', {"d":"M14 22L15.973 22","key":"2"}),
    createElement('path', {"d":"M20 22L21.973 22","key":"3"}),
    createElement('path', {"d":"M20 18L4 18C2.895 18 2 17.105 2 16L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 16C22 17.105 21.105 18 20 18Z","key":"4"})
  );
});

GalleryThumbnails.displayName = 'GalleryThumbnails';

export default GalleryThumbnails;
export { GalleryThumbnails };

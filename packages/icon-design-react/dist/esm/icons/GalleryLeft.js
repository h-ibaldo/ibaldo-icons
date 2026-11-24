import { createElement, forwardRef } from 'react';

const GalleryLeft = forwardRef(function GalleryLeft(
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
    createElement('path', {"d":"M7 19L7 5","key":"0"}),
    createElement('path', {"d":"M2 17L2 7","key":"1"}),
    createElement('path', {"d":"M22 4L22 20C22 21.105 21.105 22 20 22L14 22C12.895 22 12 21.105 12 20L12 4C12 2.895 12.895 2 14 2L20 2C21.105 2 22 2.895 22 4Z","key":"2"})
  );
});

GalleryLeft.displayName = 'GalleryLeft';

export default GalleryLeft;
export { GalleryLeft };

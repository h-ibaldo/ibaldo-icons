import { createElement, forwardRef } from 'react';

const ImagePlay = forwardRef(function ImagePlay(
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
    createElement('path', {"d":"M22 10L22 20C22 20.551 21.551 21 21 21L3 21C2.449 21 2 20.551 2 20L2 4C2 3.449 2.449 3 3 3L13 3","key":"0"}),
    createElement('path', {"d":"M2 19L7.027 14.813C7.598 14.336 8.418 14.316 9.012 14.762L12 17L15.867 13.133C16.492 12.508 17.508 12.508 18.133 13.133L22 17","key":"1"}),
    createElement('path', {"d":"M11 9C11 10.105 10.105 11 9 11C7.895 11 7 10.105 7 9C7 7.895 7.895 7 9 7C10.105 7 11 7.895 11 9Z","key":"2"}),
    createElement('path', {"d":"M17 2L22 5L17 8Z","key":"3"})
  );
});

ImagePlay.displayName = 'ImagePlay';

export default ImagePlay;
export { ImagePlay };

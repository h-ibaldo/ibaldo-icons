import { createElement, forwardRef } from 'react';

const CardImageCursor = forwardRef(function CardImageCursor(
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
    createElement('path', {"d":"M22 13L22 4C22 2.895 21.105 2 20 2L4 2C2.895 2 2 2.895 2 4L2 20C2 21.105 2.895 22 4 22L13 22","key":"0"}),
    createElement('path', {"d":"M18 12L18 6L6 6L6 14L10 14","key":"1"}),
    createElement('path', {"d":"M12 18L6 18","key":"2"}),
    createElement('path', {"d":"M22 22L19 19","key":"3"}),
    createElement('path', {"d":"M22 17L14 14L17 22L18 18Z","key":"4"})
  );
});

CardImageCursor.displayName = 'CardImageCursor';

export default CardImageCursor;
export { CardImageCursor };

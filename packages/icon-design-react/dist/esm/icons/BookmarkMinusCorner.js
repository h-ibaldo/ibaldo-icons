import { createElement, forwardRef } from 'react';

const BookmarkMinusCorner = forwardRef(function BookmarkMinusCorner(
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
    createElement('path', {"d":"M10.000000000012733,2.999999999998181h-4.000000000003638c-.552284749830505,0-1,.447715250169495-1,1v18l7-4,7,4v-12.000000000009095","key":"0"}),
    createElement('line', {"x1":"14.000000000012733","y1":"4.999999999989086","x2":"20.000000000012733","y2":"4.999999999989086","key":"1"})
  );
});

BookmarkMinusCorner.displayName = 'BookmarkMinusCorner';

export default BookmarkMinusCorner;
export { BookmarkMinusCorner };

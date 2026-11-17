import { createElement, forwardRef } from 'react';

const BookmarkSlash = forwardRef(function BookmarkSlash(
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
    createElement('path', {"d":"M18.999999973299964,8.999999999998181V2.999999999998181c0-.552284749830505-.447715250170404-1-1-1H5.999999973299964","key":"0"}),
    createElement('polyline', {"points":"4.999999973299964 5.752474922528563 4.999999973299964 21.999999999998181 11.999999973299964 17.999999999998181 18.999999973299964 21.999999999998181 18.999999973299964 13.349999999998545","key":"1"}),
    createElement('line', {"x1":"1.999999973299964","y1":"3.999999999998181","x2":"21.999999973299964","y2":"14.999999999998181","key":"2"})
  );
});

BookmarkSlash.displayName = 'BookmarkSlash';

export default BookmarkSlash;
export { BookmarkSlash };

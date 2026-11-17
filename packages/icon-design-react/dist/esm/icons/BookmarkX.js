import { createElement, forwardRef } from 'react';

const BookmarkX = forwardRef(function BookmarkX(
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
    createElement('path', {"d":"M17.999999973299964,1.999999999998181H5.999999973299964c-.552284749829596,0-1,.447715250169495-1,1v19l7-4,7,4V2.999999999998181c0-.552284749830505-.447715250170404-1-1-1Z","key":"0"}),
    createElement('line', {"x1":"9.999999962529728","y1":"12.000000031348463","x2":"14","y2":"7.999999999998181","key":"1"}),
    createElement('line', {"x1":"9.999999962709808","y1":"7.999999999818101","x2":"13.999999999829924","y2":"12.000000031528543","key":"2"})
  );
});

BookmarkX.displayName = 'BookmarkX';

export default BookmarkX;
export { BookmarkX };

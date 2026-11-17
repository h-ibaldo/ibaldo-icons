import { createElement, forwardRef } from 'react';

const BookmarkMinusCircle = forwardRef(function BookmarkMinusCircle(
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
    createElement('circle', {"cx":"16.999999973079866","cy":"10.999999999998181","r":"5","key":"0"}),
    createElement('line', {"x1":"18.999999973079866","y1":"10.999999995057806","x2":"14.999999973079866","y2":"10.999999995237886","key":"1"}),
    createElement('path', {"d":"M16.999999973079866,5.999999999998181l.000000000220098-3c0-.552284749830505-.447715250170404-1-1-1H3.999999973299964c-.552284749829596,0-1,.447715250169495-1,1v19l7-4,7,4-.000000000220098-6","key":"2"})
  );
});

BookmarkMinusCircle.displayName = 'BookmarkMinusCircle';

export default BookmarkMinusCircle;
export { BookmarkMinusCircle };

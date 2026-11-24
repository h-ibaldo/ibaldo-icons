import { createElement, forwardRef } from 'react';

const BookmarkCheckCircle = forwardRef(function BookmarkCheckCircle(
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
    createElement('path', {"d":"M16.999999973079866,5.999999999998181l.000000000220098-3c0-.552284749830505-.447715250170404-1-1-1H3.999999973299964c-.552284749829596,0-1,.447715250169495-1,1v19l7-4,7,4-.000000000220098-6","key":"0"}),
    createElement('g', {"key":"1"},
      createElement('circle', {"cx":"16.999999973079866","cy":"10.999999999998181","r":"5","key":"0"}),
      createElement('polyline', {"points":"15.499999973079866 10.999999997568011 16.499999973079866 12.000000002428351 18.499999973079866 9.999999997568011","key":"1"}))
  );
});

BookmarkCheckCircle.displayName = 'BookmarkCheckCircle';

export default BookmarkCheckCircle;
export { BookmarkCheckCircle };

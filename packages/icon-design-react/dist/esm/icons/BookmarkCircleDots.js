import { createElement, forwardRef } from 'react';

const BookmarkCircleDots = forwardRef(function BookmarkCircleDots(
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
    createElement('circle', {"cx":"16.999999973299964","cy":"10.999999999998181","r":"5","key":"1"}),
    createElement('g', {"key":"2"},
      createElement('line', {"x1":"15.499999973299964","y1":"11.009999999998399","x2":"15.499999973299964","y2":"10.999999999998181","key":"0"}),
      createElement('line', {"x1":"18.499999973299964","y1":"11.009999999998399","x2":"18.499999973299964","y2":"10.999999999998181","key":"1"}))
  );
});

BookmarkCircleDots.displayName = 'BookmarkCircleDots';

export default BookmarkCircleDots;
export { BookmarkCircleDots };

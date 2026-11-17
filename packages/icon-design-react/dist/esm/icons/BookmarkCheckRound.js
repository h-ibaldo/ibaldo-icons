import { createElement, forwardRef } from 'react';

const BookmarkCheckRound = forwardRef(function BookmarkCheckRound(
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
    createElement('path', {"d":"M16.000000026696398,1.999999999998181h-8.000000000001819c-1.656854249492426,0-3,1.343145750509393-3,3v17l7.000000000001819-4,7,4V4.999999999998181c0-1.656854249490607-1.343145750507574-3-3-3Z","key":"0"}),
    createElement('polyline', {"points":"9.000000053394615 10.999999999998181 11.000000053394615 12.999999999998181 15.000000053394615 7.999999999998181","key":"1"})
  );
});

BookmarkCheckRound.displayName = 'BookmarkCheckRound';

export default BookmarkCheckRound;
export { BookmarkCheckRound };

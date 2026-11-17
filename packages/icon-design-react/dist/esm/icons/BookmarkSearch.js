import { createElement, forwardRef } from 'react';

const BookmarkSearch = forwardRef(function BookmarkSearch(
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
    createElement('circle', {"cx":"16","cy":"10.999999999998181","r":"4","key":"0"}),
    createElement('path', {"d":"M16,6.999999999998181V2.999999999998181c0-.552307128909888-.44769287109375-1-1-1H3c-.55230712890625,0-1,.447692871090112-1,1v19l7-4,7,4v-7","key":"1"}),
    createElement('line', {"x1":"18.82843017578125","y1":"13.828430175777612","x2":"22","y2":"16.999999999998181","key":"2"})
  );
});

BookmarkSearch.displayName = 'BookmarkSearch';

export default BookmarkSearch;
export { BookmarkSearch };

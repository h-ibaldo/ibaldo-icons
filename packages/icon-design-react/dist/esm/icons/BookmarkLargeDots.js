import { createElement, forwardRef } from 'react';

const BookmarkLargeDots = forwardRef(function BookmarkLargeDots(
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
    createElement('path', {"d":"M15.999999999998181,1.999999999998181H2.999999973304512c-.55230712890625,0-1,.447692871090112-1,1v19l7-4,7,4v-8","key":"0"}),
    createElement('g', {"key":"1"},
      createElement('circle', {"cx":"15.99999997087798","cy":"7.999999997570285","r":"5.99999999757506","key":"0"}),
      createElement('line', {"x1":"13.999999955856765","y1":"7.999999999998181","x2":"14.009999968451666","y2":"7.999999999998181","key":"1"}),
      createElement('line', {"x1":"17.999999955856765","y1":"7.999999999998181","x2":"17.98999996845123","y2":"7.999999999998181","key":"2"}))
  );
});

BookmarkLargeDots.displayName = 'BookmarkLargeDots';

export default BookmarkLargeDots;
export { BookmarkLargeDots };

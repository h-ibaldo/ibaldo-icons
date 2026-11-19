import { createElement, forwardRef } from 'react';
import Svg, { Path, Polyline } from 'react-native-svg';

const BookmarkOneCurl = forwardRef(function BookmarkOneCurl(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, ...props },
  ref
) {
  return createElement(
    Svg,
    {
      ref,
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props
    },
    createElement(Path, {"d":"M21,2H7c-1.656854249493335,0-3,1.343145750510303-3,3v17l7-4.000000004851245,7,4.000000004851245V4.999997000000803c0-1.656852592641371,1.343144416809082-2.999997000000803,2.999996999998984-2.999997000000803h.000003000001016Z","key":"0"}),
    createElement(Polyline, {"points":"10 7 11 7 11 14","key":"1"})
  );
});

BookmarkOneCurl.displayName = 'BookmarkOneCurl';

export default BookmarkOneCurl;
export { BookmarkOneCurl };

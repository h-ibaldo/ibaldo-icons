import { createElement, forwardRef } from 'react';
import Svg, { Line, Path } from 'react-native-svg';

const BookmarkXCurl = forwardRef(function BookmarkXCurl(
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
    createElement(Path, {"d":"M21,1.999999999998181H7c-1.656854249493335,0-3,1.343145750509393-3,3v17l7-4.000000004851245,7,4.000000004851245V4.999996999998984c0-1.656852592641371,1.343144416809082-2.999997000000803,2.999996999998984-2.999997000000803h.000003000001016Z","key":"0"}),
    createElement(Line, {"x1":"9.000000000003638","y1":"12.000000026499038","x2":"13.000000037482096","y2":"7.999999995146936","key":"1"}),
    createElement(Line, {"x1":"9.000000000183718","y1":"7.999999994968675","x2":"13.000000037303835","y2":"12.000000026677299","key":"2"})
  );
});

BookmarkXCurl.displayName = 'BookmarkXCurl';

export default BookmarkXCurl;
export { BookmarkXCurl };

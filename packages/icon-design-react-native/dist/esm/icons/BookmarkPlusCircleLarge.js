import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Path } from 'react-native-svg';

const BookmarkPlusCircleLarge = forwardRef(function BookmarkPlusCircleLarge(
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
    createElement(Circle, {"cx":"15.999999975729679","cy":"7.999999997570285","r":"5.999999997575287","key":"0"}),
    createElement(Line, {"x1":"13.999999960709829","y1":"7.999999999998181","x2":"17.999999960709829","y2":"7.999999999998181","key":"1"}),
    createElement(Line, {"x1":"15.999999960709829","y1":"5.999999999998181","x2":"15.999999960709829","y2":"9.999999999998181","key":"2"}),
    createElement(Path, {"d":"M16,1.999999999998181H2.999999973304512c-.55230712890625,0-1,.447692871090112-1,1v19l7-4,7,4v-8","key":"3"})
  );
});

BookmarkPlusCircleLarge.displayName = 'BookmarkPlusCircleLarge';

export default BookmarkPlusCircleLarge;
export { BookmarkPlusCircleLarge };

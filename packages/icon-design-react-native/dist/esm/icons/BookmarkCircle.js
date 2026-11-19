import { createElement, forwardRef } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const BookmarkCircle = forwardRef(function BookmarkCircle(
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
    createElement(Circle, {"cx":"12.000000026697307","cy":"12.000000000007276","r":"10","key":"0"}),
    createElement(Path, {"d":"M14.000000026697307,6.999999999998181h-4c-.552284749830505,0-1,.447715250169495-1,1v9l2.999999999998181-2.000000000009095,3.000000000001819,2.000000000009095V7.999999999998181c0-.552284749830505-.447715250169495-1-1-1Z","key":"1"})
  );
});

BookmarkCircle.displayName = 'BookmarkCircle';

export default BookmarkCircle;
export { BookmarkCircle };

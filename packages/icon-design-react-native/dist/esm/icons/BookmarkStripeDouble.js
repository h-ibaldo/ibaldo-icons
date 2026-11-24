import { createElement, forwardRef } from 'react';
import Svg, { Line, Path } from 'react-native-svg';

const BookmarkStripeDouble = forwardRef(function BookmarkStripeDouble(
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
    createElement(Line, {"x1":"9","y1":"1.999999999998181","x2":"9","y2":"19.714355468748181","key":"0"}),
    createElement(Line, {"x1":"15","y1":"19.714355468748181","x2":"15","y2":"1.999999999998181","key":"1"}),
    createElement(Path, {"d":"M18,1.999999999998181H6c-.552284749830505,0-1,.447715250169495-1,1v19l7-4,7,4V2.999999999998181c0-.552284749830505-.447715250169495-1-1-1Z","key":"2"})
  );
});

BookmarkStripeDouble.displayName = 'BookmarkStripeDouble';

export default BookmarkStripeDouble;
export { BookmarkStripeDouble };

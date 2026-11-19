import { createElement, forwardRef } from 'react';
import Svg, { Line, Path } from 'react-native-svg';

const BookmarkPlusCorner = forwardRef(function BookmarkPlusCorner(
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
    createElement(Path, {"d":"M10.000000000003638,2.999999999998181h-4.000000000005457c-.552284749828686,0-1,.447715250169495-1,1v18l7-4,7,4v-10.000000000009095","key":"0"}),
    createElement(Line, {"x1":"14.000000000003638","y1":"4.999999999989086","x2":"20.000000000003638","y2":"4.999999999989086","key":"1"}),
    createElement(Line, {"x1":"17.000000000003638","y1":"1.999999999989086","x2":"17.000000000003638","y2":"7.999999999989086","key":"2"})
  );
});

BookmarkPlusCorner.displayName = 'BookmarkPlusCorner';

export default BookmarkPlusCorner;
export { BookmarkPlusCorner };

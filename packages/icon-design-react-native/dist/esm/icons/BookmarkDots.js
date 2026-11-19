import { createElement, forwardRef } from 'react';
import Svg, { Line, Path } from 'react-native-svg';

const BookmarkDots = forwardRef(function BookmarkDots(
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
    createElement(Path, {"d":"M17.999999973299964,1.999999999998181H5.999999973299964c-.552284749829596,0-1,.447715250169495-1,1v19l7-4,7,4V2.999999999998181c0-.552284749830505-.447715250170404-1-1-1Z","key":"0"}),
    createElement(Line, {"x1":"11.999999973299964","y1":"7.086284113618603","x2":"11.999999973299964","y2":"7.076284113618385","key":"1"}),
    createElement(Line, {"x1":"11.999999973299964","y1":"10.086284113618603","x2":"11.999999973299964","y2":"10.076284113618385","key":"2"}),
    createElement(Line, {"x1":"11.999999973299964","y1":"13.086284113618603","x2":"11.999999973299964","y2":"13.076284113618385","key":"3"})
  );
});

BookmarkDots.displayName = 'BookmarkDots';

export default BookmarkDots;
export { BookmarkDots };

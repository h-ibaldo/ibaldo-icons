import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const BookmarkStackTop = forwardRef(function BookmarkStackTop(
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
    createElement(Path, {"d":"M18,5H6c-.552284749830505,0-1,.447715250170404-1,1v16l7-4,7,4V6c0-.552284749829596-.447715250169495-1-1-1Z","key":"0"}),
    createElement(Path, {"d":"M18,5v-2c0-.552284749829596-.447715250169495-1-1-1H7c-.552284749830505,0-1,.447715250170404-1,1v2","key":"1"})
  );
});

BookmarkStackTop.displayName = 'BookmarkStackTop';

export default BookmarkStackTop;
export { BookmarkStackTop };

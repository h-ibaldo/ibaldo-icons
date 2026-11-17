import { createElement, forwardRef } from 'react';

const BookmarksCollection = forwardRef(function BookmarksCollection(
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
    createElement('path', {"d":"M18,5H6c-.552284749830505,0-1,.447715250170404-1,1v16l7-4,7,4V6c0-.552284749829596-.447715250169495-1-1-1Z","key":"0"}),
    createElement('path', {"d":"M18,5v-2c0-.552284749829596-.447715250169495-1-1-1H7c-.552284749830505,0-1,.447715250170404-1,1v2","key":"1"})
  );
});

BookmarksCollection.displayName = 'BookmarksCollection';

export default BookmarksCollection;
export { BookmarksCollection };

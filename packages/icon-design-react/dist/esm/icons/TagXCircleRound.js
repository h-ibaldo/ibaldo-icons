import { createElement, forwardRef } from 'react';

const TagXCircleRound = forwardRef(function TagXCircleRound(
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
    createElement('path', {"d":"M6.5 8C6.223 8 6 7.777 6 7.5C6 7.223 6.223 7 6.5 7C6.777 7 7 7.223 7 7.5C7 7.777 6.777 8 6.5 8Z","key":"0"}),
    createElement('path', {"d":"M22 11.5C22 14.539 19.539 17 16.5 17C13.461 17 11 14.539 11 11.5C11 8.461 13.461 6 16.5 6C19.539 6 22 8.461 22 11.5Z","key":"1"}),
    createElement('path', {"d":"M14.414 6.414L11.586 3.586C11.211 3.211 10.703 3 10.172 3L4 3C2.895 3 2 3.895 2 5L2 11.172C2 11.703 2.211 12.211 2.586 12.586L10.586 20.586C11.367 21.367 12.633 21.367 13.414 20.586L17.027 16.973","key":"2"}),
    createElement('path', {"d":"M18 10L15 13","key":"3"}),
    createElement('path', {"d":"M15 10L18 13","key":"4"})
  );
});

TagXCircleRound.displayName = 'TagXCircleRound';

export default TagXCircleRound;
export { TagXCircleRound };

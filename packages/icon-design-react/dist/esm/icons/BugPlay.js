import { createElement, forwardRef } from 'react';

const BugPlay = forwardRef(function BugPlay(
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
    createElement('path', {"d":"M6 15C6 11.133 8.688 8 12 8C15.313 8 18 11.133 18 15C18 18.867 15.313 22 12 22C8.688 22 6 18.867 6 15Z","key":"0"}),
    createElement('path', {"d":"M8.133 9.648C8.047 9.281 8 8.898 8 8.5C8 6.016 9.789 4 12 4C14.211 4 16 6.016 16 8.5C16 8.898 15.953 9.281 15.867 9.648","key":"1"}),
    createElement('path', {"d":"M15 5L18 2","key":"2"}),
    createElement('path', {"d":"M9 5L6 2","key":"3"}),
    createElement('path', {"d":"M18 12L21 11L21 8","key":"4"}),
    createElement('path', {"d":"M18 18L21 19L21 22","key":"5"}),
    createElement('path', {"d":"M18 15L22 15","key":"6"}),
    createElement('path', {"d":"M6 12L3 11L3 8","key":"7"}),
    createElement('path', {"d":"M6 18L3 19L3 22","key":"8"}),
    createElement('path', {"d":"M6 15L2 15","key":"9"}),
    createElement('path', {"d":"M10 18L10 12L15 15Z","key":"10"})
  );
});

BugPlay.displayName = 'BugPlay';

export default BugPlay;
export { BugPlay };

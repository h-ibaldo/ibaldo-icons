import { createElement, forwardRef } from 'react';

const ClipboardListXCircle = forwardRef(function ClipboardListXCircle(
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
    createElement('path', {"d":"M22 16.5C22 19.539 19.539 22 16.5 22C13.461 22 11 19.539 11 16.5C11 13.461 13.461 11 16.5 11C19.539 11 22 13.461 22 16.5Z","key":"0"}),
    createElement('path', {"d":"M18 15L15 18","key":"1"}),
    createElement('path', {"d":"M15 15L18 18","key":"2"}),
    createElement('path', {"d":"M9 22L5 22C3.895 22 3 21.105 3 20L3 6C3 4.895 3.895 4 5 4L8 4","key":"3"}),
    createElement('path', {"d":"M16 4L19 4C20.105 4 21 4.895 21 6L21 9","key":"4"}),
    createElement('path', {"d":"M14.883 7L9.117 7C8.5 7 8 6.5 8 5.883L8 3.117C8 2.5 8.5 2 9.117 2L14.883 2C15.5 2 16 2.5 16 3.117L16 5.883C16 6.5 15.5 7 14.883 7Z","key":"5"}),
    createElement('path', {"d":"M9 11L7 11","key":"6"}),
    createElement('path', {"d":"M8 14L7 14","key":"7"}),
    createElement('path', {"d":"M8 17L7 17","key":"8"})
  );
});

ClipboardListXCircle.displayName = 'ClipboardListXCircle';

export default ClipboardListXCircle;
export { ClipboardListXCircle };

import { createElement, forwardRef } from 'react';

const ClipboardPlusCenter = forwardRef(function ClipboardPlusCenter(
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
    createElement('path', {"d":"M16 4L19 4C20.105 4 21 4.895 21 6L21 20C21 21.105 20.105 22 19 22L5 22C3.895 22 3 21.105 3 20L3 6C3 4.895 3.895 4 5 4L8 4","key":"0"}),
    createElement('path', {"d":"M14.883 7L9.117 7C8.5 7 8 6.5 8 5.883L8 3.117C8 2.5 8.5 2 9.117 2L14.883 2C15.5 2 16 2.5 16 3.117L16 5.883C16 6.5 15.5 7 14.883 7Z","key":"1"}),
    createElement('path', {"d":"M12 11L12 17","key":"2"}),
    createElement('path', {"d":"M15 14L9 14","key":"3"})
  );
});

ClipboardPlusCenter.displayName = 'ClipboardPlusCenter';

export default ClipboardPlusCenter;
export { ClipboardPlusCenter };

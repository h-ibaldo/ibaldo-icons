import { createElement, forwardRef } from 'react';

const OptionsCheckCursor = forwardRef(function OptionsCheckCursor(
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
    createElement('path', {"d":"M10.5 6.25C10.5 8.598 8.598 10.5 6.25 10.5C3.902 10.5 2 8.598 2 6.25C2 3.902 3.902 2 6.25 2C8.598 2 10.5 3.902 10.5 6.25Z","key":"0"}),
    createElement('path', {"d":"M4.977 6.25L5.824 7.102L7.523 5.398","key":"1"}),
    createElement('path', {"d":"M10.5 17.75C10.5 20.098 8.598 22 6.25 22C3.902 22 2 20.098 2 17.75C2 15.402 3.902 13.5 6.25 13.5C8.598 13.5 10.5 15.402 10.5 17.75Z","key":"2"}),
    createElement('path', {"d":"M4.977 17.75L5.824 18.602L7.523 16.898","key":"3"}),
    createElement('path', {"d":"M22 6.25C22 8.598 20.098 10.5 17.75 10.5C15.402 10.5 13.5 8.598 13.5 6.25C13.5 3.902 15.402 2 17.75 2C20.098 2 22 3.902 22 6.25Z","key":"4"}),
    createElement('path', {"d":"M16.477 6.25L17.324 7.102L19.023 5.398","key":"5"}),
    createElement('path', {"d":"M14.52 15.152L16.688 21.656C16.824 22.063 17.371 22.125 17.59 21.758L19.152 19.152L21.758 17.594C22.125 17.371 22.063 16.824 21.66 16.688L15.152 14.52C14.762 14.391 14.391 14.762 14.52 15.152Z","key":"6"})
  );
});

OptionsCheckCursor.displayName = 'OptionsCheckCursor';

export default OptionsCheckCursor;
export { OptionsCheckCursor };

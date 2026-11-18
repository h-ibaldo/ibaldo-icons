import { createElement, forwardRef } from 'react';

const OptionsRadioCheckX = forwardRef(function OptionsRadioCheckX(
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
    createElement('path', {"d":"M10.5 6.773C10.5 9.121 8.598 11.023 6.25 11.023C3.902 11.023 2 9.121 2 6.773C2 4.43 3.902 2.523 6.25 2.523C8.598 2.523 10.5 4.43 10.5 6.773Z","key":"0"}),
    createElement('path', {"d":"M6.75 6.773C6.75 7.051 6.527 7.273 6.25 7.273C5.973 7.273 5.75 7.051 5.75 6.773C5.75 6.5 5.973 6.273 6.25 6.273C6.527 6.273 6.75 6.5 6.75 6.773Z","key":"1"}),
    createElement('path', {"d":"M22 6.75C22 9.098 20.098 11 17.75 11C15.402 11 13.5 9.098 13.5 6.75C13.5 4.402 15.402 2.5 17.75 2.5C20.098 2.5 22 4.402 22 6.75Z","key":"2"}),
    createElement('path', {"d":"M16.477 6.75L17.324 7.602L19.023 5.898","key":"3"}),
    createElement('path', {"d":"M7.75 17.273C7.75 19.621 9.652 21.523 12 21.523C14.348 21.523 16.25 19.621 16.25 17.273C16.25 14.93 14.348 13.023 12 13.023C9.652 13.023 7.75 14.93 7.75 17.273Z","key":"4"}),
    createElement('path', {"d":"M10.84 16.117L13.16 18.434","key":"5"}),
    createElement('path', {"d":"M13.16 16.117L10.84 18.434","key":"6"})
  );
});

OptionsRadioCheckX.displayName = 'OptionsRadioCheckX';

export default OptionsRadioCheckX;
export { OptionsRadioCheckX };

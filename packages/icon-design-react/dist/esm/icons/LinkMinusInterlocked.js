import { createElement, forwardRef } from 'react';

const LinkMinusInterlocked = forwardRef(function LinkMinusInterlocked(
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
    createElement('path', {"d":"M11 7.102L10.586 7.516C9.023 9.078 9.023 11.609 10.586 13.172L10.93 13.516C12.492 15.078 15.023 15.078 16.586 13.516L20.93 9.172C22.492 7.609 22.492 5.078 20.93 3.516L20.586 3.172C19.219 1.805 17.109 1.633 15.559 2.66","key":"0"}),
    createElement('path', {"d":"M13 11.102L13.414 10.688C14.977 9.125 14.977 6.59 13.414 5.031L13.07 4.688C11.508 3.125 8.977 3.125 7.414 4.688L3.07 9.031C1.508 10.59 1.508 13.125 3.07 14.688L3.414 15.031C4.781 16.395 6.891 16.566 8.441 15.543","key":"1"}),
    createElement('path', {"d":"M22 19L16 19","key":"2"})
  );
});

LinkMinusInterlocked.displayName = 'LinkMinusInterlocked';

export default LinkMinusInterlocked;
export { LinkMinusInterlocked };

import { createElement, forwardRef } from 'react';

const LinkEditSlim = forwardRef(function LinkEditSlim(
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
    createElement('path', {"d":"M11.023 7.973L10.023 8.973C8.656 10.34 8.656 12.559 10.023 13.926L10.074 13.973C11.441 15.34 13.656 15.34 15.023 13.973L21 8C22.367 6.633 22.367 4.418 21 3.051L20.949 3C19.762 1.813 17.938 1.66 16.582 2.535","key":"0"}),
    createElement('path', {"d":"M13 11.004L14 10.004C15.367 8.637 15.367 6.418 14 5.055L13.949 5.004C12.582 3.637 10.367 3.637 9 5.004L3.023 10.977C1.656 12.344 1.656 14.559 3.023 15.926L3.074 15.977C4.262 17.164 6.086 17.316 7.441 16.441","key":"1"}),
    createElement('path', {"d":"M21.586 15.414C21.035 14.863 20.137 14.863 19.586 15.414L15 20L15 22L17 22L21.586 17.414C22.137 16.863 22.137 15.969 21.586 15.414Z","key":"2"})
  );
});

LinkEditSlim.displayName = 'LinkEditSlim';

export default LinkEditSlim;
export { LinkEditSlim };

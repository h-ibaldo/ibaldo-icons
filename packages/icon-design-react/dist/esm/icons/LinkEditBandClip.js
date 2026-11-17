import { createElement, forwardRef } from 'react';

const LinkEditBandClip = forwardRef(function LinkEditBandClip(
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
    createElement('path', {"d":"M21.242 11.586C20.461 10.805 19.195 10.805 18.414 11.586L11 19L11 22L14 22L21.414 14.586C22.195 13.805 22.195 12.539 21.414 11.758Z","key":"0"}),
    createElement('path', {"d":"M13 10L14.965 8.035C16.344 6.656 16.344 4.414 14.965 3.035C13.586 1.656 11.344 1.656 9.965 3.035L8 5","key":"1"}),
    createElement('path', {"d":"M5 8L3.035 9.965C1.656 11.348 1.656 13.586 3.035 14.965C4.414 16.348 6.656 16.348 8.035 14.965L10 13","key":"2"}),
    createElement('path', {"d":"M11 7L7 11","key":"3"}),
    createElement('path', {"d":"M17 13L20 16","key":"4"})
  );
});

LinkEditBandClip.displayName = 'LinkEditBandClip';

export default LinkEditBandClip;
export { LinkEditBandClip };

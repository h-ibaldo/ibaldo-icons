import { createElement, forwardRef } from 'react';

const WebcamSquare = forwardRef(function WebcamSquare(
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
    createElement('path', {"d":"M7.5 9.5C7.5 7.016 9.516 5 12 5C14.484 5 16.5 7.016 16.5 9.5C16.5 11.984 14.484 14 12 14C9.516 14 7.5 11.984 7.5 9.5Z","key":"0"}),
    createElement('path', {"d":"M10 9.5C10 8.395 10.895 7.5 12 7.5","key":"1"}),
    createElement('path', {"d":"M10 17L10 22","key":"2"}),
    createElement('path', {"d":"M14 17L14 22","key":"3"}),
    createElement('path', {"d":"M19 22L5 22","key":"4"}),
    createElement('path', {"d":"M8 2L16 2C18.211 2 20 3.789 20 6L20 13C20 15.211 18.211 17 16 17L8 17C5.789 17 4 15.211 4 13L4 6C4 3.789 5.789 2 8 2Z","key":"5"})
  );
});

WebcamSquare.displayName = 'WebcamSquare';

export default WebcamSquare;
export { WebcamSquare };

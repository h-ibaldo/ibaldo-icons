import { createElement, forwardRef } from 'react';

const VideoPauseLarge = forwardRef(function VideoPauseLarge(
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
    createElement('path', {"d":"M20.379 6.281L16 9.75L16 7C16 5.895 15.105 5 14 5L4 5C2.895 5 2 5.895 2 7L2 17C2 18.105 2.895 19 4 19L14 19C15.105 19 16 18.105 16 17L16 14.25L20.379 17.719C21.035 18.234 22 17.77 22 16.934L22 7.066C22 6.23 21.035 5.766 20.379 6.281Z","key":"0"}),
    createElement('path', {"d":"M7 9L7 15","key":"1"}),
    createElement('path', {"d":"M11 9L11 15","key":"2"})
  );
});

VideoPauseLarge.displayName = 'VideoPauseLarge';

export default VideoPauseLarge;
export { VideoPauseLarge };

import { createElement, forwardRef } from 'react';

const WindowSpinnerDotsPlain = forwardRef(function WindowSpinnerDotsPlain(
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
    createElement('path', {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z","key":"0"}),
    createElement('path', {"d":"M2 8L22 8","key":"1"}),
    createElement('path', {"d":"M8 15L8 15","key":"2"}),
    createElement('path', {"d":"M16 15L16 15","key":"3"}),
    createElement('path', {"d":"M12 11L12 11","key":"4"}),
    createElement('path', {"d":"M12 19L12 19","key":"5"}),
    createElement('path', {"d":"M9.172 17.828L9.172 17.828","key":"6"}),
    createElement('path', {"d":"M14.828 12.172L14.828 12.172","key":"7"}),
    createElement('path', {"d":"M9.172 12.172L9.172 12.172","key":"8"}),
    createElement('path', {"d":"M14.828 17.828L14.828 17.828","key":"9"})
  );
});

WindowSpinnerDotsPlain.displayName = 'WindowSpinnerDotsPlain';

export default WindowSpinnerDotsPlain;
export { WindowSpinnerDotsPlain };

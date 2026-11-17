import { createElement, forwardRef } from 'react';

const CursorUpShine = forwardRef(function CursorUpShine(
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
    createElement('path', {"d":"M17.445 17.07L12.43 8.715C12.234 8.391 11.766 8.391 11.57 8.715L6.555 17.07C6.34 17.438 6.648 17.891 7.07 17.824L10 17.332L10 22L14 22L14 17.332L16.93 17.824C17.352 17.891 17.664 17.438 17.445 17.07Z","key":"0"}),
    createElement('path', {"d":"M12 2L12 4","key":"1"}),
    createElement('path', {"d":"M4 10L6 10","key":"2"}),
    createElement('path', {"d":"M18 10L20 10","key":"3"}),
    createElement('path', {"d":"M6.344 4.344L7.758 5.758","key":"4"}),
    createElement('path', {"d":"M16.242 5.758L17.656 4.344","key":"5"})
  );
});

CursorUpShine.displayName = 'CursorUpShine';

export default CursorUpShine;
export { CursorUpShine };

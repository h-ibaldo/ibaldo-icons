import { createElement, forwardRef } from 'react';

const TabletMobile = forwardRef(function TabletMobile(
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
    createElement('path', {"d":"M5 8L11 8C12.105 8 13 8.895 13 10L13 20C13 21.105 12.105 22 11 22L5 22C3.895 22 3 21.105 3 20L3 10C3 8.895 3.895 8 5 8Z","key":"0"}),
    createElement('path', {"d":"M7 5L7 3C7 2.449 7.449 2 8 2L20 2C20.551 2 21 2.449 21 3L21 20C21 20.551 20.551 21 20 21L16 21","key":"1"}),
    createElement('path', {"d":"M8 19L8 19","key":"2"})
  );
});

TabletMobile.displayName = 'TabletMobile';

export default TabletMobile;
export { TabletMobile };

import { createElement, forwardRef } from 'react';

const LinkSlanted = forwardRef(function LinkSlanted(
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
    createElement('path', {"d":"M11.004 19.004L9.242 20.762C7.59 22.414 4.902 22.414 3.246 20.762L3.242 20.758C1.59 19.102 1.59 16.414 3.242 14.762L8.004 10C9.66 8.344 12.344 8.344 14 10L14.004 10.004","key":"0"}),
    createElement('path', {"d":"M13.004 5.004L14.762 3.242C16.414 1.59 19.102 1.59 20.758 3.242L20.762 3.246C22.414 4.902 22.414 7.59 20.762 9.242L16 14.004C14.344 15.66 11.66 15.66 10.004 14.004L10 14","key":"1"})
  );
});

LinkSlanted.displayName = 'LinkSlanted';

export default LinkSlanted;
export { LinkSlanted };

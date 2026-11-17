import { createElement, forwardRef } from 'react';

const PlusCircleStackArcLeft = forwardRef(function PlusCircleStackArcLeft(
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
    createElement('path', {"d":"M22 12C22 15.867 18.867 19 15 19C11.133 19 8 15.867 8 12C8 8.133 11.133 5 15 5C18.867 5 22 8.133 22 12Z","key":"0"}),
    createElement('path', {"d":"M4.059 5C2.762 7.023 2 9.422 2 12C2 14.578 2.762 16.977 4.059 19","key":"1"}),
    createElement('path', {"d":"M15 9L15 15","key":"2"}),
    createElement('path', {"d":"M18 12L12 12","key":"3"})
  );
});

PlusCircleStackArcLeft.displayName = 'PlusCircleStackArcLeft';

export default PlusCircleStackArcLeft;
export { PlusCircleStackArcLeft };

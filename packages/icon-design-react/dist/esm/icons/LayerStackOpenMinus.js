import { createElement, forwardRef } from 'react';

const LayerStackOpenMinus = forwardRef(function LayerStackOpenMinus(
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
    createElement('path', {"d":"M12 12L2 7L12 2L22 7Z","key":"0"}),
    createElement('path', {"d":"M7 9.5L2 12L12 17","key":"1"}),
    createElement('path', {"d":"M22 12L17 9.5","key":"2"}),
    createElement('path', {"d":"M7 14.5L2 17L12 22","key":"3"}),
    createElement('path', {"d":"M15 18L22 18","key":"4"})
  );
});

LayerStackOpenMinus.displayName = 'LayerStackOpenMinus';

export default LayerStackOpenMinus;
export { LayerStackOpenMinus };

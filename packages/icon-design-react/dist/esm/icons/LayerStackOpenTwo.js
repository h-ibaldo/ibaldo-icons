import { createElement, forwardRef } from 'react';

const LayerStackOpenTwo = forwardRef(function LayerStackOpenTwo(
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
    createElement('path', {"d":"M12 2L2 8L12 14L22 8Z","key":"0"}),
    createElement('path', {"d":"M18.668 14L22 16L12 22L2 16L5.332 14","key":"1"})
  );
});

LayerStackOpenTwo.displayName = 'LayerStackOpenTwo';

export default LayerStackOpenTwo;
export { LayerStackOpenTwo };

import { createElement, forwardRef } from 'react';

const PencilAngular = forwardRef(function PencilAngular(
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
    createElement('polygon', {"points":"22 6.085786445528356 18 2.085786445528356 2 18.085786445528356 2.00000000036016 22.085786445168196 6.00000000036016 22.085786445168196 22 6.085786445528356","key":"0"}),
    createElement('line', {"x1":"14.99999999963984","y1":"5.085786445168196","x2":"19","y2":"9.085786445528356","key":"1"})
  );
});

PencilAngular.displayName = 'PencilAngular';

export default PencilAngular;
export { PencilAngular };

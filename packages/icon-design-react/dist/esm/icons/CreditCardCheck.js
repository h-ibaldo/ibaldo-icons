import { createElement, forwardRef } from 'react';

const CreditCardCheck = forwardRef(function CreditCardCheck(
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
    createElement('path', {"d":"M11 19L4 19C2.895 19 2 18.105 2 17L2 7C2 5.895 2.895 5 4 5L20 5C21.105 5 22 5.895 22 7L22 12","key":"0"}),
    createElement('path', {"d":"M2 9L22 9","key":"1"}),
    createElement('path', {"d":"M15 18L17 20L21 16","key":"2"})
  );
});

CreditCardCheck.displayName = 'CreditCardCheck';

export default CreditCardCheck;
export { CreditCardCheck };

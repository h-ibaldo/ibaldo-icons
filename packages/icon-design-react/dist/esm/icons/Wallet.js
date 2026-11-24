import { createElement, forwardRef } from 'react';

const Wallet = forwardRef(function Wallet(
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
    createElement('path', {"d":"M2 6C2 7.656 3.344 9 5 9L19 9C20.656 9 22 10.344 22 12L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 6C2 4.344 3.344 3 5 3L14.664 3","key":"0"}),
    createElement('path', {"d":"M3 8L15.16 2.789C16.176 2.352 17.352 2.824 17.789 3.84L20 9","key":"1"}),
    createElement('path', {"d":"M17 15.5C17 15.223 17.223 15 17.5 15C17.777 15 18 15.223 18 15.5C18 15.777 17.777 16 17.5 16C17.223 16 17 15.777 17 15.5Z","key":"2"})
  );
});

Wallet.displayName = 'Wallet';

export default Wallet;
export { Wallet };

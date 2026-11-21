import { createElement, forwardRef } from 'react';

const WalletPocketLines = forwardRef(function WalletPocketLines(
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
    createElement('path', {"d":"M5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2Z","key":"0"}),
    createElement('path', {"d":"M2 14L7.5 14C8.328 14 9 14.672 9 15.5C9 16.328 9.672 17 10.5 17L13.5 17C14.328 17 15 16.328 15 15.5C15 14.672 15.672 14 16.5 14L22 14","key":"1"}),
    createElement('path', {"d":"M2 10L22 10","key":"2"}),
    createElement('path', {"d":"M2 6L22 6","key":"3"})
  );
});

WalletPocketLines.displayName = 'WalletPocketLines';

export default WalletPocketLines;
export { WalletPocketLines };

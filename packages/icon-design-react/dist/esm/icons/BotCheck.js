import { createElement, forwardRef } from 'react';

const BotCheck = forwardRef(function BotCheck(
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
    createElement('path', {"d":"M8 12L9 12L9 15L8 15Z","key":"0"}),
    createElement('path', {"d":"M15 12L16 12L16 15L15 15Z","key":"1"}),
    createElement('path', {"d":"M3.414 16L2 16L2 12L3.387 12","key":"2"}),
    createElement('path', {"d":"M20.586 12.051C20.582 12.031 20.578 12.016 20.574 12L22 12L22 14L21 14","key":"3"}),
    createElement('path', {"d":"M12 7L12 3","key":"4"}),
    createElement('path', {"d":"M11 3C11 2.449 11.449 2 12 2C12.551 2 13 2.449 13 3C13 3.551 12.551 4 12 4C11.449 4 11 3.551 11 3Z","key":"5"}),
    createElement('path', {"d":"M16 20L18 22L22 18","key":"6"}),
    createElement('path', {"d":"M13 20.363C11.074 20.453 9.141 20.266 7.254 19.801L6.941 19.727C5.148 19.281 3.773 17.84 3.422 16.027C3.145 14.598 3.152 13.133 3.445 11.707C3.785 10.055 5.043 8.738 6.684 8.332L7.172 8.211C10.355 7.414 13.688 7.418 16.871 8.215L16.988 8.246C18.824 8.707 20.227 10.188 20.586 12.051C20.707 12.695 20.773 13.348 20.781 14","key":"7"})
  );
});

BotCheck.displayName = 'BotCheck';

export default BotCheck;
export { BotCheck };

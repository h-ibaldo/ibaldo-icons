import { createElement, forwardRef } from 'react';

const MailDotFolds = forwardRef(function MailDotFolds(
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
    createElement('path', {"d":"M15 19L3 19C2.449 19 2 18.551 2 18L2 6C2 5.449 2.449 5 3 5L21 5C21.551 5 22 5.449 22 6L22 13","key":"0"}),
    createElement('path', {"d":"M2.367 5.242L12 14L21.633 5.242","key":"1"}),
    createElement('path', {"d":"M9.801 12L2.367 18.758","key":"2"}),
    createElement('path', {"d":"M14.199 12L16.73 14.301","key":"3"}),
    createElement('path', {"d":"M18 18C18 16.895 18.895 16 20 16C21.105 16 22 16.895 22 18C22 19.105 21.105 20 20 20C18.895 20 18 19.105 18 18Z","key":"4"})
  );
});

MailDotFolds.displayName = 'MailDotFolds';

export default MailDotFolds;
export { MailDotFolds };

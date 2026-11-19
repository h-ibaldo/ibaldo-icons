import { createElement, forwardRef } from 'react';

const DownloadTrayStep = forwardRef(function DownloadTrayStep(
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
    createElement('path', {"d":"M17 11L12 16L7 11","key":"0"}),
    createElement('path', {"d":"M12 3L12 16","key":"1"}),
    createElement('path', {"d":"M22 18L19 18L19 21L5 21L5 18L2 18","key":"2"})
  );
});

DownloadTrayStep.displayName = 'DownloadTrayStep';

export default DownloadTrayStep;
export { DownloadTrayStep };

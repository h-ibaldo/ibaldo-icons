import { createElement, forwardRef } from 'react';

const UploadTrayStep = forwardRef(function UploadTrayStep(
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
    createElement('path', {"d":"M7 8L12 3L17 8","key":"0"}),
    createElement('path', {"d":"M12 16L12 3","key":"1"}),
    createElement('path', {"d":"M22 18L19 18L19 21L5 21L5 18L2 18","key":"2"})
  );
});

UploadTrayStep.displayName = 'UploadTrayStep';

export default UploadTrayStep;
export { UploadTrayStep };

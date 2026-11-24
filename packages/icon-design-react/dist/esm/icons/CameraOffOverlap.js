import { createElement, forwardRef } from 'react';

const CameraOffOverlap = forwardRef(function CameraOffOverlap(
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
    createElement('path', {"d":"M4 6L7 6L9 3L15 3L17 6L20 6C21.105 6 22 6.895 22 8L22 18C22 19.105 21.105 20 20 20L4 20C2.895 20 2 19.105 2 18L2 8C2 6.895 2.895 6 4 6Z","key":"0"}),
    createElement('path', {"d":"M7.5 12.5C7.5 10.016 9.516 8 12 8C14.484 8 16.5 10.016 16.5 12.5C16.5 14.984 14.484 17 12 17C9.516 17 7.5 14.984 7.5 12.5Z","key":"1"}),
    createElement('path', {"d":"M22 2L2 22","key":"2"})
  );
});

CameraOffOverlap.displayName = 'CameraOffOverlap';

export default CameraOffOverlap;
export { CameraOffOverlap };

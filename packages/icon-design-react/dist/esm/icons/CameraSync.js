import { createElement, forwardRef } from 'react';

const CameraSync = forwardRef(function CameraSync(
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
    createElement('path', {"d":"M4 6L7 6L9 3L15 3L17 6L20 6C21.105 6 22 6.895 22 8L22 19C22 20.105 21.105 21 20 21L4 21C2.895 21 2 20.105 2 19L2 8C2 6.895 2.895 6 4 6Z","key":"0"}),
    createElement('path', {"d":"M13.984 17.59C13.379 17.855 12.707 18 12 18C9.238 18 7 15.762 7 13C7 12.465 7.086 11.949 7.242 11.465","key":"1"}),
    createElement('path', {"d":"M9.996 8.418C10.609 8.148 11.285 8 12 8C14.762 8 17 10.238 17 13C17 13.559 16.91 14.094 16.742 14.594","key":"2"}),
    createElement('path', {"d":"M14.586 12.414L17 14.828L19.414 12.414","key":"3"}),
    createElement('path', {"d":"M9.414 13.586L7 11.172L4.586 13.586","key":"4"})
  );
});

CameraSync.displayName = 'CameraSync';

export default CameraSync;
export { CameraSync };

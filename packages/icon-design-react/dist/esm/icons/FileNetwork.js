import { createElement, forwardRef } from 'react';

const FileNetwork = forwardRef(function FileNetwork(
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
    createElement('path', {"d":"M19 16L19 7.828C19 7.298 18.789 6.789 18.414 6.414L14.586 2.586C14.211 2.211 13.702 2 13.172 2L7 2C5.895 2 5 2.895 5 4L5 16C5 17.105 5.895 18 7 18L17 18C18.105 18 19 17.105 19 16Z","key":"0"}),
    createElement('path', {"d":"M13 2L13 7C13 7.552 13.448 8 14 8L19 8","key":"1"}),
    createElement('path', {"d":"M4 22L20 22","key":"2"}),
    createElement('path', {"d":"M12 18L12 22","key":"3"})
  );
});

FileNetwork.displayName = 'FileNetwork';

export default FileNetwork;
export { FileNetwork };

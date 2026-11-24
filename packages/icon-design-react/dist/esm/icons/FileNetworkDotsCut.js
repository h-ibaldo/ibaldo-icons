import { createElement, forwardRef } from 'react';

const FileNetworkDotsCut = forwardRef(function FileNetworkDotsCut(
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
    createElement('path', {"d":"M7 22L17 22","key":"0"}),
    createElement('path', {"d":"M12 18L12 22","key":"1"}),
    createElement('path', {"d":"M7 18L17 18C18.105 18 19 17.105 19 16L19 7.243C19 6.447 18.684 5.684 18.121 5.121L15.879 2.879C15.316 2.316 14.553 2 13.757 2L7 2C5.895 2 5 2.895 5 4L5 16C5 17.105 5.895 18 7 18Z","key":"2"}),
    createElement('path', {"d":"M4 22L4 22","key":"3"}),
    createElement('path', {"d":"M20 22L20 22","key":"4"})
  );
});

FileNetworkDotsCut.displayName = 'FileNetworkDotsCut';

export default FileNetworkDotsCut;
export { FileNetworkDotsCut };

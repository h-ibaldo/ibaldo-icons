import { createElement, forwardRef } from 'react';

const FileFilterPlain = forwardRef(function FileFilterPlain(
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
    createElement('path', {"d":"M12 13.034L22 13.034L22 14.553C22 14.857 21.862 15.144 21.625 15.334L17 19.034L12.375 15.334C12.138 15.144 12 14.857 12 14.553L12 13.034Z","key":"0"}),
    createElement('path', {"d":"M17 19.034L17 22.034","key":"1"}),
    createElement('path', {"d":"M20 9.034L20 4.034C20 2.929 19.105 2.034 18 2.034L6 2.034C4.895 2.034 4 2.929 4 4.034L4 20.034C4 21.138 4.895 22.034 6 22.034L12 22.034","key":"2"})
  );
});

FileFilterPlain.displayName = 'FileFilterPlain';

export default FileFilterPlain;
export { FileFilterPlain };

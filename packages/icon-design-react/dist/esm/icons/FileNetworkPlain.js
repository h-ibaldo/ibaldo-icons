import { createElement, forwardRef } from 'react';

const FileNetworkPlain = forwardRef(function FileNetworkPlain(
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
    createElement('path', {"d":"M4 22.034L20 22.034","key":"0"}),
    createElement('path', {"d":"M12 18.034L12 22.034","key":"1"}),
    createElement('path', {"d":"M7 18.034L17 18.034C18.105 18.034 19 17.138 19 16.034L19 4.034C19 2.929 18.105 2.034 17 2.034L7 2.034C5.895 2.034 5 2.929 5 4.034L5 16.034C5 17.138 5.895 18.034 7 18.034Z","key":"2"})
  );
});

FileNetworkPlain.displayName = 'FileNetworkPlain';

export default FileNetworkPlain;
export { FileNetworkPlain };

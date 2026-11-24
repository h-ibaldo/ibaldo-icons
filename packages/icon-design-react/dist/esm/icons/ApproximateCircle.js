import { createElement, forwardRef } from 'react';

const ApproximateCircle = forwardRef(function ApproximateCircle(
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
    createElement('path', {"d":"M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z","key":"0"}),
    createElement('path', {"d":"M7 9.918L7.434 9.594C8.824 8.551 10.77 8.688 12 9.918C13.23 11.148 15.176 11.285 16.566 10.242L17 9.918","key":"1"}),
    createElement('path', {"d":"M7 14.516L7.434 14.188C8.824 13.145 10.77 13.285 12 14.516C13.23 15.742 15.176 15.883 16.566 14.84L17 14.516","key":"2"})
  );
});

ApproximateCircle.displayName = 'ApproximateCircle';

export default ApproximateCircle;
export { ApproximateCircle };

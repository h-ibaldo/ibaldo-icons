import { createElement, forwardRef } from 'react';

const WindowPlain2 = forwardRef(function WindowPlain2(
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
    createElement('rect', {"x":"1.999999993642632","y":"1.998779303639822","width":"20","height":"20","rx":"3","ry":"3","key":"0"}),
    createElement('line', {"x1":"1.999999993642632","y1":"7.998779303639822","x2":"21.999999993642632","y2":"7.998779303639822","key":"1"})
  );
});

WindowPlain2.displayName = 'WindowPlain2';

export default WindowPlain2;
export { WindowPlain2 };

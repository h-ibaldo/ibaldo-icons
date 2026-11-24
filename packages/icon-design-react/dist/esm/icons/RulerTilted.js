import { createElement, forwardRef } from 'react';

const RulerTilted = forwardRef(function RulerTilted(
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
    createElement('path', {"d":"M8.465 2.809L21.191 15.535C21.582 15.926 21.582 16.559 21.191 16.949L16.949 21.191C16.559 21.582 15.926 21.582 15.535 21.191L2.809 8.465C2.418 8.074 2.418 7.441 2.809 7.051L7.051 2.809C7.441 2.418 8.074 2.418 8.465 2.809Z","key":"0"}),
    createElement('path', {"d":"M8.465 7.051L10.586 4.93","key":"1"}),
    createElement('path', {"d":"M11.293 9.879L13.414 7.758","key":"2"}),
    createElement('path', {"d":"M14.121 12.707L16.242 10.586","key":"3"}),
    createElement('path', {"d":"M16.949 15.535L19.07 13.414","key":"4"})
  );
});

RulerTilted.displayName = 'RulerTilted';

export default RulerTilted;
export { RulerTilted };

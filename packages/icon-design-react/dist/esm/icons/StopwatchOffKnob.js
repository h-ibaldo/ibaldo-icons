import { createElement, forwardRef } from 'react';

const StopwatchOffKnob = forwardRef(function StopwatchOffKnob(
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
    createElement('path', {"d":"M10 2L14 2","key":"0"}),
    createElement('path', {"d":"M20 5L22 7","key":"1"}),
    createElement('path', {"d":"M21 6L18.563 8.438","key":"2"}),
    createElement('path', {"d":"M4 5L21 21","key":"3"}),
    createElement('path', {"d":"M19.75 14.953C19.906 14.328 20 13.676 20 13C20 8.582 16.418 5 12 5C11.145 5 10.32 5.137 9.547 5.387","key":"4"}),
    createElement('path', {"d":"M6.391 7.301C4.914 8.754 4 10.77 4 13C4 17.418 7.582 21 12 21C14.418 21 16.578 19.922 18.043 18.23","key":"5"})
  );
});

StopwatchOffKnob.displayName = 'StopwatchOffKnob';

export default StopwatchOffKnob;
export { StopwatchOffKnob };

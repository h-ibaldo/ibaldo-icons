import { createElement, forwardRef } from 'react';

const UtilityKnife = forwardRef(function UtilityKnife(
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
    createElement('path', {"d":"M21 6L17 2L5 14L9 18Z","key":"0"}),
    createElement('path', {"d":"M8.5 17.5L4 22L3 17L5.5 14.5","key":"1"}),
    createElement('path', {"d":"M18 9L14 5","key":"2"}),
    createElement('path', {"d":"M13 10L14 9","key":"3"})
  );
});

UtilityKnife.displayName = 'UtilityKnife';

export default UtilityKnife;
export { UtilityKnife };

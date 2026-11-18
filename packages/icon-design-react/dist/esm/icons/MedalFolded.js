import { createElement, forwardRef } from 'react';

const MedalFolded = forwardRef(function MedalFolded(
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
    createElement('path', {"d":"M16 18C16 20.211 14.211 22 12 22C9.789 22 8 20.211 8 18C8 15.789 9.789 14 12 14C14.211 14 16 15.789 16 18Z","key":"0"}),
    createElement('path', {"d":"M9 11L15 11L21 4.5L17 2Z","key":"1"}),
    createElement('path', {"d":"M12 7.625L7 2L3 4.5L9 11","key":"2"})
  );
});

MedalFolded.displayName = 'MedalFolded';

export default MedalFolded;
export { MedalFolded };

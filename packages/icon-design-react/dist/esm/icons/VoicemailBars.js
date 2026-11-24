import { createElement, forwardRef } from 'react';

const VoicemailBars = forwardRef(function VoicemailBars(
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
    createElement('path', {"d":"M10 12C10 14.211 8.211 16 6 16C3.789 16 2 14.211 2 12C2 9.789 3.789 8 6 8C8.211 8 10 9.789 10 12Z","key":"0"}),
    createElement('path', {"d":"M22 12C22 14.211 20.211 16 18 16C15.789 16 14 14.211 14 12C14 9.789 15.789 8 18 8C20.211 8 22 9.789 22 12Z","key":"1"}),
    createElement('path', {"d":"M18 16L6 16","key":"2"}),
    createElement('path', {"d":"M22 22L2 22","key":"3"}),
    createElement('path', {"d":"M22 2L2 2","key":"4"})
  );
});

VoicemailBars.displayName = 'VoicemailBars';

export default VoicemailBars;
export { VoicemailBars };

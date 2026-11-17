import { createElement, forwardRef } from 'react';

const ClipboardPulse = forwardRef(function ClipboardPulse(
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
    createElement('g', {"key":"0"},
      createElement('path', {"d":"M20.999999990599463,18.000000005169568v2c0,1.104569499661011-.895430500329894,2-2,2H4.999999990599463c-1.104569499659192,0-2-.895430500338989-2-2V6.000000005169568c0-1.104569499661011.895430500340808-2,2-2h3","key":"0"}),
      createElement('path', {"d":"M15.999999990599463,4.000000005169568h3c1.104569499670106,0,2,.895430500338989,2,2v4","key":"1"}),
      createElement('rect', {"x":"7.999999990599463","y":"2.000000005169568","width":"8","height":"5","rx":"1.11803398874963","ry":"1.11803398874963","key":"2"})),
    createElement('polyline', {"points":"20.999999990599463 14.000000005707989 16.999999990599463 14.000000005347829 14.999999990599463 18.000000005169568 10.999999990870492 11.000000005169568 8.999999990599463 14.000000004627509 6.999999990599463 14.000000004270987","key":"1"})
  );
});

ClipboardPulse.displayName = 'ClipboardPulse';

export default ClipboardPulse;
export { ClipboardPulse };

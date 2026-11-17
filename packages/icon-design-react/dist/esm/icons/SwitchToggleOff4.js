import { createElement, forwardRef } from 'react';

const SwitchToggleOff4 = forwardRef(function SwitchToggleOff4(
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
    createElement('rect', {"x":"2.000000211455358","y":"4.99999675957163","width":"19.999999999963393","height":"14.000000020118108","rx":"6.999993018822535","ry":"6.999993018822535","key":"0"}),
    createElement('circle', {"cx":"8.999999977098923","cy":"11.999996563434252","r":"3","key":"1"})
  );
});

SwitchToggleOff4.displayName = 'SwitchToggleOff4';

export default SwitchToggleOff4;
export { SwitchToggleOff4 };

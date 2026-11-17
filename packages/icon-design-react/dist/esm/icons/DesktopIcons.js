import { createElement, forwardRef } from 'react';

const DesktopIcons = forwardRef(function DesktopIcons(
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
    createElement('rect', {"x":"2.02526851296625","y":"1.99756205212816","width":"20.000000000004093","height":"20","rx":".999999999997345","ry":".999999999997345","transform":"translate(24.050537025330378 23.995124104863933) rotate(-180)","key":"0"}),
    createElement('line', {"x1":"22.025268508705267","y1":"17.997562036317504","x2":"2.025268508705267","y2":"17.997562036317504","key":"1"}),
    createElement('rect', {"x":"6.025268508705267","y":"5.997562036317504","width":"2","height":"2","key":"2"}),
    createElement('rect', {"x":"6.025268508705267","y":"11.997562036317504","width":"2","height":"2","key":"3"})
  );
});

DesktopIcons.displayName = 'DesktopIcons';

export default DesktopIcons;
export { DesktopIcons };

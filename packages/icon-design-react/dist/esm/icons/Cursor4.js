import { createElement, forwardRef } from 'react';

const Cursor4 = forwardRef(function Cursor4(
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
    createElement('path', {"d":"M13.371017357860183,21.970769791338171l-3.320249094680548-7.147289053280474-3.25235543223971,2.504538015251455c-.326061471969297.251089823628718-.798424813170641.01865185475981-.798424813170641-.392884514261823l-.000000000020009-14.467532943090191c0-.422629289139877.494839852661244-.651542846688244.816930237660927-.377912987329182l11.007885083879955,9.351679490071547c.313521727510306.266350410329323.185064398920076.776631717768396-.217197742520511.862791942177864l-3.959071670999037.847990572499839,3.320249094669634,7.147289053282293-3.597765662580059,1.671330424678672Z","key":"0"})
  );
});

Cursor4.displayName = 'Cursor4';

export default Cursor4;
export { Cursor4 };

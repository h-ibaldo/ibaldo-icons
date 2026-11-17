import { createElement, forwardRef } from 'react';

const Mailbox2 = forwardRef(function Mailbox2(
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
    createElement('path', {"d":"M5.945388102852532,2.000000000610044h.00000799734599c2.20765788736098,0,3.999995994646056,1.792338107285076,3.999995994646056,3.999995994646056v10.000004004742081H1.945392088651602V5.999996014810974c0-2.207657898153609,1.792338116047322-3.999996014200931,3.999996014200931-3.999996014200931Z","key":"0"}),
    createElement('path', {"d":"M9.945392090279711,15.999999999998181h12V5.999995999998646c0-2.209136790181219-1.790859209819246-3.999996000000465-3.999995999999555-3.999996000000465H5.945392090279711","key":"1"}),
    createElement('line', {"x1":"4.945392090279711","y1":"6.999999999998181","x2":"6.945392090279711","y2":"6.999999999998181","key":"2"}),
    createElement('polyline', {"points":"13.945392090279711 7.999999999998181 17.945392090279711 7.999999999998181 17.945392090279711 10.999999999998181 16.945392090279711 10.999999999998181 16.945392090279711 7.999999999998181","key":"3"}),
    createElement('line', {"x1":"9.945392090279711","y1":"21.999999999998181","x2":"9.945392090279711","y2":"15.999999999998181","key":"4"}),
    createElement('line', {"x1":"13.945392090279711","y1":"21.999999999998181","x2":"13.945392090279711","y2":"15.999999999998181","key":"5"})
  );
});

Mailbox2.displayName = 'Mailbox2';

export default Mailbox2;
export { Mailbox2 };

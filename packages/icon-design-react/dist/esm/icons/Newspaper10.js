import { createElement, forwardRef } from 'react';

const Newspaper10 = forwardRef(function Newspaper10(
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
    createElement('path', {"d":"M5.999988094670698,17.936828613277612V5.936826619197745c0-1.104568398359334-.8954296075608-1.999998005920133-1.999998005920133-1.999998005920133h-.000004000001354c-1.1045683937391,0-1.999997999379048.895429600350326-1.999998005920133,1.999997994080331l-.000000065079803,12.000005905340004c-.000000013069439,2.209136841900545,1.79085923501043,3.999996100579665,3.99999607692007,3.999996100579665h.000007999989975c2.209136833531375,0,3.999996074689989-1.790859252119844,3.999996061180354-3.999996085640305l-.000000061168976-16.000003914359695h11.999999923078576v17c0,1.656854249489697-1.343145750508484,3-3,3H5.999988094670698","key":"0"}),
    createElement('line', {"x1":"9.999988017749274","y1":"3.936828613277612","x2":"3.999988017749274","y2":"3.936828613277612","key":"1"}),
    createElement('rect', {"x":"13.999988018109434","y":"5.936828613279431","width":"4","height":"4","transform":"translate(31.99997603550424 15.873657227999498) rotate(-180)","key":"2"}),
    createElement('line', {"x1":"17.999988017571013","y1":"13.936828613459511","x2":"13.999988017571013","y2":"13.936828613099351","key":"3"}),
    createElement('line', {"x1":"17.999988017210853","y1":"17.936828613459511","x2":"13.999988017210853","y2":"17.936828613099351","key":"4"})
  );
});

Newspaper10.displayName = 'Newspaper10';

export default Newspaper10;
export { Newspaper10 };

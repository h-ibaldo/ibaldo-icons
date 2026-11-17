import { createElement, forwardRef } from 'react';

const ConnectRandom1 = forwardRef(function ConnectRandom1(
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
    createElement('circle', {"cx":"5","cy":"9.999999999998181","r":"3","key":"0"}),
    createElement('circle', {"cx":"13","cy":"18.999999999998181","r":"3","key":"1"}),
    createElement('circle', {"cx":"19","cy":"4.999999999998181","r":"3","key":"2"}),
    createElement('line', {"x1":"14.181396484380457","y1":"16.243164062498181","x2":"17.818603515630457","y2":"7.756835937498181","key":"3"}),
    createElement('line', {"x1":"6.9853515625","y1":"12.233520507808862","x2":"11.0146484375","y2":"16.766479492188409","key":"4"})
  );
});

ConnectRandom1.displayName = 'ConnectRandom1';

export default ConnectRandom1;
export { ConnectRandom1 };

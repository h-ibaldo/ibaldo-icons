import { createElement, forwardRef } from 'react';

const Bell5CheckCircle = forwardRef(function Bell5CheckCircle(
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
    createElement('line', {"x1":"18.000000004469257","y1":"17.000000003885361","x2":"2.000000004469257","y2":"17.000000003885361","key":"0"}),
    createElement('line', {"x1":"8.000000004469257","y1":"21.000000003885361","x2":"12.000000004469257","y2":"21.000000003885361","key":"1"}),
    createElement('circle', {"cx":"16.50000000688442","cy":"7.50000000145792","r":"5.499999997576424","key":"2"}),
    createElement('path', {"d":"M12.615722660719257,3.606445316385361c-.791442871088293-.384521484367724-1.676635742200233-.6064453125-2.61572265625-.6064453125-3.313720703128638,0-6,2.686279296882276-6,6v8","key":"3"}),
    createElement('line', {"x1":"16.000000004469257","y1":"17.000000003885361","x2":"16.000000004469257","y2":"12.974853519517637","key":"4"}),
    createElement('path', {"d":"M14.500000006899427,7.172000064867461l.689762140340463,1.379524280710029c.152624547199594.305249094388273.559446388109791.371267190839717.800766986099916.129946592838678l2.509470873559621-2.509470873548707","key":"5"})
  );
});

Bell5CheckCircle.displayName = 'Bell5CheckCircle';

export default Bell5CheckCircle;
export { Bell5CheckCircle };

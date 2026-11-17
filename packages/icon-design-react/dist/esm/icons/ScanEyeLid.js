import { createElement, forwardRef } from 'react';

const ScanEyeLid = forwardRef(function ScanEyeLid(
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
    createElement('path', {"d":"M2,7v-2.000000000134605c0-1.656854249493335,1.343145750510303-3,3-3h2","key":"0"}),
    createElement('path', {"d":"M21.999999999869033,7.000000000134605l.000000000130967-2.000000000134605c.000000000080036-1.656854249493335-1.34314575037024-3.000000000061846-2.999999999859938-3.000000000134605l-2.000000000140062-.000000000134605","key":"1"}),
    createElement('path', {"d":"M2,17v2.000000000134605c0,1.656854249489697,1.343145750510303,3,3,3h2","key":"2"}),
    createElement('path', {"d":"M21.999999999869033,16.999999999865395l.000000000130967,2.000000000134605c.000000000080036,1.656854249493335-1.34314575037024,3.000000000058208-2.999999999859938,3.000000000134605l-2.000000000140062.000000000134605","key":"3"}),
    createElement('path', {"d":"M3.999999946599928,13.000000000265572c1.167173081099463-2.911020914711116,4.303385524779515-4.999999999996362,8.000000026700945-4.999999999996362,3.696614501919612,0,6.832826945608758,2.088979085285246,8.000000026699126,4.999999999996362","key":"4"}),
    createElement('circle', {"cx":"12","cy":"12.000000000268301","r":"3.999999999998636","key":"5"})
  );
});

ScanEyeLid.displayName = 'ScanEyeLid';

export default ScanEyeLid;
export { ScanEyeLid };

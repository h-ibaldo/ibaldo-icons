import { createElement, forwardRef } from 'react';

const Antenna = forwardRef(function Antenna(
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
    createElement('circle', {"cx":"12.025268535970099","cy":"10.999996563432433","r":"1","key":"0"}),
    createElement('polyline', {"points":"17.025268535970099 21.999996563432433 12.025268535970099 10.999996563432433 7.025268535970099 21.999996563432433","key":"1"}),
    createElement('path', {"d":"M18.365661602379987,17.385311504838683c1.641906738279431-1.63043212890625,2.659606933590112-3.88861083984375,2.659606933590112-6.38531494140625,0-4.9705810546875-4.029418945310681-9-9-9C7.054687481278961,1.999996563432433,3.025268535970099,6.029415508744933,3.025268535970099,10.999996563432433c0,2.4967041015625,1.017700195308862,4.7548828125,2.659606933590112,6.38531494140625","key":"2"}),
    createElement('path', {"d":"M16.435058575028961,13.309627911088683c.364379882801586-.69378662109375.590209960941138-1.4715576171875.590209960941138-2.30963134765625,0-2.76141357421875-2.238586425779431-5-5-5s-5,2.23858642578125-5,5c0,.83807373046875.225830078110448,1.6158447265625.590209960939319,2.30963134765625","key":"3"})
  );
});

Antenna.displayName = 'Antenna';

export default Antenna;
export { Antenna };

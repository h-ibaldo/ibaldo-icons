import { createElement, forwardRef } from 'react';

const LockEyeAlt = forwardRef(function LockEyeAlt(
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
    createElement('rect', {"x":"14.442565914081456","y":"16.499999995421661","width":"1.999999981557494","height":"2.000000002731099","rx":".999998985672644","ry":".999998985672644","key":"0"}),
    createElement('path', {"d":"M15.442565917459433,13.000000003892637c-2.98388671875,0-5.524841308599207,1.87042236328125-6.532165527349207,4.5,1.00732421875,2.62957763671875,3.548278808599207,4.5,6.532165527349207,4.5s5.524841308590112-1.87042236328125,6.532165527340112-4.5c-1.00732421875-2.62957763671875-3.548278808590112-4.5-6.532165527340112-4.5Z","key":"1"}),
    createElement('path', {"d":"M5.410400390110226,19.000000003892637h-2c-.552284749830505,0-1-.447715250171314-1-1v-8c0-.552284749832324.447715250169495-1,1-1h12c.552284749829596,0,1,.447715250167676,1,1","key":"2"}),
    createElement('path', {"d":"M14.410400390110226,9.000000003892637v-2.000005000005331c0-2.761420987728343-2.23857401225996-4.999994999994669-4.999994999990122-4.999994999994669h-.000010000000657c-2.761420987719248,0-4.999994999979208,2.238574012248137-4.999994999999217,4.999994999965566l-.000000000010004,2.000005000034434","key":"3"})
  );
});

LockEyeAlt.displayName = 'LockEyeAlt';

export default LockEyeAlt;
export { LockEyeAlt };

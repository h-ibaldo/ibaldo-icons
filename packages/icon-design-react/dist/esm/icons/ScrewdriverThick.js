import { createElement, forwardRef } from 'react';

const ScrewdriverThick = forwardRef(function ScrewdriverThick(
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
    createElement('path', {"d":"M21.99999999360989,3.998779303362426l-2-2.000000000390173-5.447213595520225,2.723606797961111c-.338784028261216.169392014140612-.552786404479775.515655132549-.552786404479775.894427190989518v4.381966011439545h4.38196601124946c.378772058460527,0,.725035176870733-.214002376230383.894427191000432-.552786404500694l2.723606797750108-5.447213595499306Z","key":"0"}),
    createElement('rect', {"x":"2.342715903598524","y":"13.756749377858331","width":"10.142994484823632","height":"5.656854252860196","rx":"2.828424569641079","ry":"2.828424569641079","transform":"translate(-9.557165436867837 10.103591416557387) rotate(-45.011024112011484)","key":"1"}),
    createElement('line', {"x1":"13.99999999360989","y1":"9.998779303362426","x2":"10.999997993640136","y2":"12.998781303413125","key":"2"})
  );
});

ScrewdriverThick.displayName = 'ScrewdriverThick';

export default ScrewdriverThick;
export { ScrewdriverThick };

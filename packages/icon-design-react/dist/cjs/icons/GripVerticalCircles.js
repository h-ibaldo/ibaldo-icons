'use strict';

const { createElement, forwardRef } = require('react');

const GripVerticalCircles = forwardRef(function GripVerticalCircles(
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
    createElement('rect', {"x":"14.025268555345889","y":"1.998782717471784","width":"4.000000007767255","height":"4.000000024264523","rx":"1.999998015882494","ry":"1.999998015882494","transform":"translate(20.024051187757561 -12.02648585484695) rotate(89.999999638618959)","key":"0"}),
    createElement('rect', {"x":"14.025268556594611","y":"9.99878271247411","width":"4.000000003110671","height":"4.00000003425987","rx":"1.999998000951978","ry":"1.999998000951978","transform":"translate(28.024051291103483 -4.026485826037998) rotate(90.000000011975573)","key":"1"}),
    createElement('rect', {"x":"14.025268550402117","y":"17.998782738901639","width":"4.000000013355162","height":"3.999999981404699","rx":"1.999998024345471","ry":"1.999998024345471","transform":"translate(36.024051083705473 3.973513919217012) rotate(89.999999274283937)","key":"2"}),
    createElement('rect', {"x":"6.025268556215536","y":"1.998782730657865","width":"4.00000000602796","height":"4.000000002844104","rx":"1.999998013671994","ry":"1.999998013671994","transform":"translate(12.024051266451528 -4.026485839535649) rotate(89.99999982252892)","key":"3"}),
    createElement('rect', {"x":"6.025268558861228","y":"9.998782724146793","width":"3.999999998577437","height":"4.000000015866249","rx":"1.999997987479853","ry":"1.999997987479853","transform":"translate(20.02405135737326 3.973514274317768) rotate(90.000000479365056)","key":"4"}),
    createElement('rect', {"x":"6.02526855406461","y":"17.998782728227411","width":"4.000000006027904","height":"4.000000007705012","rx":"1.999997988344322","ry":"1.999997988344322","transform":"translate(28.024051352927486 11.973514333912238) rotate(90.000000455273863)","key":"5"})
  );
});

GripVerticalCircles.displayName = 'GripVerticalCircles';

module.exports = GripVerticalCircles;
module.exports.GripVerticalCircles = GripVerticalCircles;
module.exports.default = GripVerticalCircles;

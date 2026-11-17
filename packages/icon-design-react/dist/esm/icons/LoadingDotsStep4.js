import { createElement, forwardRef } from 'react';

const LoadingDotsStep4 = forwardRef(function LoadingDotsStep4(
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
    createElement('rect', {"x":"2.999999948115767","y":"10.998779328660644","width":"1.999999978599257","height":"1.999999921545056","rx":".999402545212241","ry":".999402545212241","transform":"translate(-7.998780490768279 15.998775810942911) rotate(-89.99998368859336)","key":"0"}),
    createElement('rect', {"x":"10.999996417186196","y":"10.998779297442127","width":"1.999999978594019","height":"1.999999921584505","rx":".999402546153927","ry":".999402546153927","transform":"translate(.001217659446544 23.99877617586343) rotate(-90.000002440789984)","key":"1"}),
    createElement('rect', {"x":"17.99999641540478","y":"9.99877931043596","width":"3.999999936662107","height":"3.999999921421143","rx":"1.999999109019649","ry":"1.999999109019649","transform":"translate(31.998775906328149 -8.001216961737146) rotate(90.000000720339244)","key":"2"})
  );
});

LoadingDotsStep4.displayName = 'LoadingDotsStep4';

export default LoadingDotsStep4;
export { LoadingDotsStep4 };

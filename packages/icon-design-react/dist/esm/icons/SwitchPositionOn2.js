import { createElement, forwardRef } from 'react';

const SwitchPositionOn2 = forwardRef(function SwitchPositionOn2(
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
    createElement('rect', {"x":"1.999999980883217","y":"1.997562028564843","width":"4.000000029226157","height":"5.999999999986386","rx":"1.99999802217537","ry":"1.99999802217537","key":"0"}),
    createElement('line', {"x1":"19.999993373347024","y1":"1.997562035419833","x2":"19.999993373347024","y2":"7.997562035419833","key":"1"}),
    createElement('rect', {"x":"12.828427101769954","y":"10.169134910611001","width":"3.999999999999389","height":"5.999999999999728","rx":"1.000000000002721","ry":"1.000000000002721","transform":"translate(13.655130341023959 -6.628131045010132) rotate(44.999999998820854)","key":"2"}),
    createElement('path', {"d":"M14.581820159106428,10.587314728476485c-2.229777334619939-1.063724416202604-4.977973044180544-.678881205214566-6.824460869231189,1.167606619917933-2.343154380079795,2.343154380192573-2.34315437999976,6.142126994152932.000000000190994,8.485281374240003s6.142126994160208,2.34315437999976,8.485281374240003-.000000000189175c1.846487825050644-1.846487825132499,2.231331035909534-4.594683534713113,1.167606619610524-6.824460869283939","key":"3"})
  );
});

SwitchPositionOn2.displayName = 'SwitchPositionOn2';

export default SwitchPositionOn2;
export { SwitchPositionOn2 };

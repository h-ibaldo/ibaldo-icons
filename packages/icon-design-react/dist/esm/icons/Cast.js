import { createElement, forwardRef } from 'react';

const Cast = forwardRef(function Cast(
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
    createElement('path', {"d":"M4,19.999999999998181c0-1.104569499599165-.895430500400835-2-2-2","key":"0"}),
    createElement('path', {"d":"M8,19.999999999998181c0-3.313708498797496-2.686291501198866-6-6-6","key":"1"}),
    createElement('path', {"d":"M12,19.999999999998181c0-5.522847497999464-4.477152502000536-10-10-10","key":"2"}),
    createElement('path', {"d":"M16,19.999999999998181h4.000002000000677c1.104568395088791,0,1.999997999999323-.895429604905075,1.999997999999323-1.999997999999323V5.999997999997504c0-1.10456839509061-.895429604910532-1.999997999999323-1.999997999999323-1.999997999999323H3.999997999999323c-1.104568395088791,0-1.999997999999323.895429611206055-1.999997999999323,1.999997999999323v.000002000000677","key":"3"})
  );
});

Cast.displayName = 'Cast';

export default Cast;
export { Cast };

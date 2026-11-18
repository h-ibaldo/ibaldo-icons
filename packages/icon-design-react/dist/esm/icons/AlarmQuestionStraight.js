import { createElement, forwardRef } from 'react';

const AlarmQuestionStraight = forwardRef(function AlarmQuestionStraight(
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
    createElement('path', {"d":"M18 19L20 21","key":"0"}),
    createElement('path', {"d":"M6 19L4 21","key":"1"}),
    createElement('path', {"d":"M20 13C20 17.418 16.418 21 12 21C7.582 21 4 17.418 4 13C4 8.582 7.582 5 12 5C16.418 5 20 8.582 20 13Z","key":"2"}),
    createElement('path', {"d":"M17 2L21 5","key":"3"}),
    createElement('path', {"d":"M7 2L3 5","key":"4"}),
    createElement('path', {"d":"M10 11C10 9.895 10.895 9 12 9C13.105 9 14 9.895 14 11C14 11.641 13.746 12.254 13.293 12.707L12 14","key":"5"}),
    createElement('path', {"d":"M12 17L12 17","key":"6"})
  );
});

AlarmQuestionStraight.displayName = 'AlarmQuestionStraight';

export default AlarmQuestionStraight;
export { AlarmQuestionStraight };

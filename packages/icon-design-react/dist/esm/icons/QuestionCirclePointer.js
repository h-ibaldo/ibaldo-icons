import { createElement, forwardRef } from 'react';

const QuestionCirclePointer = forwardRef(function QuestionCirclePointer(
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
    createElement('path', {"d":"M12 8C12 6.895 12.895 6 14 6C15.105 6 16 6.895 16 8C16 8.641 15.746 9.254 15.293 9.707L14 11","key":"0"}),
    createElement('path', {"d":"M14 14L14 14","key":"1"}),
    createElement('path', {"d":"M22 10C22 5.582 18.418 2 14 2C9.582 2 6 5.582 6 10C6 14.418 9.582 18 14 18C18.418 18 22 14.418 22 10Z","key":"2"}),
    createElement('path', {"d":"M2.094 21.34L2.859 15.988C2.918 15.582 3.414 15.414 3.707 15.707L8.293 20.293C8.582 20.582 8.418 21.082 8.008 21.141L2.66 21.906C2.328 21.953 2.047 21.668 2.094 21.34Z","key":"3"})
  );
});

QuestionCirclePointer.displayName = 'QuestionCirclePointer';

export default QuestionCirclePointer;
export { QuestionCirclePointer };

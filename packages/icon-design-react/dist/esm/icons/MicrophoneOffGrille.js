import { createElement, forwardRef } from 'react';

const MicrophoneOffGrille = forwardRef(function MicrophoneOffGrille(
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
    createElement('path', {"d":"M12 18L12 21","key":"0"}),
    createElement('path', {"d":"M9 8L7 8","key":"1"}),
    createElement('path', {"d":"M17 12L14 12","key":"2"}),
    createElement('path', {"d":"M7 22L17 22","key":"3"}),
    createElement('path', {"d":"M4 18L20 2","key":"4"}),
    createElement('path', {"d":"M7.27 14.73C7.902 16.625 9.672 18 11.781 18L12.219 18C14.859 18 17 15.859 17 13.219L17 6.781C17 6.25 16.895 5.746 16.734 5.266","key":"5"}),
    createElement('path', {"d":"M14.434 2.566C13.77 2.215 13.023 2 12.219 2L11.781 2C9.141 2 7 4.141 7 6.781L7 10","key":"6"})
  );
});

MicrophoneOffGrille.displayName = 'MicrophoneOffGrille';

export default MicrophoneOffGrille;
export { MicrophoneOffGrille };

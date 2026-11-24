import { createElement, forwardRef } from 'react';

const MicrophoneOffBare = forwardRef(function MicrophoneOffBare(
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
    createElement('path', {"d":"M3 19L21 3","key":"0"}),
    createElement('path', {"d":"M9.152 13.531C9.887 14.422 10.984 15 12.227 15C14.438 15 16.227 13.211 16.227 11L16.227 7.242","key":"1"}),
    createElement('path', {"d":"M12.227 19L12.227 22","key":"2"}),
    createElement('path', {"d":"M15.215 3.363C14.48 2.535 13.422 2 12.227 2C10.02 2 8.227 3.793 8.227 6L8.227 9.578","key":"3"}),
    createElement('path', {"d":"M6.172 16.18C7.633 17.898 9.793 19 12.227 19C15.184 19 17.754 17.387 19.133 15","key":"4"})
  );
});

MicrophoneOffBare.displayName = 'MicrophoneOffBare';

export default MicrophoneOffBare;
export { MicrophoneOffBare };

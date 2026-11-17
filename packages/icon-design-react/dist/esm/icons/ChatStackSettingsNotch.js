import { createElement, forwardRef } from 'react';

const ChatStackSettingsNotch = forwardRef(function ChatStackSettingsNotch(
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
    createElement('path', {"d":"M19.098 2L13.902 2L11.305 6.5L13.902 11L19.098 11L21.695 6.5Z","key":"0"}),
    createElement('path', {"d":"M17.5 6.5C17.5 5.945 17.051 5.5 16.5 5.5C15.949 5.5 15.5 5.945 15.5 6.5C15.5 7.055 15.949 7.5 16.5 7.5C17.051 7.5 17.5 7.055 17.5 6.5Z","key":"1"}),
    createElement('path', {"d":"M10 2L4 2C2.895 2 2 2.895 2 4L2 12C2 13.105 2.895 14 4 14L5 14L5 18L10 14L12 14","key":"2"}),
    createElement('path', {"d":"M22 13L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L12 18","key":"3"})
  );
});

ChatStackSettingsNotch.displayName = 'ChatStackSettingsNotch';

export default ChatStackSettingsNotch;
export { ChatStackSettingsNotch };

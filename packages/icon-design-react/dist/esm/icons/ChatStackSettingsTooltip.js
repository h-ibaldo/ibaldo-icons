import { createElement, forwardRef } from 'react';

const ChatStackSettingsTooltip = forwardRef(function ChatStackSettingsTooltip(
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
    createElement('path', {"d":"M22 14L22 5C22 3.344 20.656 2 19 2L15 2","key":"0"}),
    createElement('path', {"d":"M10.098 2L4.902 2L2.305 6.5L4.902 11L10.098 11L12.695 6.5Z","key":"1"}),
    createElement('path', {"d":"M8.5 6.5C8.5 5.945 8.051 5.5 7.5 5.5C6.949 5.5 6.5 5.945 6.5 6.5C6.5 7.055 6.949 7.5 7.5 7.5C8.051 7.5 8.5 7.055 8.5 6.5Z","key":"2"}),
    createElement('path', {"d":"M2 13L2 15C2 16.656 3.344 18 5 18L7 18L10 22L13 18L15 18C16.656 18 18 16.656 18 15L18 9C18 8.117 17.609 7.332 17 6.785","key":"3"})
  );
});

ChatStackSettingsTooltip.displayName = 'ChatStackSettingsTooltip';

export default ChatStackSettingsTooltip;
export { ChatStackSettingsTooltip };

import { createElement, forwardRef } from 'react';

const ChatSettingsBroken = forwardRef(function ChatSettingsBroken(
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
    createElement('path', {"d":"M8 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L9 18","key":"0"}),
    createElement('path', {"d":"M22 13L22 15C22 16.656 20.656 18 19 18L15 18L12 22","key":"1"}),
    createElement('path', {"d":"M18.52 2L13.324 2L10.727 6.5L13.324 11L18.52 11L21.121 6.5Z","key":"2"}),
    createElement('path', {"d":"M16.922 6.5C16.922 5.949 16.477 5.5 15.922 5.5C15.371 5.5 14.922 5.949 14.922 6.5C14.922 7.051 15.371 7.5 15.922 7.5C16.477 7.5 16.922 7.051 16.922 6.5Z","key":"3"})
  );
});

ChatSettingsBroken.displayName = 'ChatSettingsBroken';

export default ChatSettingsBroken;
export { ChatSettingsBroken };

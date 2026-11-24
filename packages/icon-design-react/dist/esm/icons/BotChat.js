import { createElement, forwardRef } from 'react';

const BotChat = forwardRef(function BotChat(
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
    createElement('path', {"d":"M12 7L12 3","key":"0"}),
    createElement('path', {"d":"M11 3C11 2.449 11.449 2 12 2C12.551 2 13 2.449 13 3C13 3.551 12.551 4 12 4C11.449 4 11 3.551 11 3Z","key":"1"}),
    createElement('path', {"d":"M4 10L4 22L8 19L17 19C18.656 19 20 17.656 20 16L20 10C20 8.344 18.656 7 17 7L7 7C5.344 7 4 8.344 4 10Z","key":"2"}),
    createElement('path', {"d":"M20 11L22 11L22 15L20 15","key":"3"}),
    createElement('path', {"d":"M4 15L2 15L2 11L4 11","key":"4"}),
    createElement('path', {"d":"M8 11L9 11L9 12L8 12Z","key":"5"}),
    createElement('path', {"d":"M15 11L16 11L16 12L15 12Z","key":"6"}),
    createElement('path', {"d":"M10 15L10.293 15.293C10.746 15.746 11.359 16 12 16C12.641 16 13.254 15.746 13.707 15.293L14 15","key":"7"})
  );
});

BotChat.displayName = 'BotChat';

export default BotChat;
export { BotChat };

import { createElement, forwardRef } from 'react';

const ChatVoicemailBoxy = forwardRef(function ChatVoicemailBoxy(
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
    createElement('path', {"d":"M5 9.5C5 8.121 6.121 7 7.5 7C8.879 7 10 8.121 10 9.5C10 10.879 8.879 12 7.5 12C6.121 12 5 10.879 5 9.5Z","key":"0"}),
    createElement('path', {"d":"M14 9.5C14 8.121 15.121 7 16.5 7C17.879 7 19 8.121 19 9.5C19 10.879 17.879 12 16.5 12C15.121 12 14 10.879 14 9.5Z","key":"1"}),
    createElement('path', {"d":"M7.5 12L16.5 12","key":"2"}),
    createElement('path', {"d":"M5 2L19 2C20.656 2 22 3.344 22 5L22 14C22 15.656 20.656 17 19 17L12.184 17L6 22L6 17L5 17C3.344 17 2 15.656 2 14L2 5C2 3.344 3.344 2 5 2Z","key":"3"})
  );
});

ChatVoicemailBoxy.displayName = 'ChatVoicemailBoxy';

export default ChatVoicemailBoxy;
export { ChatVoicemailBoxy };

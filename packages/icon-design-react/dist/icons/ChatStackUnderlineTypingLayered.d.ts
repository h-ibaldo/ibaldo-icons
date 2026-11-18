import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackUnderlineTypingLayeredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackUnderlineTypingLayered: ForwardRefExoticComponent<ChatStackUnderlineTypingLayeredProps & RefAttributes<SVGSVGElement>>;

export default ChatStackUnderlineTypingLayered;
export { ChatStackUnderlineTypingLayered };

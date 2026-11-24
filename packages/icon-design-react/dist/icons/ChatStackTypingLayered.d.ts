import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackTypingLayeredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackTypingLayered: ForwardRefExoticComponent<ChatStackTypingLayeredProps & RefAttributes<SVGSVGElement>>;

export default ChatStackTypingLayered;
export { ChatStackTypingLayered };

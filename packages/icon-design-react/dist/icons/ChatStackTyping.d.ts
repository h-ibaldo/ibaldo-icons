import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackTypingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackTyping: ForwardRefExoticComponent<ChatStackTypingProps & RefAttributes<SVGSVGElement>>;

export default ChatStackTyping;
export { ChatStackTyping };

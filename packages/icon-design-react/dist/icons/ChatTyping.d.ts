import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTypingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTyping: ForwardRefExoticComponent<ChatTypingProps & RefAttributes<SVGSVGElement>>;

export default ChatTyping;
export { ChatTyping };

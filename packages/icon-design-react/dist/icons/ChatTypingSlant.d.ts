import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTypingSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTypingSlant: ForwardRefExoticComponent<ChatTypingSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatTypingSlant;
export { ChatTypingSlant };

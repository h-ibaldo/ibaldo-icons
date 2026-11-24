import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackTypingFlippedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackTypingFlipped: ForwardRefExoticComponent<ChatStackTypingFlippedProps & RefAttributes<SVGSVGElement>>;

export default ChatStackTypingFlipped;
export { ChatStackTypingFlipped };

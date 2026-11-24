import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTypingPointedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTypingPointed: ForwardRefExoticComponent<ChatTypingPointedProps & RefAttributes<SVGSVGElement>>;

export default ChatTypingPointed;
export { ChatTypingPointed };

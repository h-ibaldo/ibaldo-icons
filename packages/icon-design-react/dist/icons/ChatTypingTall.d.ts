import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTypingTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTypingTall: ForwardRefExoticComponent<ChatTypingTallProps & RefAttributes<SVGSVGElement>>;

export default ChatTypingTall;
export { ChatTypingTall };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTypingBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTypingBroken: ForwardRefExoticComponent<ChatTypingBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatTypingBroken;
export { ChatTypingBroken };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTypingRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTypingRound: ForwardRefExoticComponent<ChatTypingRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatTypingRound;
export { ChatTypingRound };

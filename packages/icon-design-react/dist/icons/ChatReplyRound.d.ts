import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatReplyRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatReplyRound: ForwardRefExoticComponent<ChatReplyRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatReplyRound;
export { ChatReplyRound };

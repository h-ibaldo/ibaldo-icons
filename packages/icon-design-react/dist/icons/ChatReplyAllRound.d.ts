import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatReplyAllRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatReplyAllRound: ForwardRefExoticComponent<ChatReplyAllRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatReplyAllRound;
export { ChatReplyAllRound };

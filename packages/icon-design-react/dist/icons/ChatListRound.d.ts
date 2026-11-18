import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatListRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatListRound: ForwardRefExoticComponent<ChatListRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatListRound;
export { ChatListRound };

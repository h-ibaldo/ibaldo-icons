import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatUserRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatUserRound: ForwardRefExoticComponent<ChatUserRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatUserRound;
export { ChatUserRound };

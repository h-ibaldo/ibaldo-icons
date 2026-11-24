import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatSunRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatSunRound: ForwardRefExoticComponent<ChatSunRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatSunRound;
export { ChatSunRound };

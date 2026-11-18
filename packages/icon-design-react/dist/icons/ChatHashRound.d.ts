import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatHashRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatHashRound: ForwardRefExoticComponent<ChatHashRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatHashRound;
export { ChatHashRound };

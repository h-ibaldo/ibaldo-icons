import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotRound: ForwardRefExoticComponent<ChatDotRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatDotRound;
export { ChatDotRound };

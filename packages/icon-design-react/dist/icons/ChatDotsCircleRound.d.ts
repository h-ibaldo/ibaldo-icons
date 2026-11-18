import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotsCircleRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotsCircleRound: ForwardRefExoticComponent<ChatDotsCircleRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatDotsCircleRound;
export { ChatDotsCircleRound };

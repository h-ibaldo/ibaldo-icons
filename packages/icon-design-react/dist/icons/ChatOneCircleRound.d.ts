import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatOneCircleRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatOneCircleRound: ForwardRefExoticComponent<ChatOneCircleRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatOneCircleRound;
export { ChatOneCircleRound };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatMinusCircleRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatMinusCircleRound: ForwardRefExoticComponent<ChatMinusCircleRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatMinusCircleRound;
export { ChatMinusCircleRound };

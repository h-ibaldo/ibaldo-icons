import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatXCircleRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatXCircleRound: ForwardRefExoticComponent<ChatXCircleRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatXCircleRound;
export { ChatXCircleRound };

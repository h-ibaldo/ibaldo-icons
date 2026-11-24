import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatPlusCircleRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatPlusCircleRound: ForwardRefExoticComponent<ChatPlusCircleRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatPlusCircleRound;
export { ChatPlusCircleRound };

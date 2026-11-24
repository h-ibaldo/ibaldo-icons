import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotsRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotsRound: ForwardRefExoticComponent<ChatDotsRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatDotsRound;
export { ChatDotsRound };

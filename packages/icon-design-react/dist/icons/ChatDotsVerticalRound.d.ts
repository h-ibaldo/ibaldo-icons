import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotsVerticalRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotsVerticalRound: ForwardRefExoticComponent<ChatDotsVerticalRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatDotsVerticalRound;
export { ChatDotsVerticalRound };

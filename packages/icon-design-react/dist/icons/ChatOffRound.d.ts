import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatOffRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatOffRound: ForwardRefExoticComponent<ChatOffRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatOffRound;
export { ChatOffRound };

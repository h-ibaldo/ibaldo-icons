import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatMinusRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatMinusRound: ForwardRefExoticComponent<ChatMinusRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatMinusRound;
export { ChatMinusRound };

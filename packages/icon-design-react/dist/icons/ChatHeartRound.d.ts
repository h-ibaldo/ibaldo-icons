import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatHeartRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatHeartRound: ForwardRefExoticComponent<ChatHeartRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatHeartRound;
export { ChatHeartRound };

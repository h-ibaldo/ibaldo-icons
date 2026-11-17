import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDollarRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDollarRound: ForwardRefExoticComponent<ChatDollarRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatDollarRound;
export { ChatDollarRound };

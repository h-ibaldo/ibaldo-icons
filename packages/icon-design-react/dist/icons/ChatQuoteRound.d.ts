import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatQuoteRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatQuoteRound: ForwardRefExoticComponent<ChatQuoteRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatQuoteRound;
export { ChatQuoteRound };

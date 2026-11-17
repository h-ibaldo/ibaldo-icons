import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatQuoteProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatQuote: ForwardRefExoticComponent<ChatQuoteProps & RefAttributes<SVGSVGElement>>;

export default ChatQuote;
export { ChatQuote };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatQuoteSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatQuoteSharp: ForwardRefExoticComponent<ChatQuoteSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatQuoteSharp;
export { ChatQuoteSharp };

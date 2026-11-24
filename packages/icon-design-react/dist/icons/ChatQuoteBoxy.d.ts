import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatQuoteBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatQuoteBoxy: ForwardRefExoticComponent<ChatQuoteBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatQuoteBoxy;
export { ChatQuoteBoxy };

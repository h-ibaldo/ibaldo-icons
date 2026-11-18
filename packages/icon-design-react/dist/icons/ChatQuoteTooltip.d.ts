import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatQuoteTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatQuoteTooltip: ForwardRefExoticComponent<ChatQuoteTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatQuoteTooltip;
export { ChatQuoteTooltip };

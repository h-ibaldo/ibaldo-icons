import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDollarTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDollarTooltip: ForwardRefExoticComponent<ChatDollarTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatDollarTooltip;
export { ChatDollarTooltip };

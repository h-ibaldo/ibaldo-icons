import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatWarningTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatWarningTooltip: ForwardRefExoticComponent<ChatWarningTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatWarningTooltip;
export { ChatWarningTooltip };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatAlertTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatAlertTooltip: ForwardRefExoticComponent<ChatAlertTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatAlertTooltip;
export { ChatAlertTooltip };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackAlertTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackAlertTooltip: ForwardRefExoticComponent<ChatStackAlertTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatStackAlertTooltip;
export { ChatStackAlertTooltip };

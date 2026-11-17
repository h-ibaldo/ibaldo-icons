import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackWarningTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackWarningTooltip: ForwardRefExoticComponent<ChatStackWarningTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatStackWarningTooltip;
export { ChatStackWarningTooltip };

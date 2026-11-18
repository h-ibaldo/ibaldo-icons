import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackEditTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackEditTooltip: ForwardRefExoticComponent<ChatStackEditTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatStackEditTooltip;
export { ChatStackEditTooltip };

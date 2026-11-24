import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatChartTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatChartTooltip: ForwardRefExoticComponent<ChatChartTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatChartTooltip;
export { ChatChartTooltip };

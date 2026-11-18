import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatChartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatChart: ForwardRefExoticComponent<ChatChartProps & RefAttributes<SVGSVGElement>>;

export default ChatChart;
export { ChatChart };

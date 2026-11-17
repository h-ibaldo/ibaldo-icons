import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatChartSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatChartSlant: ForwardRefExoticComponent<ChatChartSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatChartSlant;
export { ChatChartSlant };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatChartBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatChartBroken: ForwardRefExoticComponent<ChatChartBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatChartBroken;
export { ChatChartBroken };

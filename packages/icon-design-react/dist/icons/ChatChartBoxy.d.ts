import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatChartBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatChartBoxy: ForwardRefExoticComponent<ChatChartBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatChartBoxy;
export { ChatChartBoxy };

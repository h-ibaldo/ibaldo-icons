import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatChartSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatChartSharp: ForwardRefExoticComponent<ChatChartSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatChartSharp;
export { ChatChartSharp };

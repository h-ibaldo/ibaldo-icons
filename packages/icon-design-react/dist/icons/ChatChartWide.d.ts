import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatChartWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatChartWide: ForwardRefExoticComponent<ChatChartWideProps & RefAttributes<SVGSVGElement>>;

export default ChatChartWide;
export { ChatChartWide };

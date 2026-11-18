import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatChartRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatChartRound: ForwardRefExoticComponent<ChatChartRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatChartRound;
export { ChatChartRound };

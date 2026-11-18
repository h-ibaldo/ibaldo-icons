import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckCircleTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckCircleTooltip: ForwardRefExoticComponent<ChatCheckCircleTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckCircleTooltip;
export { ChatCheckCircleTooltip };

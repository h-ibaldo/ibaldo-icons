import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotsCircleTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotsCircleTooltip: ForwardRefExoticComponent<ChatDotsCircleTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatDotsCircleTooltip;
export { ChatDotsCircleTooltip };

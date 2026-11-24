import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatOneCircleTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatOneCircleTooltip: ForwardRefExoticComponent<ChatOneCircleTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatOneCircleTooltip;
export { ChatOneCircleTooltip };

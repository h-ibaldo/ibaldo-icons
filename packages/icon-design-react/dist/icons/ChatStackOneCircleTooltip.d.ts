import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackOneCircleTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackOneCircleTooltip: ForwardRefExoticComponent<ChatStackOneCircleTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatStackOneCircleTooltip;
export { ChatStackOneCircleTooltip };

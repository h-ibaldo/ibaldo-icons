import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackDotsCircleTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackDotsCircleTooltip: ForwardRefExoticComponent<ChatStackDotsCircleTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatStackDotsCircleTooltip;
export { ChatStackDotsCircleTooltip };

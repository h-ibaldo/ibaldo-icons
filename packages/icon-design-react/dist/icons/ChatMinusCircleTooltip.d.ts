import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatMinusCircleTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatMinusCircleTooltip: ForwardRefExoticComponent<ChatMinusCircleTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatMinusCircleTooltip;
export { ChatMinusCircleTooltip };

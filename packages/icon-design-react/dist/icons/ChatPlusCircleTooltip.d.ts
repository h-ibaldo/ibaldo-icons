import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatPlusCircleTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatPlusCircleTooltip: ForwardRefExoticComponent<ChatPlusCircleTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatPlusCircleTooltip;
export { ChatPlusCircleTooltip };

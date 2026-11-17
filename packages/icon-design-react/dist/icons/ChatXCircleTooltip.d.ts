import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatXCircleTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatXCircleTooltip: ForwardRefExoticComponent<ChatXCircleTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatXCircleTooltip;
export { ChatXCircleTooltip };

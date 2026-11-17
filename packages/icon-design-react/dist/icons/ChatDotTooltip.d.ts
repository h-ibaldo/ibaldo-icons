import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotTooltip: ForwardRefExoticComponent<ChatDotTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatDotTooltip;
export { ChatDotTooltip };

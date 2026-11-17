import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatForwardTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatForwardTooltip: ForwardRefExoticComponent<ChatForwardTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatForwardTooltip;
export { ChatForwardTooltip };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatForwardCornerTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatForwardCornerTooltip: ForwardRefExoticComponent<ChatForwardCornerTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatForwardCornerTooltip;
export { ChatForwardCornerTooltip };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackHeartCornerTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackHeartCornerTooltip: ForwardRefExoticComponent<ChatStackHeartCornerTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatStackHeartCornerTooltip;
export { ChatStackHeartCornerTooltip };

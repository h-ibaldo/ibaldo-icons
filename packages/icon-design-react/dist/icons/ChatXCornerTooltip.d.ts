import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatXCornerTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatXCornerTooltip: ForwardRefExoticComponent<ChatXCornerTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatXCornerTooltip;
export { ChatXCornerTooltip };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatPlusCornerTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatPlusCornerTooltip: ForwardRefExoticComponent<ChatPlusCornerTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatPlusCornerTooltip;
export { ChatPlusCornerTooltip };

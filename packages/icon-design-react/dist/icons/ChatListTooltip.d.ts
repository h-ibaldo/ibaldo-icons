import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatListTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatListTooltip: ForwardRefExoticComponent<ChatListTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatListTooltip;
export { ChatListTooltip };

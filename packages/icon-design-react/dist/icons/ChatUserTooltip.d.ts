import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatUserTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatUserTooltip: ForwardRefExoticComponent<ChatUserTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatUserTooltip;
export { ChatUserTooltip };

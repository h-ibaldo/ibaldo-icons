import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatHeartTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatHeartTooltip: ForwardRefExoticComponent<ChatHeartTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatHeartTooltip;
export { ChatHeartTooltip };

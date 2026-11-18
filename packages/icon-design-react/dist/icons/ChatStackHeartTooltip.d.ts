import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackHeartTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackHeartTooltip: ForwardRefExoticComponent<ChatStackHeartTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatStackHeartTooltip;
export { ChatStackHeartTooltip };

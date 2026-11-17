import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackClockTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackClockTooltip: ForwardRefExoticComponent<ChatStackClockTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatStackClockTooltip;
export { ChatStackClockTooltip };

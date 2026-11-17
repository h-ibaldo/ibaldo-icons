import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatClockTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatClockTooltip: ForwardRefExoticComponent<ChatClockTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatClockTooltip;
export { ChatClockTooltip };

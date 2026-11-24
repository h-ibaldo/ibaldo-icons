import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatClockTooltip2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatClockTooltip2: ForwardRefExoticComponent<ChatClockTooltip2Props & RefAttributes<SVGSVGElement>>;

export default ChatClockTooltip2;
export { ChatClockTooltip2 };

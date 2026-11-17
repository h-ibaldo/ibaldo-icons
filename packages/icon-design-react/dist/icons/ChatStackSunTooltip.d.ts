import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackSunTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackSunTooltip: ForwardRefExoticComponent<ChatStackSunTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatStackSunTooltip;
export { ChatStackSunTooltip };

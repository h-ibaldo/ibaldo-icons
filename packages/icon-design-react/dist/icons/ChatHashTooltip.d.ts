import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatHashTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatHashTooltip: ForwardRefExoticComponent<ChatHashTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatHashTooltip;
export { ChatHashTooltip };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatVideoTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatVideoTooltip: ForwardRefExoticComponent<ChatVideoTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatVideoTooltip;
export { ChatVideoTooltip };

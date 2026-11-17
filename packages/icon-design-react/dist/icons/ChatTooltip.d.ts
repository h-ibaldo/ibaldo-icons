import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTooltip: ForwardRefExoticComponent<ChatTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatTooltip;
export { ChatTooltip };

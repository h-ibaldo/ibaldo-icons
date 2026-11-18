import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatImageTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatImageTooltip: ForwardRefExoticComponent<ChatImageTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatImageTooltip;
export { ChatImageTooltip };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotsUnderscoreTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotsUnderscoreTooltip: ForwardRefExoticComponent<ChatDotsUnderscoreTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatDotsUnderscoreTooltip;
export { ChatDotsUnderscoreTooltip };

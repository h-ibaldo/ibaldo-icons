import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTypingTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTypingTooltip: ForwardRefExoticComponent<ChatTypingTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatTypingTooltip;
export { ChatTypingTooltip };

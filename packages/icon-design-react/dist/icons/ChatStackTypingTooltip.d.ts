import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackTypingTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackTypingTooltip: ForwardRefExoticComponent<ChatStackTypingTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatStackTypingTooltip;
export { ChatStackTypingTooltip };

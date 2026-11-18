import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackUnderlineTypingTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackUnderlineTypingTooltip: ForwardRefExoticComponent<ChatStackUnderlineTypingTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatStackUnderlineTypingTooltip;
export { ChatStackUnderlineTypingTooltip };

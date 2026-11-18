import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatUnderlineTypingTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatUnderlineTypingTooltip: ForwardRefExoticComponent<ChatUnderlineTypingTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatUnderlineTypingTooltip;
export { ChatUnderlineTypingTooltip };

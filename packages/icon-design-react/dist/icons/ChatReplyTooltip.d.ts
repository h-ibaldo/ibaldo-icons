import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatReplyTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatReplyTooltip: ForwardRefExoticComponent<ChatReplyTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatReplyTooltip;
export { ChatReplyTooltip };

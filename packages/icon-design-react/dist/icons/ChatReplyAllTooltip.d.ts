import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatReplyAllTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatReplyAllTooltip: ForwardRefExoticComponent<ChatReplyAllTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatReplyAllTooltip;
export { ChatReplyAllTooltip };

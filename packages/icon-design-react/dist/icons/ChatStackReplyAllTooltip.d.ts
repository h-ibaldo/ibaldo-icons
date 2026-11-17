import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackReplyAllTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackReplyAllTooltip: ForwardRefExoticComponent<ChatStackReplyAllTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatStackReplyAllTooltip;
export { ChatStackReplyAllTooltip };

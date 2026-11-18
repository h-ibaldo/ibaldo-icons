import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackReplyTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackReplyTooltip: ForwardRefExoticComponent<ChatStackReplyTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatStackReplyTooltip;
export { ChatStackReplyTooltip };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackUnderlineTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackUnderlineTooltip: ForwardRefExoticComponent<ChatStackUnderlineTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatStackUnderlineTooltip;
export { ChatStackUnderlineTooltip };

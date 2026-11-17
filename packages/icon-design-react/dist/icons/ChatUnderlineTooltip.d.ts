import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatUnderlineTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatUnderlineTooltip: ForwardRefExoticComponent<ChatUnderlineTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatUnderlineTooltip;
export { ChatUnderlineTooltip };

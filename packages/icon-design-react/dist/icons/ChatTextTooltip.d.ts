import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTextTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTextTooltip: ForwardRefExoticComponent<ChatTextTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatTextTooltip;
export { ChatTextTooltip };

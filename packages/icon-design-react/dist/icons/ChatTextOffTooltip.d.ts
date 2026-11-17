import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTextOffTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTextOffTooltip: ForwardRefExoticComponent<ChatTextOffTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatTextOffTooltip;
export { ChatTextOffTooltip };

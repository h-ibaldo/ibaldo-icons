import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatOffTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatOffTooltip: ForwardRefExoticComponent<ChatOffTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatOffTooltip;
export { ChatOffTooltip };

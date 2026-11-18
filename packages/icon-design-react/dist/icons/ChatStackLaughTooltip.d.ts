import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackLaughTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackLaughTooltip: ForwardRefExoticComponent<ChatStackLaughTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatStackLaughTooltip;
export { ChatStackLaughTooltip };

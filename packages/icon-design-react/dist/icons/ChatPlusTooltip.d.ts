import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatPlusTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatPlusTooltip: ForwardRefExoticComponent<ChatPlusTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatPlusTooltip;
export { ChatPlusTooltip };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatInfoTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatInfoTooltip: ForwardRefExoticComponent<ChatInfoTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatInfoTooltip;
export { ChatInfoTooltip };

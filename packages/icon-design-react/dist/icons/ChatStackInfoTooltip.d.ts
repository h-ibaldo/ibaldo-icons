import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackInfoTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackInfoTooltip: ForwardRefExoticComponent<ChatStackInfoTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatStackInfoTooltip;
export { ChatStackInfoTooltip };

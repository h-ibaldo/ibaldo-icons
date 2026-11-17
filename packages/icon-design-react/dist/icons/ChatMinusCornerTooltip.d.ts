import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatMinusCornerTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatMinusCornerTooltip: ForwardRefExoticComponent<ChatMinusCornerTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatMinusCornerTooltip;
export { ChatMinusCornerTooltip };

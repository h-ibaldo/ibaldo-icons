import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatMinusTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatMinusTooltip: ForwardRefExoticComponent<ChatMinusTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatMinusTooltip;
export { ChatMinusTooltip };

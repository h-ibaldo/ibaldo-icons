import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckDoubleCornerTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckDoubleCornerTooltip: ForwardRefExoticComponent<ChatCheckDoubleCornerTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckDoubleCornerTooltip;
export { ChatCheckDoubleCornerTooltip };

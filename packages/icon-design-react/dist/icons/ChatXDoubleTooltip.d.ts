import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatXDoubleTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatXDoubleTooltip: ForwardRefExoticComponent<ChatXDoubleTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatXDoubleTooltip;
export { ChatXDoubleTooltip };

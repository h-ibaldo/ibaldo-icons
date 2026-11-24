import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackCheckDoubleTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackCheckDoubleTooltip: ForwardRefExoticComponent<ChatStackCheckDoubleTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatStackCheckDoubleTooltip;
export { ChatStackCheckDoubleTooltip };

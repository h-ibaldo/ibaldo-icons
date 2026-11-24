import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackXDoubleTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackXDoubleTooltip: ForwardRefExoticComponent<ChatStackXDoubleTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatStackXDoubleTooltip;
export { ChatStackXDoubleTooltip };

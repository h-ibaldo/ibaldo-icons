import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackCheckTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackCheckTooltip: ForwardRefExoticComponent<ChatStackCheckTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatStackCheckTooltip;
export { ChatStackCheckTooltip };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackForwardTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackForwardTooltip: ForwardRefExoticComponent<ChatStackForwardTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatStackForwardTooltip;
export { ChatStackForwardTooltip };

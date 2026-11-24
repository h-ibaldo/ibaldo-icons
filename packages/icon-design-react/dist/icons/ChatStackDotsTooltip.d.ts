import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackDotsTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackDotsTooltip: ForwardRefExoticComponent<ChatStackDotsTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatStackDotsTooltip;
export { ChatStackDotsTooltip };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackDotsVerticalTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackDotsVerticalTooltip: ForwardRefExoticComponent<ChatStackDotsVerticalTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatStackDotsVerticalTooltip;
export { ChatStackDotsVerticalTooltip };

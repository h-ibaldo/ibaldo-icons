import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotsCursorTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotsCursorTooltip: ForwardRefExoticComponent<ChatDotsCursorTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatDotsCursorTooltip;
export { ChatDotsCursorTooltip };

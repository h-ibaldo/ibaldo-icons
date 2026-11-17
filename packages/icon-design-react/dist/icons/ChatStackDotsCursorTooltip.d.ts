import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackDotsCursorTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackDotsCursorTooltip: ForwardRefExoticComponent<ChatStackDotsCursorTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatStackDotsCursorTooltip;
export { ChatStackDotsCursorTooltip };

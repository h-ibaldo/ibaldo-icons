import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTriangleTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTriangleTooltip: ForwardRefExoticComponent<ChatTriangleTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatTriangleTooltip;
export { ChatTriangleTooltip };

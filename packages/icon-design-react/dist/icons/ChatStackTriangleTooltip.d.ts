import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackTriangleTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackTriangleTooltip: ForwardRefExoticComponent<ChatStackTriangleTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatStackTriangleTooltip;
export { ChatStackTriangleTooltip };

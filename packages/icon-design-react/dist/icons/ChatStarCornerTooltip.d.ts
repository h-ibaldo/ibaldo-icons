import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStarCornerTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStarCornerTooltip: ForwardRefExoticComponent<ChatStarCornerTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatStarCornerTooltip;
export { ChatStarCornerTooltip };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckCornerTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckCornerTooltip: ForwardRefExoticComponent<ChatCheckCornerTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckCornerTooltip;
export { ChatCheckCornerTooltip };

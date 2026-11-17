import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckTooltip: ForwardRefExoticComponent<ChatCheckTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckTooltip;
export { ChatCheckTooltip };

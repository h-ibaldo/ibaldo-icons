import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackBanCornerTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackBanCornerTooltip: ForwardRefExoticComponent<ChatStackBanCornerTooltipProps & RefAttributes<SVGSVGElement>>;

export default ChatStackBanCornerTooltip;
export { ChatStackBanCornerTooltip };
